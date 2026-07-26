#!/usr/bin/env python3
"""Extract per-slide text + metadata from the 8 CERT course PDFs into data/deck-text.json.

This is the single precomputed source both search.html (site-wide search) and
transcript.html (accessible text transcripts) read at runtime. Static output,
no server needed — re-run this script by hand whenever a section PDF changes:

    python scripts/extract-decks.py

Requires: pypdf (already used elsewhere in this environment; `pip install pypdf` if missing).
"""
import json
import re
from datetime import datetime, timezone
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent.parent

# Keep in sync with reference-sections.js.
SECTIONS = [
    {"n": 1, "name": "Disaster Preparedness",          "base": "section_01_unit_1_ppt_508", "icon": "🏠"},
    {"n": 2, "name": "Fire Safety & Utility Controls",  "base": "section_02_unit_2_ppt_508", "icon": "🔥"},
    {"n": 3, "name": "Disaster Medical Ops — Part 1",   "base": "section_03_unit_3_ppt_508", "icon": "🏥"},
    {"n": 4, "name": "Disaster Medical Ops — Part 2",   "base": "section_04_unit_4_ppt_508", "icon": "🩺"},
    {"n": 5, "name": "Light Search & Rescue",           "base": "section_05_unit_5_ppt_508", "icon": "🔍"},
    {"n": 6, "name": "CERT Organization",               "base": "section_06_unit_6_ppt_508", "icon": "🗂️"},
    {"n": 7, "name": "Disaster Psychology",             "base": "section_07_unit_7_ppt_508", "icon": "🧠"},
    {"n": 8, "name": "Terrorism & CERT",                "base": "section_08_unit_8_ppt_508", "icon": "💥"},
]

# Repeating header/footer boilerplate LibreOffice stamps on every slide
# ("CERT Basic Training", "Unit N: <title>", bare "N-NN" page markers, and
# the concatenated "N-NNCERT Basic Training" variant) — stripped so
# transcripts/search show slide content only, not page furniture.
FOOTER_PATTERNS = [
    re.compile(r'^CERT Basic Training\s*$', re.I),
    re.compile(r'^Unit\s*\d+\s*:?.*$', re.I),
    re.compile(r'^\d{1,2}-\d{1,4}\s*(CERT Basic Training)?\s*$', re.I),
]

# Wingdings/Symbol sub-bullet glyph pypdf decodes into the Private Use Area —
# renders as a missing-glyph box in browsers, so map it to a real bullet.
SYMBOL_MAP = {'': '▪'}


def dedupe_line(line: str) -> str:
    """Some slides have two overlapping text frames whose extracted text
    concatenates with no separator (e.g. "CERT TrainingCERT Training").
    Collapse an exact first-half/second-half repeat to a single copy."""
    n = len(line)
    if n >= 4 and n % 2 == 0 and line[:n // 2] == line[n // 2:]:
        return line[:n // 2]
    return line


def clean_page_text(raw: str) -> str:
    for bad, good in SYMBOL_MAP.items():
        raw = raw.replace(bad, good)
    kept = []
    for line in raw.split('\n'):
        s = dedupe_line(line.strip())
        if not s or any(p.match(s) for p in FOOTER_PATTERNS):
            continue
        kept.append(s)
    # A handful of slides have their whole title block duplicated (two
    # overlapping frames spanning several lines each) — collapse an exact
    # first-half/second-half repeat of the full line list the same way.
    n = len(kept)
    if n >= 2 and n % 2 == 0 and kept[:n // 2] == kept[n // 2:]:
        kept = kept[:n // 2]
    return '\n'.join(kept)


def parse_pdf_date(raw):
    if not raw:
        return None
    m = re.match(r"D:(\d{4})(\d{2})(\d{2})", raw)
    if not m:
        return None
    return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"


def main():
    out_sections = []
    for sec in SECTIONS:
        pdf_path = ROOT / f"{sec['base']}.pdf"
        reader = PdfReader(str(pdf_path))
        meta = reader.metadata or {}
        pages = []
        for i, page in enumerate(reader.pages, start=1):
            text = clean_page_text(page.extract_text() or "")
            pages.append({"n": i, "text": text})
        out_sections.append({
            **sec,
            "pageCount": len(reader.pages),
            "sourceMeta": {
                "title": meta.get("/Title"),
                "creationDate": parse_pdf_date(meta.get("/CreationDate")),
                "producer": meta.get("/Producer"),
            },
            "pages": pages,
        })
        print(f"  extracted {sec['base']}.pdf — {len(pages)} pages")

    out = {
        "generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "sections": out_sections,
    }
    out_path = ROOT / "data" / "deck-text.json"
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"Wrote {out_path} ({out_path.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
