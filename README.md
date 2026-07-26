# CERT Reference Guide

A browser-based reference companion for FEMA CERT Basic Training —
a searchable glossary and the full course material library, for
Community Emergency Response Team members and community volunteers.
Free to run, no install, works on any device.

## What's inside

- **CERT Glossary** — a searchable reference of 80+ key CERT terms, grouped
  by section with definitions and quick study notes.
- **Course Materials** — the official CERT Basic Training presentations for
  Sections 1–8 (disaster prep, fire safety, medical ops, search & rescue,
  CERT organization, disaster psychology, and terrorism/CERT), each available
  as PDF and PowerPoint, with an in-site viewer.
- **Search Everything** — one search box across the glossary and every slide
  in all 8 course decks, linking straight to the matching slide or transcript.
- **Transcripts** — an auto-generated, slide-by-slide text transcript of each
  section, for fast skimming, in-page search, and screen readers.
- **Changelog** — what's changed on the site, plus a per-section note of when
  each course PDF's source file was prepared.
- **Field Reference** — the official FEMA CERT Basic Training Participant Manual (2019,
  Section 508), the full narrative text behind the course decks.
- **Final exam answer key** — `CERT BASIC TRAINING FINAL EXAM ANSWER KEY.docx`.

Not included: a "CERT Field Operations Guide" (FOG). The versions in wide circulation are a
copyrighted commercial product (© QuickSeries Publishing), not a FEMA public-domain work, so
it isn't ours to redistribute.

## Tech overview

- Static HTML/CSS/JS, no framework, no build step, no third-party runtime dependencies.
- **Shared modules** — `theme.js` (light/dark theme, icons, accessibility base),
  `cert-terms.js` (glossary term data), `reference-sections.js` (course section list).
- **Search + transcripts** run entirely client-side against `data/deck-text.json`, a
  precomputed extract of every slide's text. It's generated once (not at page-load) by
  `scripts/extract-decks.py` — re-run it after replacing any section PDF:
  ```bash
  pip install -r scripts/requirements.txt
  python scripts/extract-decks.py
  ```
- **Hosting** — static files.

## Run locally

```bash
npx serve . -l 3000
```

Then open <http://localhost:3000>.

## Project structure

```
index.html                              Reference Guide hub
glossary.html                           Searchable term glossary
reference.html                          Course Materials index
viewer.html                             In-site deck viewer (PDF, with Office fallback)
search.html                             Site-wide search (glossary + all decks)
transcript.html                         Slide-by-slide text transcript for a section
changelog.html                          Site changelog + per-section source-file dates
companion.html                          FEMA companion documents (Participant Manual, etc.)
cert-participant-manual-2019.pdf        FEMA CERT Basic Training Participant Manual (2019, 508)
reference-sections.js                   Course section metadata
theme.js                                Shared theme, icons, and accessibility base
cert-terms.js                           Shared CERT term data
manifest.json                           PWA manifest
section_0X_unit_X_ppt_508.{pdf,pptx}    Course materials, Sections 1–8
CERT BASIC TRAINING FINAL EXAM ANSWER KEY.docx
scripts/extract-decks.py                Precomputes data/deck-text.json from the PDFs
data/deck-text.json                     Generated per-slide text + metadata (search + transcripts)
```

## Data & privacy

This app makes no network calls and stores no data — it only reads and
displays the bundled reference files.

## License

Proprietary — all rights reserved. See [LICENSE](LICENSE). This is an independent
training aid and is **not** affiliated with or endorsed by FEMA or any government
agency, and is not a substitute for certified, hands-on CERT instruction.
