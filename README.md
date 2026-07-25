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
- **Final exam answer key** — `CERT BASIC TRAINING FINAL EXAM ANSWER KEY.docx`.

## Tech overview

- Static HTML/CSS/JS, no framework, no build step, no third-party dependencies.
- **Shared modules** — `theme.js` (light/dark theme, icons, accessibility base),
  `cert-terms.js` (glossary term data), `reference-sections.js` (course section list).
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
reference-sections.js                   Course section metadata
theme.js                                Shared theme, icons, and accessibility base
cert-terms.js                           Shared CERT term data
manifest.json                           PWA manifest
section_0X_unit_X_ppt_508.{pdf,pptx}    Course materials, Sections 1–8
CERT BASIC TRAINING FINAL EXAM ANSWER KEY.docx
```

## Data & privacy

This app makes no network calls and stores no data — it only reads and
displays the bundled reference files.

## License

Proprietary — all rights reserved. See [LICENSE](LICENSE). This is an independent
training aid and is **not** affiliated with or endorsed by FEMA or any government
agency, and is not a substitute for certified, hands-on CERT instruction.
