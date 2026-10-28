# IBM Db2 TechX Summit 2026 — Landing Page

A day of IBM Db2 — Data and AI. Friday, 30 October 2026 · 9:00 AM – 5:00 PM IST · GL Bajaj Group of Institutions, Mathura.

React + Vite single-page site with WebGL ASCII backgrounds (GradientASCII from React Bits), Motion animations and a pure-black IBM theme.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Edit content

Every fact and link lives in [`src/data.js`](src/data.js):

- `LUMA_URL` — the registration link used by every Register button
- `SCHEDULE`, `HACK_STEPS`, `TOOLKIT`, `SPEAKERS`, `FAQ` — page content
- `VIDEOS`, `RESOURCES` — tutorials, blogs and connector docs
- `COMMUNITY_EDITION` — Db2 Community Edition setup options

Logos, speaker photos and framework icons are in `public/`.

## Deploy

Any static host works (Vercel, Netlify, GitHub Pages): build command `npm run build`, output directory `dist`.
