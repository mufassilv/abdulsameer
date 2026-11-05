# Release 1 Proposal — Unified Learning, Franchise & HQ Management Platform

Single-page proposal / quotation site built with React 19, TypeScript, Vite and Tailwind CSS 4.

## Edit the content

Everything the page says lives in **`src/data/proposal.ts`**: client name, prepared-by details,
dates, requirement list, timeline phases, price lines, payment schedule, AMC, assumptions, terms
and the Phase 2 suggestions. Totals and GST are computed from the price lines.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve dist/ locally
```

## Publish on GitHub Pages

```bash
npm run deploy     # builds and pushes dist/ to the gh-pages branch
```

Pages is configured as **Settings → Pages → Source: Deploy from a branch → gh-pages / (root)**,
so every `npm run deploy` goes live at https://mufassilv.github.io/abdulsameer/ within a minute.

`vite.config.ts` uses `base: './'`, so the build works at that sub-path without further configuration.

## Save as PDF

The "Save PDF" button (or Ctrl/Cmd+P) prints a clean version: navigation is hidden, all three
scope modules are expanded, and the quotation starts on a new page.
