# IBM Db2 TechX Summit 2026 — Landing Page

> **A day of IBM Db2 — Data and AI.** Learn how AI and data are making the future.
>
> Friday, 30 October 2026 · 9:00 AM – 5:00 PM IST · GL Bajaj Group of Institutions, Mathura
> In association with IBM · Institution's Innovation Council (IIC) · NexaSphere

The official one-page website for the IBM Db2 TechX Summit and the **Db2Hack** 24-hour challenge. It is a React + Vite single-page app with a pure-black IBM theme, WebGL backgrounds and animated sections built from [React Bits](https://reactbits.dev) components. Every Register button opens the event's **Luma** checkout.

---

## Contents

- [What's on the page](#whats-on-the-page)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Project structure](#project-structure)
- [Editing content](#editing-content)
- [Luma registration](#luma-registration)
- [Animated components](#animated-components)
- [Images and logos](#images-and-logos)
- [Design system](#design-system)
- [Build and deploy](#build-and-deploy)
- [Browser support and performance](#browser-support-and-performance)
- [Troubleshooting](#troubleshooting)
- [Credits and licences](#credits-and-licences)

---

## What's on the page

Sections in page order. The `id` is the anchor used in the nav (`/#db2hack` and so on).

| # | Section | `id` | What it shows |
|---|---|---|---|
| — | Announcement ticker | — | Live status (registrations open / Db2Hack live / …), key dates |
| — | Nav | — | Section links, active-section highlight, Register button, mobile menu |
| — | Hero | `top` | ASCII WebGL background, title, tagline, Register + Explore buttons, date bar with live countdown |
| — | Partners | `partners` | IIC · NexaSphere · IBM, hosted by GL Bajaj |
| 01 | About | `about` | Event overview, stats, programme bento, who it's for |
| — | Statement band | — | "Every AI app starts with data." over an ASCII background |
| 02 | Schedule | `schedule` | Event flow for 30 Oct; the current session is tagged **Live now** on the day |
| 03 | Db2Hack | `db2hack` | 24-hour challenge: split-flap date board, steps, framework rule, rules |
| 04 | Toolkit | `toolkit` | Db2 ecosystem orbit, 9 packages with copy-to-clipboard installs, Db2 Community Edition guide, open-source logos |
| 05 | Resources | `resources` | 3 IBM tutorial videos, 27 links to announcements, community blogs, connector docs and getting-started pages |
| 06 | Rewards | `rewards` | Recognition and certificates. Winners' prizes are deliberately **not** shown — "Revealed live at the finale" |
| 07 | Speakers | `speakers` | Six IBM Db2 speakers, led by Program Director Gaurav Saxena |
| — | Text band | — | Scroll-speed marquee |
| 08 | Venue | `venue` | Address, time, Google Map, directions |
| 09 | FAQ | `faq` | 11 questions in an accordion |
| — | Final call to action | — | Register + WhatsApp buttons and the embedded Luma event card |
| — | Footer | — | Links, partner logos, interactive "Db2 TechX" wordmark |

### Time-aware behaviour

The page reads the visitor's clock and switches state on its own. All moments are defined in IST in `MOMENTS` in `src/data.js`.

| Before… | Countdown label | Ticker status |
|---|---|---|
| 28 Oct, 7:00 PM IST | Db2Hack goes live in | Registrations open |
| 29 Oct, 7:00 PM IST | Db2Hack submissions close in | Db2Hack is live |
| 30 Oct, 9:00 AM IST | Summit begins in | Submissions closed |
| 30 Oct, 5:00 PM IST | Happening now (no timer) | Live at GL Bajaj |
| after | That's a wrap | Thank you, builders |

---

## Tech stack

| Area | Choice |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Animation | [Motion](https://motion.dev) (`motion/react`), GSAP (used by ScrollReveal) |
| Effects | React Bits components, WebGL2 and Canvas 2D |
| Icons | `@hugeicons/react` (pulled in by MagicBento and CardSwap) |
| Fonts | IBM Plex Sans and IBM Plex Mono from Google Fonts; Roboto Flex (footer wordmark only) |
| Linting | oxlint |
| Styling | Plain CSS with custom properties, no CSS framework |

---

## Quick start

Requires **Node.js 20 or later** (tested with Node 22 and npm 10).

```bash
git clone https://github.com/DhruvChaturvediIBM/IBM_Db2_TechX_Summit_2026.git
cd IBM_Db2_TechX_Summit_2026
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serves the production build locally (http://localhost:4173) |
| `npm run lint` | Runs oxlint over the project |

---

## Project structure

```
.
├── index.html                  # Page shell: meta/OG tags, fonts, Luma checkout script
├── public/                     # Static files, served as-is from /
│   ├── og.png                  # Link-preview image (Luma cover)
│   ├── logos/                  # IBM, IBM Db2, IIC, NexaSphere, GL Bajaj, Db2 icons
│   ├── fw/                     # Framework logos (LangChain, CrewAI, LlamaIndex, …)
│   └── speakers/               # Speaker photos (transparent PNG, 600×600)
├── src/
│   ├── main.jsx                # Entry point (no StrictMode, see Troubleshooting)
│   ├── App.jsx                 # Every section of the page
│   ├── data.js                 # ALL content: dates, links, schedule, speakers, FAQ…
│   ├── index.css               # Theme tokens, layout and responsive rules
│   └── components/
│       ├── GradientASCII.jsx   # WebGL ASCII background (hero, bands, Db2Hack, final CTA)
│       ├── ui.jsx              # Shared helpers: Reveal, SectionHead, Countdown, CopyCmd…
│       └── reactbits/          # React Bits components, kept unmodified (+ LICENSE.md)
├── vite.config.js
└── package.json
```

---

## Editing content

**All text, dates and links live in [`src/data.js`](src/data.js).** In most cases you never need to touch `App.jsx`.

| Export | Controls |
|---|---|
| `LUMA_EVENT_ID` | The Luma event every Register button opens (see below) |
| `WHATSAPP_URL` | WhatsApp community link (buttons, FAQ, footer) |
| `MAPS_URL`, `MAPS_EMBED` | "Get directions" link and the map iframe |
| `MOMENTS` | The four timestamps that drive the countdown and live states (IST) |
| `EVENT` | Name, theme, tagline, date, time, venue |
| `NAV` | Nav links; each `id` must match a section `id` |
| `PROGRAMME` | The six programme tiles (the bento order is set by `BENTO_ORDER` in `App.jsx`) |
| `STATS` | The four counters in About |
| `AUDIENCE` | "This summit is for" columns |
| `SCHEDULE` | Event flow. `start`/`end` are 24-hour `HH:MM` IST; `highlight: true` marks the finale |
| `HACK_STEPS` | Build / Share / Submit / Pitch |
| `CORE_FRAMEWORKS` | The five frameworks a Db2Hack project must use at least one of |
| `TOOLKIT` | Package cards: name, logo file in `public/fw/`, install command, description, docs URL |
| `ECOSYSTEM` | Logos in the orbit and the scrolling logo strip |
| `COMMUNITY_EDITION` | Facts and the three ways to install Db2 Community Edition |
| `VIDEOS` | YouTube tutorials: put the video **ID** in `id` (e.g. `NRo4ePT2MEE`) |
| `RESOURCES`, `RESOURCE_GROUPS` | Resource links and their filter tabs (`news`, `blog`, `docs`, `start`) |
| `REWARDS` | Recognition cards. **Do not add prizes here** — winners' rewards stay a surprise |
| `CERTIFICATES` | Certificate names and who receives them |
| `QUIZ_TOPICS` | Data & AI Quiz topic chips |
| `SPEAKERS` | Name, role, org, photo path, optional `tag` (e.g. "Event SPOC") |
| `FAQ` | Questions and answers, in display order |

### Common edits

**Add a resource link**

```js
// src/data.js → RESOURCES
{ group: 'blog', src: 'IBM Community', title: 'My new Db2 post', url: 'https://…' },
```

**Add a tutorial video:** add `{ id: '<youtube id>', title: '…', tag: 'LangChain' }` to `VIDEOS`.

**Change a schedule slot:** edit `SCHEDULE`. Times use 24-hour format; the AM/PM label is worked out automatically.

**Add a speaker:** put a square PNG (600×600, transparent background) in `public/speakers/`, then add an entry to `SPEAKERS` with `photo: '/speakers/<file>.png'`.

**Change the event times:** update both `EVENT.time` (the text) and `MOMENTS` (what the countdown uses). Keep the `+05:30` offset.

---

## Luma registration

Registration runs on Luma, event **`evt-rKKaLkPzJFs05n9`**.

How it works:

1. `index.html` loads Luma's script: `<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js">`.
2. Every Register link is rendered with `data-luma-action="checkout"` and `data-luma-event-id` (the `luma` props object in `App.jsx`).
3. After React mounts, `App` calls `window.luma.initCheckout()`, which opens Luma's checkout as a popup over the page.
4. If the script fails to load (ad blocker, network), each link still points to `https://luma.com/event/evt-rKKaLkPzJFs05n9` and opens in a new tab.
5. The final section also embeds the event card: `https://luma.com/embed/event/<id>/simple`.

**To switch to a different event:** change `LUMA_EVENT_ID` in `src/data.js`. The URL, popup and embed all update from it.

---

## Animated components

### GradientASCII (`src/components/GradientASCII.jsx`)

A WebGL2 shader that renders an animated gradient as ASCII glyphs. It reacts to the mouse (scramble trail) and to clicks (wave/burst). It is used four times with different shapes:

| Where | `shape` |
|---|---|
| Hero | `horizon` |
| Statement band | `pinch` |
| Db2Hack | `eclipse` |
| Final call to action | `rise` |

All four share the palette `['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']` (`ASCII_COLORS` in `App.jsx`).

### React Bits components (`src/components/reactbits/`)

Copied from the [React Bits source](https://github.com/DavidHDev/react-bits) **without modification** and configured through props. Each section uses a different one, so no visual idea repeats.

| Component | Used in |
|---|---|
| ClickSpark | Whole page: blue sparks on click |
| Magnet | Hero buttons |
| DecryptedText | Hero pill and every section label |
| ShinyText | Hero tagline |
| Counter | Countdown digits |
| ScrollReveal | About paragraph (words light up on scroll) |
| MagicBento | Programme tiles |
| SplitFlapText | Db2Hack date board |
| RotatingText | "Build with [framework] on IBM Db2" |
| CardSwap | Db2Hack steps (screens ≥ 900 px; smaller screens show a card grid) |
| BorderGlow | Db2 Community Edition card |
| LaserFlow | Beam onto the Community Edition card |
| LogoLoop | Open-source logo strip |
| PixelCard | Db2Hack winners card |
| DotGrid | Rewards background |
| ChromaGrid | Speakers |
| ScrollVelocity | Text band after Speakers |
| Radar | Venue background |
| StarBorder | WhatsApp button in the final section |
| TextPressure | Footer wordmark |

To update a component, replace its file from the React Bits repo; the props it uses are in `App.jsx`.

---

## Images and logos

| Folder | Contents | Notes |
|---|---|---|
| `public/logos/` | `ibm-db2-white.svg`, `ibm-8bar-*.svg`, `db-cyl-*.svg`, `iic.png`, `nexasphere.png`, `gl-bajaj.png` | Partner logo order is IIC · NexaSphere · IBM, with GL Bajaj shown as host |
| `public/fw/` | Framework logos | Shown on white tiles, so transparent PNGs work best |
| `public/speakers/` | Speaker photos | 600×600, circular crop on a transparent background |
| `public/og.png` | Link-preview image | The Luma cover, 1200×1200 |

Merchandise and sticker artwork is intentionally **not** included: winners' rewards are not revealed before the finale.

---

## Design system

Pure-black theme with IBM Carbon colours. Tokens are defined on `:root` in `src/index.css`.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#000` | Page background |
| `--surface` / `--surface-2` | `#0b0b0b` / `#121212` | Cards |
| `--line`, `--line-2`, `--line-3` | `#1f1f1f`, `#2e2e2e`, `#444` | Borders |
| `--ink` / `--ink-2` / `--ink-3` | `#fff` / `#9aa0a6` / `#5f6368` | Text levels |
| `--blue` | `#0f62fe` | IBM Blue 60, the only accent (buttons, highlights) |
| `--blue-light` | `#78a9ff` | Links and small accents |
| `--r` | `24px` | Card radius |

- **Type:** IBM Plex Sans for text, IBM Plex Mono for labels, times and code.
- **Headings** are two-tone: white, then grey (`<span className="dim">`).
- **Breakpoints:** 1180 px (nav collapses to a menu), 980 px (two-column layouts stack), 720 px (mobile).

---

## Build and deploy

```bash
npm run build      # outputs dist/
npm run preview    # check the build locally
```

`dist/` is a static site that can be hosted anywhere.

| Host | Settings |
|---|---|
| **Vercel** | Framework preset: Vite · Build: `npm run build` · Output: `dist` |
| **Netlify** | Build: `npm run build` · Publish directory: `dist` |
| **GitHub Pages** | Set `base: '/IBM_Db2_TechX_Summit_2026/'` in `vite.config.js`, build, then publish `dist/` (for example with the `actions/deploy-pages` workflow) |

After deploying to a custom domain, update `og:image` in `index.html` to an absolute URL (`https://your-domain/og.png`) so link previews work on WhatsApp and LinkedIn.

---

## Browser support and performance

- Needs a browser with **WebGL2**: current Chrome, Edge, Firefox and Safari 15+. Without it, the WebGL backgrounds stay blank but all content still works.
- WebGL scenes pause when they scroll off screen or the tab is hidden.
- `prefers-reduced-motion` is respected: animations are minimised and the ASCII effects render a still frame.
- YouTube videos load as thumbnails; the player (youtube-nocookie) loads only on click.

---

## Troubleshooting

| Problem | Cause and fix |
|---|---|
| Hero is a plain grey/blue gradient with no ASCII glyphs | React StrictMode mounts components twice in dev, and GradientASCII's cleanup calls `loseContext()`. `src/main.jsx` deliberately renders without StrictMode — keep it that way. |
| Register opens a new tab instead of a popup | The Luma script was blocked (ad blocker or network). The fallback link still works. Check the browser console for `embed.lu.ma`. |
| Map is blank | Some ad or privacy blockers block Google Maps embeds. "Get directions" still works. |
| `npm install` fails | Use Node 20+ (`node -v`). Delete `node_modules` and `package-lock.json`, then retry. |
| Lint warnings in `reactbits/` | They come from the upstream React Bits code and are expected; the components are kept unmodified. |

---

## Credits and licences

- **React Bits** by David Haz — MIT + Commons Clause. You may use the components in this website; you may not sell or redistribute the components themselves. The full licence is in [`src/components/reactbits/LICENSE.md`](src/components/reactbits/LICENSE.md).
- **IBM, IBM Db2 and the IBM logo** are trademarks of IBM. Partner logos belong to their respective owners (IIC, NexaSphere, GL Bajaj Group of Institutions) and are used for this event only.
- Framework logos (LangChain, CrewAI, LlamaIndex, Haystack, Langflow, dbt and others) belong to their projects.
- Fonts: IBM Plex (SIL Open Font License), Roboto Flex (SIL Open Font License).

**Event SPOC:** Dhruv Chaturvedi, Db2 Software Engineer, IBM Lucknow.
