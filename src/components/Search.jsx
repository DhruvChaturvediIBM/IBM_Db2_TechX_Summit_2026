import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AGENTIC,
  FAQ,
  GALLERY_TABS,
  JUDGING,
  LEARN_VIDEOS,
  MUST_DO,
  RESOURCES,
  SPEAKERS,
  START_STEPS,
  SUBMISSION_REPO,
  SUBMIT_DATES,
  SUBMIT_FORM,
  SUBMIT_STEPS,
  TOOLKIT,
  UNSTOP_URL,
  VIDEOS,
  VSCODE_EXT,
  WHATSAPP_CHANNEL,
  WHATSAPP_URL,
} from "../data";

// Categories shown as filter chips, in this order.
const CATS = [
  { id: "all", label: "All" },
  { id: "section", label: "Sections" },
  { id: "faq", label: "FAQ" },
  { id: "submit", label: "Submission" },
  { id: "resource", label: "Resources" },
  { id: "package", label: "Packages" },
  { id: "video", label: "Videos" },
  { id: "people", label: "People" },
  { id: "link", label: "Quick links" },
];
const CAT_LABEL = Object.fromEntries(CATS.map((c) => [c.id, c.label]));

const SECTIONS = [
  ["Start here · 4 steps", "/#start", "begin steps how to start new beginner"],
  ["Highlights video", "/#showreel", "watch showreel video summit"],
  [
    "AI skill for your assistant",
    "/#ai-skill",
    "claude cursor copilot chatgpt gemini bob skill download rag",
  ],
  [
    "Rewards",
    "/#rewards",
    "prizes trophy goodies certificate top 3 top 10 win",
  ],
  [
    "Online workshop & doubt session",
    "/#live",
    "coming soon live online workshop doubts",
  ],
  ["Db2Hack", "/#db2hack", "hackathon challenge rules deadline"],
  ["Summit recap", "/#recap", "photos gl bajaj mathura 30 oct"],
  ["Speakers · IBM Db2 team", "/#speakers", "team people linkedin contact"],
  ["Schedule", "/#schedule", "timeline dates event flow pitch 12 nov"],
  ["FAQ", "/#faq", "questions help doubts"],
  ["Submit project", "/submit", "submission guide pr form"],
  [
    "Important dates",
    "/submit#submit-dates",
    "deadline extended 11 nov 1:30 pm ist pst wat pitch",
  ],
  [
    "Submission steps",
    "/submit#submit-steps",
    "fork clone branch pr pull request form",
  ],
  [
    "Judging criteria",
    "/submit#judging",
    "rubric score points marks evaluation fair",
  ],
  [
    "Free Db2 on your laptop",
    "/submit#local-db2",
    "local install docker colima wsl community edition",
  ],
  ["Quick start", "/submit#quick-start", "6 steps python"],
  ["IBM Bob", "/submit#ibm-bob", "ai coding assistant"],
  ["Need help?", "/submit#submit-help", "issue support stuck"],
  ["Resources", "/resources", "docs blogs tutorials learning"],
  ["Must-do before you build", "/resources#must-do", "setup checklist"],
  [
    "Db2 toolkit · packages",
    "/resources#toolkit",
    "langchain llamaindex haystack crewai langflow pip",
  ],
  [
    "Prerequisites",
    "/resources#prerequisites",
    "requirements python java vs code",
  ],
  ["Gallery", "/gallery", "photos pictures summit"],
];

