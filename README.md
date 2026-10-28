# IBM Db2 TechX Summit 2026 — Landing Page

> **A day of IBM Db2 — Data and AI.** Learn how AI and data are making the future.
>
> Friday, 30 October 2026 · 9:00 AM – 5:00 PM IST · GL Bajaj Group of Institutions, Mathura
> In association with IBM · Institution's Innovation Council (IIC) · NexaSphere

The official website for the IBM Db2 TechX Summit and the **Db2Hack** 24-hour challenge. It is a React + Vite single-page app with a pure-black IBM theme, WebGL backgrounds and animated sections built from [React Bits](https://reactbits.dev) components. Every Register button opens the event's **Luma** checkout.

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

The site has two pages, served by React Router:

| Route | Page |
|---|---|
| `/` | The event landing page (sections below) |
| `/resources` | Tutorials, Db2 toolkit, Db2 Community Edition and all docs/blog links |

Nav entries with an `id` scroll to a section on `/` (from `/resources` they navigate to `/#id`); entries with a `path` open a page.

### Home page (`/`)

Sections in page order. The `id` is the anchor used in the nav (`/#db2hack` and so on).

| # | Section | `id` | What it shows |
|---|---|---|---|
| — | Announcement ticker | — | Live status (registrations open / Db2Hack live / …), key dates |
| — | Nav | — | Section links, Resources page link, active highlight, Register button, mobile menu |
| — | Hero | `top` | ASCII WebGL background, title, tagline, Register + Explore buttons, date bar with live countdown |
| — | Partners | `partners` | IIC · NexaSphere · IBM, hosted by GL Bajaj |
| 01 | About | `about` | Event overview, stats, programme bento, who it's for |
| — | Statement band | — | "Every AI app starts with data." over an ASCII background |
| 02 | Schedule | `schedule` | Event flow across **28, 29 and 30 Oct**: Db2Hack kick-off, submission deadline, then the Summit day. The current item is tagged **Live now** |
| 03 | Db2Hack | `db2hack` | 24-hour challenge: split-flap date board, steps, framework rule, rules |
| — | Resources teaser | `resources-teaser` | Counts of videos/packages/links and a button to `/resources` |
| 04 | Rewards | `rewards` | Recognition and certificates. Winners' prizes are deliberately **not** shown — "Revealed live at the finale" |
| 05 | Speakers | `speakers` | Seven IBM Db2 speakers with full designations and LinkedIn / Instagram / YouTube links |
| — | Text band | — | Scroll-speed marquee |
| 06 | Venue | `venue` | Address, time, Google Map, directions |
| 07 | FAQ | `faq` | 11 questions in an accordion |
| — | Final call to action | — | Register + WhatsApp buttons and the embedded Luma event card |
| — | Footer | — | Links, partner logos, interactive "Db2 TechX" wordmark |

### Resources page (`/resources`)

| # | Section | `id` | What it shows |
|---|---|---|---|
| — | Page hero | — | LetterGlitch background, jump links |
| 01 | Compulsory first | `must-do` | 4 must-do steps (VS Code extension + local Db2, community blogs, IBM tutorial, connector doc), then the community blog cards (`community-blogs`) |
| 02 | Watch & read | `resources` | 3 IBM Product Hub tutorials (`tutorials`) and all 31 resources as filterable cards, blogs first |
| 03 | Toolkit | `toolkit` | Db2 ecosystem orbit, 9 packages with copy-to-clipboard installs |
| — | Community Edition | `community-edition` | Free Db2 Community Edition: VS Code extension, Docker, download |
| — | Prerequisites | `prerequisites` | Optional Python / agentic AI basics in Hinglish from Dhruv Chaturvedi |
| — | Final call to action | — | Register + WhatsApp + Luma embed |

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
| Routing | React Router (`react-router-dom`), `BrowserRouter` |
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
├── vercel.json                 # SPA rewrite so /resources works on refresh (Vercel)
├── public/                     # Static files, served as-is from /
│   ├── _redirects              # SPA rewrite for Netlify
│   ├── og-banner.png           # Link-preview banner, 1200×630 (WhatsApp, LinkedIn, X)
│   ├── og.png                  # Luma cover (square)
│   ├── logos/                  # IBM, IBM Db2, IIC, NexaSphere, GL Bajaj, Db2 icons
│   ├── fw/                     # Framework logos (LangChain, CrewAI, LlamaIndex, …)
│   ├── res/                    # Resource card thumbnails (each page's og:image, r<N>.jpg)
│   └── speakers/               # Speaker photos (transparent PNG, 600×600)
├── src/
│   ├── main.jsx                # Entry point (no StrictMode, see Troubleshooting)
│   ├── App.jsx                 # All sections, both pages (HomePage, ResourcesPage) and the routes
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
| `NAV` | Nav links. `{ id }` = section on the home page (must match a section `id`); `{ path }` = separate page |
| `PROGRAMME` | The six programme tiles (the bento order is set by `BENTO_ORDER` in `App.jsx`) |
| `STATS` | The four counters in About |
| `AUDIENCE` | "This summit is for" columns |
| `SCHEDULE_DAYS` | Event flow by day. Each day has `date` (`YYYY-MM-DD`), `label`, `caption`, `items`. Item `start`/`end` are 24-hour `HH:MM` IST (`end: '24:00'` = until midnight; `start === end` = a single moment such as a deadline). `highlight` + `tag` add a badge (Kick-off, Deadline, Finale) |
| `HACK_STEPS` | Build / Share / Submit / Pitch |
| `CORE_FRAMEWORKS` | The five frameworks a Db2Hack project must use at least one of |
| `TOOLKIT` | Package cards: name, logo file in `public/fw/`, install command, description, docs URL |
| `ECOSYSTEM` | Logos in the orbit and the scrolling logo strip |
| `COMMUNITY_EDITION` | Facts and the three ways to install Db2 Community Edition |
| `VIDEOS` | IBM tutorials: put the YouTube video **ID** in `id` (e.g. `NRo4ePT2MEE`) |
| `MUST_DO` | The compulsory checklist at the top of `/resources` |
| `LEARN_VIDEOS`, `LEARN_CHANNEL` | Optional prerequisite videos (Python, agentic AI) from the Dhruv Insights channel |
| `RESOURCES`, `RESOURCE_GROUPS` | Resource links and their filter tabs (`news`, `blog`, `docs`, `start`) |
| `REWARDS` | Recognition cards. **Do not add prizes here** — winners' rewards stay a surprise |
| `CERTIFICATES` | Certificate names and who receives them |
| `QUIZ_TOPICS` | Data & AI Quiz topic chips |
| `SPEAKERS` | Name, role, org, photo, optional `tag` (e.g. "Event SPOC") and optional `linkedin`, `instagram`, `youtube` URLs (a button appears for each one set) |
| `FAQ` | Questions and answers, in display order |

### Common edits

**Add a resource link**

```js
// src/data.js → RESOURCES
{ group: 'blog', src: 'IBM Community', title: 'My new Db2 post', url: 'https://…', thumb: '/res/my-post.jpg' },
```

For `thumb`, save the page's preview image (its `og:image`, around 900 px wide) in `public/res/`. If the page has none, use `logo: '/fw/<logo>.png'` instead and the card shows a branded cover with that logo.

**Add a tutorial video:** add `{ id: '<youtube id>', title: '…', tag: 'LangChain' }` to `VIDEOS`.

**Change a schedule slot:** edit `SCHEDULE_DAYS`. Times use 24-hour format; AM/PM and labels such as "7:00 PM onwards" or "Until 7:00 PM" are worked out automatically.

**Add a page:** create a `function MyPage()` in `App.jsx`, add `<Route path="/my-page" element={<MyPage />} />` in `App`, and add `{ path: '/my-page', label: 'My page' }` to `NAV`.

**Add a speaker:** put a square PNG (600×600, circular crop on a transparent background) in `public/speakers/`, then add an entry to `SPEAKERS` with `photo: '/speakers/<file>.png'` and any social links.

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
| LetterGlitch | Resources page hero |
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
| **Vercel** | Framework preset: Vite · Build: `npm run build` · Output: `dist`. `vercel.json` already rewrites all paths to `index.html` |
| **Netlify** | Build: `npm run build` · Publish directory: `dist`. `public/_redirects` already handles `/resources` |
| **GitHub Pages** | Set `base: '/IBM_Db2_TechX_Summit_2026/'` in `vite.config.js`, add `basename` to `BrowserRouter`, and copy `dist/index.html` to `dist/404.html` so `/resources` works on refresh |

Because this is a single-page app with real URLs, any other host must serve `index.html` for unknown paths.

Link previews use `public/og-banner.png` (1200×630) via absolute URLs on `https://ibmdb2techxsummit.glbajajgroup.ac.in/` in `index.html`. If the domain changes, update `og:url`, `og:image`, `twitter:image` and `canonical`.

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
| `/resources` shows a 404 after refresh | The host isn't rewriting paths to `index.html`. See [Build and deploy](#build-and-deploy). |
| Lint warnings in `reactbits/` | They come from the upstream React Bits code and are expected; the components are kept unmodified. |

---

## Credits and licences

- **React Bits** by David Haz — MIT + Commons Clause. You may use the components in this website; you may not sell or redistribute the components themselves. The full licence is in [`src/components/reactbits/LICENSE.md`](src/components/reactbits/LICENSE.md).
- **IBM, IBM Db2 and the IBM logo** are trademarks of IBM. Partner logos belong to their respective owners (IIC, NexaSphere, GL Bajaj Group of Institutions) and are used for this event only.
- Framework logos (LangChain, CrewAI, LlamaIndex, Haystack, Langflow, dbt and others) belong to their projects.
- Fonts: IBM Plex (SIL Open Font License), Roboto Flex (SIL Open Font License).

**Event SPOC:** Dhruv Chaturvedi, Db2 Software Engineer, IBM Lucknow.
