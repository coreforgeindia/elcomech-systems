---
name: Elcomech Next.js Standalone Site
description: Self-contained Next.js 14 Pages Router website at elcomech-nextjs/ — not a pnpm workspace member, runs standalone with npm install + npm run dev.
---

## Key facts

- **Location:** `elcomech-nextjs/` at project root — NOT inside `artifacts/` and NOT a pnpm workspace package.
- **Tech stack:** Next.js 14.2.x (Pages Router), Tailwind CSS 3, Framer Motion 11, Montserrat font via Google Fonts.
- **Replit workflow:** "Elcomech Next.js Website" — `cd elcomech-nextjs && npm run dev -- -p 3000`, port 3000.
- **Standalone use:** User can zip `elcomech-nextjs/`, run `npm install && npm run dev` — works independently.
- **Font:** Montserrat set as `fontFamily.sans` in tailwind.config.js AND loaded in `_document.tsx` via Google Fonts link.

## Pages

| Route | File |
|-------|------|
| / | pages/index.tsx |
| /about | pages/about.tsx |
| /products | pages/products/index.tsx |
| /products/[slug] | pages/products/[slug].tsx |
| /faq | pages/faq.tsx |
| /404 | pages/404.tsx |

## ICT/FCT Fixture Wizard

- **Why:** PDF "FAQ - ICT FCT Fixture" describes a 16-point requirements form for ordering custom ICT/FCT test fixtures.
- **Where:** `components/FixtureWizard.tsx` — 7-step wizard modal, shown only on products with `hasFixtureWizard: true` (pcb-test-system, testing-service).
- **Trigger:** "Start ICT/FCT Project" button + banner on eligible product detail pages.
- **Steps:** Customer details → PCB info (Gerber/CAD upload confirmations) → Test point counts (6 probe sizes) → Wiring & interface → Fixture type (vacuum/pneumatic/manual/RF) → Extras & connectors → Review & submit.

**Why router is Pages Router not App Router:** User specified "not app" — interpreted as Pages Router (Next.js /pages directory) for maximum standalone compatibility and simpler zip/run workflow.
