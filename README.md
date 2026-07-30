# CERT Reference Guide

A browser-based reference companion for FEMA CERT Basic Training —
a searchable glossary and the full course material library, for
Community Emergency Response Team members and community volunteers.
Free to run, no install, works on any device.

## What's inside

- **CERT Glossary** — a searchable reference of 208 terms: 80 from CERT Basic Training, 102
  more covering DCAP-BTLS/SAMPLE/OPQRST/AVPU/GCS, ICS roles, hazmat zones, named hazards, and
  other multi-agency Field Reference material, plus the full 26-letter NATO phonetic alphabet.
  Switch how the list is organized: alphabetically (default), by course section, or by the
  agency each term comes from (FEMA, CISA, OSHA, NOAA/NWS, USFA, HHS, Red Cross, VOAD,
  UN/GDACS, USGS, ICAO).
- **Course Materials** — the official CERT Basic Training presentations for
  Sections 1–8 (disaster prep, fire safety, medical ops, search & rescue,
  CERT organization, disaster psychology, and terrorism/CERT), each available
  as PDF and PowerPoint, with an in-site viewer, plus the full 268-page
  Participant Manual as its own card.
- **Search Everything** — one search box across the glossary and every slide
  in all 8 course decks, linking straight to the matching slide or transcript.
  The search bar lives right on the home page (submits to `search.html?q=`);
  `search.html` also supports that deep link directly.
- **Transcripts** — an auto-generated, slide-by-slide text transcript of each
  section, for fast skimming, in-page search, and screen readers.
- **Changelog** — what's changed on the site, plus a per-section note of when
  each course PDF's source file was prepared.
- **Field Reference** — a curated set of 45 multi-agency links (FEMA, Ready.gov,
  NOAA/NWS, USGS, CISA, OSHA, U.S. Fire Administration, American Red Cross, HHS, Census
  Bureau, GDACS, DHS, SAMHSA, ARRL, CDC, and more) across nine categories — hazard-specific
  guides (including live monitors like earthquake/hurricane/wildfire trackers and the
  National Risk Index), live situational awareness & local conditions, security, worker
  safety, fire & utility safety, search & rescue (FEMA's Urban Search & Rescue System and
  OSHA's structural-collapse hazard guide), incident command (including the
  IS-100/IS-700/IS-315 self-paced courses), amateur radio & volunteer communications
  (ARES), and family preparedness (including the Disaster Distress Helpline and CDC
  guidance on post-disaster food/water safety and injury prevention). Every card links out
  to the source's own site rather than being hosted here, and where relevant, tags which
  CERT course section it complements — every one of the 8 course sections now has at
  least one link. (The Participant Manual itself now lives under Course Materials.)
- **Visual Aids** — 13 original diagrams and animations, grouped by section on the gallery page.
  9 illustrate course concepts directly: the fire triangle, structural collapse voids, each of the
  5 classes of fire (modeled and animated individually — its own burning material, its own correct
  extinguishing agent, and a moving camera), the CERT command structure, and the phases of a
  crisis. 4 more (built in Canva) summarize Field Reference material that isn't tied to a specific
  slide: Know Your Hazards, Run. Hide. Fight., Home Fire Escape Plan, and Build a Kit. Make a Plan.
  Stay Informed. Each has its own detail page (image/video, full description, sources, and the
  matching slide where there is one), plus an inline embed on that slide's transcript for the
  course-linked ones.
- **Final exam answer key** — `CERT BASIC TRAINING FINAL EXAM ANSWER KEY.docx`.

Not included: a "CERT Field Operations Guide" (FOG). The versions in wide circulation are a
copyrighted commercial product (© QuickSeries Publishing), not a FEMA public-domain work, so
it isn't ours to redistribute.

## Tech overview

- Static HTML/CSS/JS, no framework, no build step, no third-party runtime dependencies.
- **Shared modules** — `theme.js` (light/dark theme, icons, accessibility base),
  `cert-terms.js` (glossary term data, section taxonomy, and agency taxonomy),
  `reference-sections.js` (course section list),
  `data/diagrams.js` (Visual Aids content + the `diagramMediaHtml()` renderer shared by
  `diagrams.html`, `diagram.html`, and `transcript.html`'s inline embeds), `data/field-references.js`
  (multi-agency link cards rendered by `companion.html`, categorized and optionally tagged with
  the CERT course section they complement).
- **Search + transcripts** run entirely client-side against `data/deck-text.js`, a
  precomputed extract of every slide's text. It's generated once (not at page-load) by
  `scripts/extract-decks.py` — re-run it after replacing any section PDF:
  ```bash
  pip install -r scripts/requirements.txt
  python scripts/extract-decks.py
  ```
- **Animated diagrams** are looping, muted, autoplaying MP4s (H.264, rendered in Blender —
  editable sources under `assets/blender/`), with a static poster frame shown until the video
  loads and as the gallery thumbnail. Playback falls back to a paused, user-controlled player
  when the visitor's OS has "reduce motion" enabled. A slide can carry more than one diagram
  (the 5 fire-class animations all reference the same slide) — `DIAGRAM_MAP` in `transcript.html`
  keys on `"<docBase>:<slide>"` to an array, not a single diagram.
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
reference.html                          Course Materials index (Participant Manual + 8 section decks)
viewer.html                             In-site deck viewer (PDF, with Office fallback)
search.html                             Site-wide search (glossary + all decks)
transcript.html                         Slide-by-slide text transcript for a section
changelog.html                          Site changelog + per-section source-file dates
companion.html                          Multi-agency field-reference links
cert-participant-manual-2019.pdf        FEMA CERT Basic Training Participant Manual (2019, 508) — linked from reference.html
diagrams.html                           Visual Aids gallery (compact cards, links to diagram.html)
diagram.html                            Diagram detail page (media, full info, sources, matching slide)
images/                                 Static diagram images (Canva)
media/                                  Animated diagram videos + poster frames (Blender)
assets/blender/                         Editable .blend source files for the animations
reference-sections.js                   Course section metadata
theme.js                                Shared theme, icons, and accessibility base
cert-terms.js                           Shared CERT term data
manifest.json                           PWA manifest
section_0X_unit_X_ppt_508.{pdf,pptx}    Course materials, Sections 1–8
CERT BASIC TRAINING FINAL EXAM ANSWER KEY.docx
scripts/extract-decks.py                Precomputes data/deck-text.js from the PDFs
data/deck-text.js                       Generated per-slide text + metadata (search + transcripts)
data/diagrams.js                        Visual Aids content (shared by diagrams.html + transcript.html)
data/field-references.js                Multi-agency field-reference links (shared by companion.html)
```

## Data & privacy

This app makes no network calls and stores no data — it only reads and
displays the bundled reference files.

## License

Proprietary — all rights reserved. See [LICENSE](LICENSE). This is an independent
training aid and is **not** affiliated with or endorsed by FEMA or any government
agency, and is not a substitute for certified, hands-on CERT instruction.