function buildIndex() {
  const items = [];
  const add = (cat, title, body, to, keys = "") =>
    items.push({ cat, title, body: body || "", to, keys });

  SECTIONS.forEach(([t, to, k]) => add("section", t, "", to, k));
  START_STEPS.forEach((s, i) =>
    add(
      "section",
      `Step ${i + 1} · ${s.title}`,
      s.body,
      `/#${s.anchor}`,
      "start step",
    ),
  );
  GALLERY_TABS.filter((t) => t.id !== "all").forEach((t) =>
    add("section", `Gallery · ${t.label}`, "", `/gallery#${t.id}`, "photos"),
  );

  FAQ.forEach((f) => add("faq", f.q, f.a, "/#faq"));

  SUBMIT_DATES.forEach((d) =>
    add(
      "submit",
      `${d.what} — ${d.when}`,
      d.note,
      "/submit#submit-dates",
      "date deadline",
    ),
  );
  SUBMIT_STEPS.forEach((s, i) =>
    add(
      "submit",
      `Submission step ${i + 1} · ${s.title}`,
      s.body,
      "/submit#submit-steps",
      s.code || "",
    ),
  );
  JUDGING.forEach((j) =>
    add(
      "submit",
      `Judging · ${j.name} (${j.weight} pts)`,
      j.points.join(" · "),
      "/submit#judging",
      "criteria rubric",
    ),
  );

  MUST_DO.forEach((m) =>
    add("resource", m.title, m.why, "/resources#must-do", "must do"),
  );
  RESOURCES.forEach((r) => add("resource", r.title, r.src, r.url, r.group));

  const seen = new Set();
  TOOLKIT.forEach((t) => {
    seen.add(t.name);
    add(
      "package",
      t.name,
      `${t.gives} · ${t.cmd}`,
      t.url,
      "framework package pip install",
    );
  });
  AGENTIC.filter((a) => !seen.has(a.name)).forEach((a) =>
    add(
      "package",
      a.name,
      `${a.does} · ${a.cmd}`,
      "/#agentic-packages",
      "agentic",
    ),
  );
  add(
    "package",
    "IBM Db2 Developer Extension for VS Code",
    "Free Db2 Community Edition with testdb and SAMPLE",
    "/#vscode-extension",
    `vscode extension install ${VSCODE_EXT.id}`,
  );

  [...VIDEOS, ...LEARN_VIDEOS].forEach((v) =>
    add(
      "video",
      v.title,
      v.tag,
      `https://www.youtube.com/watch?v=${v.id}`,
      "youtube tutorial",
    ),
  );

  SPEAKERS.forEach((s) =>
    add(
      "people",
      s.name,
      `${s.role} · ${s.org}${s.tag ? ` · ${s.tag}` : ""}`,
      s.linkedin || "/#speakers",
      "contact linkedin",
    ),
  );

  add(
    "link",
    "Submission form (Google Form)",
    "Paste your PR link here — mandatory",
    SUBMIT_FORM,
    "submit form google",
  );
  add(
    "link",
    "Submission repo on GitHub",
    "Open your pull request here",
    SUBMISSION_REPO,
    "pr pull request github repo",
  );
  add(
    "link",
    "WhatsApp community",
    "Mandatory · all updates land here first",
    WHATSAPP_URL,
    "group chat",
  );
  add(
    "link",
    "WhatsApp channel",
    "Follow for announcements",
    WHATSAPP_CHANNEL,
    "updates",
  );
  add(
    "link",
    "Register on Unstop",
    "Event page on Unstop",
    UNSTOP_URL,
    "registration",
  );
  add(
    "link",
    "Rate the VS Code extension",
    "Leave a rating and comment on the Marketplace",
    VSCODE_EXT.review || VSCODE_EXT.url,
    "review stars",
  );
  add(
    "link",
    "Download the AI skill (.zip)",
    "IBM Db2 builder skill for your AI assistant",
    "/skill/ibm-db2-builder.zip",
    "skill download",
  );

  return items.map((it) => ({
    ...it,
    hay: `${it.title} ${it.body} ${it.keys}`.toLowerCase(),
    t: it.title.toLowerCase(),
  }));
}

// Every word must match somewhere; titles and word starts rank higher.
function score(it, words) {
  let s = 0;
  for (const w of words) {
    const inHay = it.hay.indexOf(w);
    if (inHay < 0) return -1;
    const inTitle = it.t.indexOf(w);
    if (inTitle === 0) s += 12;
    else if (inTitle > 0) s += /\W/.test(it.t[inTitle - 1]) ? 9 : 6;
    else s += /\W/.test(it.hay[inHay - 1] ?? " ") ? 3 : 1;
  }
  if (it.cat === "section" || it.cat === "link") s += 1;
  return s;
}

function Mark({ text, words }) {
  if (!words.length || !text) return text;
  const re = new RegExp(
    `(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "ig",
  );
  return text
    .split(re)
    .map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part));
}

function snippet(body, words, len = 140) {
  if (!body) return "";
  const lower = body.toLowerCase();
  const at =
    words
      .map((w) => lower.indexOf(w))
      .filter((i) => i >= 0)
      .sort((a, b) => a - b)[0] ?? 0;
  const start = Math.max(0, at - 40);
  const out = body.slice(start, start + len);
  return `${start > 0 ? "…" : ""}${out}${start + len < body.length ? "…" : ""}`;
}

const SUGGEST = [
  "deadline",
  "submission form",
  "judging",
  "langchain",
  "vs code",
  "team",
  "rewards",
  "pitch",
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sel, setSel] = useState(0);
  const input = useRef(null);
  const list = useRef(null);
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const index = useMemo(() => buildIndex(), []);

  const close = useCallback(() => setOpen(false), []);
  const show = useCallback(() => {
    setOpen(true);
    setSel(0);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const typing =
        /input|textarea|select/i.test(e.target.tagName) ||
        e.target.isContentEditable;
      if (
        (e.key === "k" && (e.metaKey || e.ctrlKey)) ||
        (e.key === "/" && !typing)
      ) {
        e.preventDefault();
        show();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  useEffect(() => {
    if (!open) return undefined;
    const el = document.documentElement;
    const prev = el.style.overflow;
    el.style.overflow = "hidden";
    const t = setTimeout(() => {
      input.current?.focus();
      input.current?.select();
    }, 30);
    return () => {
      el.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open]);

  const words = useMemo(
    () => q.toLowerCase().split(/\s+/).filter(Boolean),
    [q],
  );

  const ranked = useMemo(() => {
    if (!words.length) return [];
    return index
      .map((it) => ({ it, s: score(it, words) }))
      .filter((x) => x.s >= 0)
      .sort((a, b) => b.s - a.s)
      .map((x) => x.it);
  }, [index, words]);

  const counts = useMemo(() => {
    const c = { all: ranked.length };
    ranked.forEach((it) => {
      c[it.cat] = (c[it.cat] || 0) + 1;
    });
    return c;
  }, [ranked]);

  const pool = words.length
    ? ranked
    : index.filter((it) => it.cat === "section" || it.cat === "link");
  const results = (
    cat === "all" ? pool : pool.filter((it) => it.cat === cat)
  ).slice(0, 40);

  const go = (it) => {
    close();
    if (/^https?:/.test(it.to) || it.to.endsWith(".zip")) {
      window.open(it.to, "_blank", "noopener");
      return;
    }
    const [path, h = ""] = it.to.split("#");
    const target = path || "/";
    if (target === pathname && `#${h}` === hash && h) {
      document.getElementById(h)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate(h ? `${target}#${h}` : target);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && results[sel]) {
      e.preventDefault();
      go(results[sel]);
    } else if (e.key === "Tab" && !e.shiftKey && words.length) {
      // Tab cycles the category filter.
      e.preventDefault();
      const ids = CATS.filter((c) => c.id === "all" || counts[c.id]).map(
        (c) => c.id,
      );
      setCat(ids[(ids.indexOf(cat) + 1) % ids.length]);
      setSel(0);
    }
  };

  useEffect(() => {
    list.current
      ?.querySelector(".is-sel")
      ?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  return (
    <>
      <button
        type="button"
        className="search-btn"
        onClick={show}
        aria-label="Search the site"
      >
        <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
          <circle
            cx="11"
            cy="11"
            r="7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="m20 20-4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="search-btn-text">Search</span>
        <kbd className="search-btn-kbd">⌘K</kbd>
      </button>
      {open &&
        createPortal(
          <div
            className="search-overlay"
            onMouseDown={(e) => e.target === e.currentTarget && close()}
          >
            <div
              className="search-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Search the site"
            >
              <div className="search-input">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="m20 20-4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  ref={input}
                  value={q}
                  onChange={(e) => {
                    setQ(e.target.value);
                    setSel(0);
                  }}
                  onKeyDown={onKeyDown}
                  placeholder="Search sections, FAQ, packages, dates, people…"
                  aria-label="Search"
                  aria-controls="search-results"
                  autoComplete="off"
                  spellCheck="false"
                />
                {q && (
                  <button
                    type="button"
                    className="search-clear"
                    onClick={() => setQ("")}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
                <button type="button" className="search-esc" onClick={close}>
                  Esc
                </button>
              </div>
              <div
                className="search-cats"
                role="tablist"
                aria-label="Filter results"
              >
                {CATS.filter(
                  (c) => c.id === "all" || !words.length || counts[c.id],
                ).map((c) => (
                  <button
                    type="button"
                    role="tab"
                    key={c.id}
                    aria-selected={cat === c.id}
                    className={cat === c.id ? "is-on" : ""}
                    onClick={() => {
                      setCat(c.id);
                      setSel(0);
                      input.current?.focus();
                    }}
                  >
                    {c.label}
                    {words.length > 0 && <span>{counts[c.id] || 0}</span>}
                  </button>
                ))}
              </div>
              {!words.length && (
                <div className="search-suggest">
                  <span>Try</span>
                  {SUGGEST.map((s) => (
                    <button type="button" key={s} onClick={() => setQ(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <ul className="search-results" id="search-results" ref={list}>
                {results.map((it, i) => (
                  <li key={`${it.cat}-${it.title}-${i}`}>
                    <button
                      type="button"
                      className={i === sel ? "is-sel" : ""}
                      onMouseMove={() => setSel(i)}
                      onClick={() => go(it)}
                    >
                      <span className="sr-cat">{CAT_LABEL[it.cat]}</span>
                      <span className="sr-main">
                        <strong>
                          <Mark text={it.title} words={words} />
                        </strong>
                        {it.body && (
                          <span className="sr-body">
                            <Mark
                              text={snippet(it.body, words)}
                              words={words}
                            />
                          </span>
                        )}
                      </span>
                      <span className="sr-go" aria-hidden="true">
                        {/^https?:/.test(it.to) ? "↗" : "→"}
                      </span>
                    </button>
                  </li>
                ))}
                {words.length > 0 && !results.length && (
                  <li className="search-empty">
                    No results for “{q}”. Try fewer words, or ask in the
                    WhatsApp community.
                  </li>
                )}
              </ul>
              <div className="search-foot">
                <span>
                  <kbd>↑</kbd>
                  <kbd>↓</kbd> move
                </span>
                <span>
                  <kbd>Enter</kbd> open
                </span>
                <span>
                  <kbd>Tab</kbd> next filter
                </span>
                <span>
                  <kbd>/</kbd> or <kbd>⌘K</kbd> search
                </span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
