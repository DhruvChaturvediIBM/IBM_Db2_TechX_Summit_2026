import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import GradientASCII from './components/GradientASCII';
import {
  Reveal,
  SectionHead,
  Scramble,
  CountUp,
  Countdown,
  Spotlight,
  CopyCmd,
  Arrow,
  ArrowUpRight,
  useNow,
  phaseAt,
} from './components/ui';
import {
  LUMA_URL,
  WHATSAPP_URL,
  MAPS_URL,
  MAPS_EMBED,
  MOMENTS,
  EVENT,
  NAV,
  PROGRAMME,
  STATS,
  AUDIENCE,
  SCHEDULE,
  HACK_STEPS,
  CORE_FRAMEWORKS,
  TOOLKIT,
  ECOSYSTEM,
  REWARDS,
  CERTIFICATES,
  QUIZ_TOPICS,
  SPEAKERS,
  FAQ,
  VIDEOS,
  VIDEO_CHANNEL,
  RESOURCE_GROUPS,
  RESOURCES,
  COMMUNITY_EDITION,
} from './data';

const EASE = [0.22, 1, 0.36, 1];
const ext = { target: '_blank', rel: 'noopener noreferrer' };
const MONO = '"IBM Plex Mono", ui-monospace, monospace';
const ASCII_COLORS = ['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8'];

function RegisterButton({ size = '', label = 'Register on Luma' }) {
  return (
    <a className={`btn btn-primary ${size}`} href={LUMA_URL} {...ext}>
      {label}
      <Arrow />
    </a>
  );
}

function AnnouncementBar() {
  const phase = phaseAt(useNow(30000));
  return (
    <div className="announce">
      <div className="announce-track">
        {Array.from({ length: 2 }).map((_, k) => (
          <div className="announce-row" key={k} aria-hidden={k === 1}>
            <span>
              <b>{phase.status}</b>
            </span>
            <span>Db2Hack · 28 Oct 7:00 PM → 29 Oct 7:00 PM IST</span>
            <span>Summit · Fri 30 Oct · 9:00 AM – 5:00 PM IST</span>
            <span>GL Bajaj Group of Institutions, Mathura</span>
            <span>Free · In person · Registration on Luma</span>
            <span>Event details are emailed to registered participants before the start</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV.forEach(n => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  return (
    <header className={`nav ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand" aria-label="IBM Db2 TechX Summit — home">
          <img src="/logos/ibm-db2-white.svg" alt="IBM Db2" />
          <span className="nav-brand-sep" />
          <span className="nav-brand-text">TechX Summit</span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {NAV.map(n => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'is-active' : ''}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-primary btn-sm" href={LUMA_URL} {...ext}>
            Register <Arrow />
          </a>
          <button
            type="button"
            className={`burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <motion.div
        className="mobile-menu"
        initial={false}
        animate={open ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
        transition={{ duration: 0.3 }}
      >
        {NAV.map((n, i) => (
          <motion.a
            key={n.id}
            href={`#${n.id}`}
            onClick={() => setOpen(false)}
            initial={false}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: open ? 0.05 * i : 0, ease: EASE }}
          >
            <span className="mm-n">{String(i + 1).padStart(2, '0')}</span>
            {n.label}
          </motion.a>
        ))}
        <RegisterButton size="btn-lg" />
      </motion.div>
    </header>
  );
}

const rise = (delay, y = 60) => ({
  initial: { opacity: 0, y, filter: 'blur(14px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1.1, delay, ease: EASE },
});

function Hero() {
  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, [0, 600], [1, 0]);
  const lift = useTransform(scrollY, [0, 600], [0, -80]);
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <GradientASCII
          colors={ASCII_COLORS}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          glyphOpacity={0.85}
          glow={0.2}
          depthOfField={0}
          flicker={0.2}
          softness={0.5}
          scale={1}
          flow={0.5}
          speed={1}
          gradientOpacity={0.9}
          grain={0.08}
          variation={0}
          mouseInteraction
          scrambleRadius={0.1}
          clickEffect="wave"
          intro
          lightMode={false}
          fontFamily={MONO}
        />
        <div className="hero-vignette" />
      </div>

      <motion.div className="hero-content" style={{ opacity: fade, y: lift }}>
        <motion.div className="hero-pill" {...rise(0.2, 16)}>
          <span className="live-dot" />
          <Scramble text="A DAY OF IBM DB2 — DATA AND AI" delay={300} duration={1200} />
        </motion.div>

        <h1 className="hero-title">
          <motion.span className="ht-line ht-ibm" {...rise(0.35)}>
            IBM <b>Db2</b>
          </motion.span>
          <motion.span className="ht-line ht-x" {...rise(0.55)}>
            TechX Summit
          </motion.span>
        </h1>

        <motion.p className="hero-tagline" {...rise(0.85, 20)}>
          {EVENT.tagline}
        </motion.p>

        <motion.div className="hero-ctas" {...rise(1.05, 20)}>
          <RegisterButton size="btn-xl" label="Register free on Luma" />
          <a className="btn btn-ghost btn-xl" href="#db2hack">
            Explore Db2Hack
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-bar"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.35, ease: EASE }}
      >
        <div className="hb-date">
          <span className="hb-day">30</span>
          <span className="hb-month">
            <b>October</b>
            <span>Friday · 2026</span>
          </span>
        </div>
        <Countdown />
        <div className="hb-venue">
          <span className="mono-label">9:00 AM – 5:00 PM IST</span>
          <span>GL Bajaj Group of Institutions,</span>
          <span>Mathura</span>
        </div>
      </motion.div>
    </section>
  );
}

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <Reveal className="partners-row">
          <div className="partners-group">
            <span className="mono-label">In association with</span>
            <div className="partners-logos">
              <span className="logo-tile">
                <img src="/logos/iic.png" alt="Institution's Innovation Council" />
              </span>
              <span className="logo-tile">
                <img src="/logos/nexasphere.png" alt="NexaSphere" />
              </span>
              <span className="logo-tile logo-tile-ibm">
                <img src="/logos/ibm-8bar-white.svg" alt="IBM" />
              </span>
            </div>
          </div>
          <div className="partners-group partners-host">
            <span className="mono-label">Hosted by</span>
            <span className="logo-tile logo-tile-host">
              <img src="/logos/gl-bajaj.png" alt="GL Bajaj Group of Institutions, Mathura" />
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <SectionHead
              num="01"
              kicker="About the event"
              title={
                <>
                  One day. <span className="dim">IBM Db2, data and AI.</span>
                </>
              }
            />
            <Reveal delay={0.1} as="p" className="lead">
              IBM Db2 TechX Summit is a one-day event on IBM Db2, data and AI at GL Bajaj Group of Institutions,
              Mathura. Hear directly from IBM Db2 experts, learn how modern AI applications are built on data, and
              build real AI use cases on IBM Db2 with popular open-source frameworks.
            </Reveal>
            <Reveal delay={0.18} as="p" className="body">
              The day brings together expert talks, a hands-on workshop, knowledge sharing, a panel discussion and
              the Data &amp; AI Quiz — and ends with the Db2Hack finale, where the Top 10 builders pitch live to IBM
              experts.
            </Reveal>
            <Reveal delay={0.24} className="about-facts">
              <div>
                <span className="mono-label">Format</span>In person · Free
              </div>
              <div>
                <span className="mono-label">Registration</span>On Luma
              </div>
              <div>
                <span className="mono-label">Community</span>
                <a href={WHATSAPP_URL} {...ext}>
                  WhatsApp group <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          </div>
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.08 * i}>
                <Spotlight className="stat">
                  <span className="stat-num">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="stat-label">{s.label}</span>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="programme">
          {PROGRAMME.map((p, i) => (
            <Reveal key={p.code} delay={0.06 * i}>
              <Spotlight className="prog-card">
                <span className="prog-code">{p.code}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <div className="audience">
          <Reveal as="span" className="mono-label audience-title">
            This summit is for
          </Reveal>
          <div className="audience-grid">
            {AUDIENCE.map((a, i) => (
              <Reveal key={a.title} delay={0.08 * i} className="audience-card">
                <span className="aud-idx">/{String(i + 1).padStart(2, '0')}</span>
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement" aria-label="Data and AI">
      <div className="statement-bg">
        <GradientASCII
          colors={ASCII_COLORS}
          shape="pinch"
          characters=" =+xX0S8#@"
          cellSize={16}
          glyphOpacity={0.85}
          glow={0.25}
          flicker={0.25}
          flow={0.6}
          gradientOpacity={0.75}
          fontFamily={MONO}
        />
      </div>
      <div className="container statement-inner">
        <Reveal as="p" className="statement-text">
          Every AI app <span className="dim">starts with</span> data.
        </Reveal>
        <Reveal delay={0.1} as="code" className="statement-code">
          $ pip install ibm_db
        </Reveal>
      </div>
    </section>
  );
}

const toMin = hhmm => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};
const fmt = hhmm => {
  const [h, m] = hhmm.split(':').map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')}`;
};

function Schedule() {
  const now = useNow(30000);
  const ist = new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 6e4);
  const today = now >= MOMENTS.summitStart && now < MOMENTS.summitEnd;
  const mins = ist.getHours() * 60 + ist.getMinutes();
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 70%', 'end 60%'] });
  const grow = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  return (
    <section className="section" id="schedule">
      <div className="container">
        <SectionHead
          num="02"
          kicker="Event flow · Friday, 30 October 2026"
          title={
            <>
              The day, <span className="dim">minute by minute.</span>
            </>
          }
          sub="All times are IST. Reporting opens at 9:00 AM — arrive early to get seated."
        />
        <div className="timeline" ref={lineRef}>
          <div className="tl-rail">
            <motion.div className="tl-rail-fill" style={{ scaleY: grow }} />
          </div>
          {SCHEDULE.map((s, i) => {
            const live = today && mins >= toMin(s.start) && mins < toMin(s.end);
            return (
              <Reveal
                key={s.title}
                delay={0.05 * i}
                className={`tl-item ${s.highlight ? 'is-hl' : ''} ${live ? 'is-live' : ''}`}
              >
                <span className="tl-node" />
                <div className="tl-time">
                  {fmt(s.start)}
                  <span>–</span>
                  {fmt(s.end)}
                  <em>{toMin(s.end) <= 12 * 60 ? 'AM' : 'PM'}</em>
                </div>
                <div className="tl-body">
                  <h3>
                    {s.title}
                    {live && <span className="tag tag-live">Live now</span>}
                    {s.highlight && !live && <span className="tag">Finale</span>}
                  </h3>
                  <p>{s.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Db2Hack() {
  return (
    <section className="section hack" id="db2hack">
      <div className="hack-bg">
        <GradientASCII
          colors={ASCII_COLORS}
          shape="eclipse"
          characters=" =+xX0S8#@"
          cellSize={16}
          density={0.8}
          glyphOpacity={0.85}
          glow={0.3}
          flicker={0.25}
          softness={0.7}
          flow={0.6}
          speed={0.8}
          gradientOpacity={0.7}
          grain={0.06}
          clickEffect="burst"
          fontFamily={MONO}
        />
        <div className="hack-fade" />
      </div>
      <div className="container hack-inner">
        <div className="hack-hero">
          <Reveal>
            <span className="kicker">
              <span className="kicker-num">03</span>
              Pre-event challenge
            </span>
          </Reveal>
          <Reveal delay={0.06} as="h2" className="hack-title">
            Db2Hack
          </Reveal>
          <Reveal delay={0.1} className="hack-24">
            <span>24</span> hours to build
          </Reveal>
          <Reveal delay={0.14} as="p" className="hack-lead">
            Build an AI use case on IBM Db2 in 24 hours. Individual participation — <b>your idea matters most.</b>
          </Reveal>
        </div>

        <Reveal className="hack-window">
          <div className="hw-point">
            <span className="mono-label">Starts</span>
            <strong>Wed, 28 Oct</strong>
            <span>7:00 PM IST</span>
          </div>
          <div className="hw-line">
            <span className="hw-line-fill" />
            <span className="hw-line-label">24 hours · build · share · submit</span>
          </div>
          <div className="hw-point">
            <span className="mono-label">Deadline</span>
            <strong>Thu, 29 Oct</strong>
            <span>7:00 PM IST · strict</span>
          </div>
          <div className="hw-line hw-line-short">
            <span className="hw-line-fill" />
          </div>
          <div className="hw-point hw-final">
            <span className="mono-label">Finale</span>
            <strong>Fri, 30 Oct</strong>
            <span>3:00 – 4:15 PM · Top 10 pitch</span>
          </div>
        </Reveal>

        <div className="hack-steps">
          {HACK_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
              <Spotlight className="step">
                <div className="step-top">
                  <span className="step-n">{s.n}</span>
                  <span className="step-when">{s.when}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <div className="hack-rules">
          <Reveal className="rule rule-main">
            <span className="mono-label">Framework rule</span>
            <h3>Use at least one of these five.</h3>
            <div className="fw-pills">
              {CORE_FRAMEWORKS.map(f => {
                const t = TOOLKIT.find(x => x.name === f);
                return (
                  <span className="fw-pill" key={f}>
                    <span className="fw-pill-logo">
                      <img src={`/fw/${t.logo}`} alt="" />
                    </span>
                    {f}
                    {f === 'Langflow' && <em>no-code</em>}
                  </span>
                );
              })}
            </div>
            <p>
              One framework is enough; combining several (for example LangChain + CrewAI) is also allowed. The idea
              matters — whether it uses one tool or many.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rule">
            <span className="mono-label">Good to know</span>
            <ul className="checks">
              <li>Individual participation — no teams</li>
              <li>Submission via Google Form — link emailed to registered participants</li>
              <li>Deadline 29 Oct, 7:00 PM IST — late entries are not accepted</li>
              <li>Post your use case on LinkedIn and tag the organising team</li>
              <li>Top 10 pitch live to IBM experts on 30 Oct</li>
            </ul>
          </Reveal>
        </div>
        <Reveal className="hack-cta">
          <RegisterButton size="btn-lg" label="Register to get the Db2Hack brief" />
          <a className="btn btn-ghost btn-lg" href={WHATSAPP_URL} {...ext}>
            Join the WhatsApp community <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Orbit() {
  const inner = ECOSYSTEM.filter(e => CORE_FRAMEWORKS.includes(e.name));
  const outer = ECOSYSTEM.filter(e => !CORE_FRAMEWORKS.includes(e.name));
  const ring = (items, cls) => (
    <div className={`orbit-ring ${cls}`}>
      {items.map((e, i) => (
        <div className="orbit-slot" key={e.name} style={{ '--a': `${(360 / items.length) * i}deg` }}>
          <div className="orbit-chip" title={e.name}>
            <img src={`/fw/${e.logo}`} alt={e.name} />
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="orbit" aria-label="IBM Db2 integrations across the AI and data ecosystem">
      {ring(outer, 'ring-outer')}
      {ring(inner, 'ring-inner')}
      <div className="orbit-core">
        <img src="/logos/db-cyl-white.svg" alt="" className="core-icon" />
        <img src="/logos/ibm-8bar-white.svg" alt="IBM" className="core-ibm" />
        <span className="core-db2">Db2</span>
      </div>
    </div>
  );
}

function Toolkit() {
  return (
    <section className="section" id="toolkit">
      <div className="container">
        <div className="toolkit-head">
          <SectionHead
            num="04"
            kicker="Toolkit · IBM Db2 packages"
            title={
              <>
                Everything you need <span className="dim">to build on Db2.</span>
              </>
            }
            sub="Ready-made Db2 integrations for the frameworks you already use. Copy a command and start building."
          />
          <Reveal delay={0.1}>
            <Orbit />
          </Reveal>
        </div>
        <div className="toolkit-grid">
          {TOOLKIT.map((t, i) => (
            <Reveal key={t.name} delay={0.04 * i}>
              <Spotlight className="tool">
                <div className="tool-top">
                  <span className="tool-logo">
                    <img src={t.logo ? `/fw/${t.logo}` : '/logos/db-cyl-blue.svg'} alt="" />
                  </span>
                  <div>
                    <h3>{t.name}</h3>
                    {t.core && <span className="tag tag-sm">Db2Hack framework</span>}
                  </div>
                  <a className="tool-doc" href={t.url} {...ext} aria-label={`${t.name} docs`}>
                    Docs <ArrowUpRight />
                  </a>
                </div>
                <p>{t.gives}</p>
                <CopyCmd cmd={t.cmd} />
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <Reveal className="ce">
          <div className="ce-head">
            <div>
              <span className="mono-label">Start here · free</span>
              <h3>
                Db2 Community Edition. <span className="dim">Your Db2, on your laptop.</span>
              </h3>
            </div>
            <ul className="ce-facts">
              {COMMUNITY_EDITION.facts.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="ce-ways">
            {COMMUNITY_EDITION.ways.map(w => (
              <div className="ce-way" key={w.n}>
                <div className="ce-way-top">
                  <span className="step-n">{w.n}</span>
                  {w.tag && <span className="tag">{w.tag}</span>}
                </div>
                <h4>{w.title}</h4>
                <p>{w.body}</p>
                {w.cmd ? (
                  <CopyCmd cmd={w.cmd} />
                ) : (
                  <a className="btn btn-ghost ce-link" href={w.link} {...ext}>
                    {w.linkLabel} <ArrowUpRight />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="oss">
          <div className="oss-text">
            <span className="mono-label">Open-source opportunity</span>
            <h3>
              Become a contributor <span className="dim">to IBM Db2 AI use cases.</span>
            </h3>
            <p>
              Every eligible participant — not only the Top 10 — gets the chance to contribute to IBM Db2 AI use
              cases (open source), building on IBM Db2 integrations across the AI and data ecosystem.
            </p>
          </div>
          <div className="marquee" aria-hidden="true">
            {[0, 1].map(r => (
              <div className={`marquee-track ${r ? 'is-rev' : ''}`} key={r}>
                {[...ECOSYSTEM, ...ECOSYSTEM].map((e, i) => (
                  <span className="mq-item" key={`${e.name}-${i}`}>
                    <span className="mq-logo">
                      <img src={`/fw/${e.logo}`} alt="" />
                    </span>
                    {e.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Video({ v }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="video">
      <div className="video-frame">
        {play ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button type="button" className="video-poster" onClick={() => setPlay(true)} aria-label={`Play: ${v.title}`}>
            <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="video-play">
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="video-meta">
        <span className="tag tag-sm">{v.tag}</span>
        <h3>{v.title}</h3>
      </div>
    </div>
  );
}

function Resources() {
  const [group, setGroup] = useState('all');
  const list = group === 'all' ? RESOURCES : RESOURCES.filter(r => r.group === group);
  return (
    <section className="section" id="resources">
      <div className="container">
        <SectionHead
          num="05"
          kicker="Resources · learn before you build"
          title={
            <>
              Watch, read, <span className="dim">then ship.</span>
            </>
          }
          sub="Official IBM tutorials, announcements, community blogs and connector docs for building AI on IBM Db2."
        />
        <div className="videos">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={0.08 * i}>
              <Video v={v} />
            </Reveal>
          ))}
        </div>
        <Reveal className="videos-more">
          <a href={VIDEO_CHANNEL} {...ext}>
            More on the IBM Product Hub channel <ArrowUpRight />
          </a>
        </Reveal>

        <div className="res-tabs" role="tablist" aria-label="Filter resources">
          {RESOURCE_GROUPS.map(g => {
            const n = g.id === 'all' ? RESOURCES.length : RESOURCES.filter(r => r.group === g.id).length;
            return (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={group === g.id}
                className={group === g.id ? 'is-active' : ''}
                onClick={() => setGroup(g.id)}
              >
                {g.label}
                <span>{n}</span>
              </button>
            );
          })}
        </div>
        <motion.ul className="res-list" layout>
          {list.map(r => (
            <motion.li
              key={r.url}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <a href={r.url} {...ext}>
                <span className="res-src">{r.src}</span>
                <span className="res-title">{r.title}</span>
                <span className="res-arrow">
                  <ArrowUpRight />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

const MYSTERY = '=+xX0S8#@';
function LoopScramble() {
  const [s, setS] = useState('······');
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(
      () => setS(Array.from({ length: 6 }, () => MYSTERY[Math.floor(Math.random() * MYSTERY.length)]).join('')),
      90
    );
    return () => clearInterval(id);
  }, []);
  return <span>{s}</span>;
}

function Rewards() {
  return (
    <section className="section" id="rewards">
      <div className="container">
        <SectionHead
          num="06"
          kicker="Rewards & recognition"
          title={
            <>
              Build well. <span className="dim">Get recognised.</span>
            </>
          }
        />
        <div className="rewards-grid">
          <Reveal className="reward-mystery">
            <span className="mono-label">Db2Hack winners</span>
            <div className="mystery-glyphs" aria-hidden="true">
              <LoopScramble />
            </div>
            <h3>
              Revealed live <span className="dim">at the finale.</span>
            </h3>
            <p>What the winners take home stays under wraps until 30 October.</p>
          </Reveal>
          {REWARDS.map((r, i) => (
            <Reveal key={r.who} delay={0.06 * (i + 1)}>
              <Spotlight className="reward">
                <span className="reward-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="mono-label">{r.who}</span>
                <h3>{r.what}</h3>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <div className="rec-row">
          <Reveal className="quiz">
            <span className="mono-label">Data &amp; AI Quiz · individual</span>
            <h3>
              Think you know data and AI? <span className="dim">Prove it on stage.</span>
            </h3>
            <div className="quiz-topics">
              {QUIZ_TOPICS.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, ease: EASE }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <p>
              <b>Champion:</b> Certificate of Achievement
            </p>
          </Reveal>
          <Reveal delay={0.08} className="certs">
            <span className="mono-label">Certificates</span>
            <p className="certs-note">
              Signed by Daya Nand (Senior Db2 Development Manager, IBM) and Prof. Neeta Awasthy (Director, GL Bajaj
              Group of Institutions, Mathura).
            </p>
            <ul>
              {CERTIFICATES.map(c => (
                <li key={c.title + c.to}>
                  <span>{c.title}</span>
                  <em>{c.to}</em>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Speakers() {
  return (
    <section className="section" id="speakers">
      <div className="container">
        <SectionHead
          num="07"
          kicker="Speakers · IBM Lucknow"
          title={
            <>
              Learn from the people <span className="dim">who build Db2.</span>
            </>
          }
          sub="Five IBM Db2 experts from IBM Lucknow lead the talks, the workshop and the Db2Hack finale."
        />
        <div className="speakers">
          {SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={0.07 * i}>
              <Spotlight className="speaker">
                <div className="sp-photo">
                  <img src={s.photo} alt={s.name} loading="lazy" />
                </div>
                <div className="sp-meta">
                  <h3>{s.name}</h3>
                  <p>{s.role}</p>
                  <span className="sp-org">
                    <img src="/logos/ibm-8bar-white.svg" alt="IBM" />
                    {s.org.replace('IBM ', '')}
                  </span>
                  {s.tag && <span className="tag tag-sm">{s.tag}</span>}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Venue() {
  return (
    <section className="section" id="venue">
      <div className="container venue">
        <div>
          <SectionHead
            num="08"
            kicker="Venue"
            title={
              <>
                See you <span className="dim">in Mathura.</span>
              </>
            }
          />
          <Reveal className="venue-card">
            <div className="vc-row">
              <span className="mono-label">Where</span>
              <p>{EVENT.venue}</p>
            </div>
            <div className="vc-row">
              <span className="mono-label">When</span>
              <p>
                {EVENT.date}
                <br />
                {EVENT.time}
              </p>
            </div>
            <div className="vc-row">
              <span className="mono-label">Hosted by</span>
              <p>GL Bajaj Group of Institutions, Mathura</p>
            </div>
            <a className="btn btn-ghost" href={MAPS_URL} {...ext}>
              Get directions <ArrowUpRight />
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="map">
          <iframe
            title="Map — GL Bajaj Group of Institutions, Mathura"
            src={MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="container faq-wrap">
        <SectionHead
          num="09"
          kicker="FAQ"
          title={
            <>
              Questions, <span className="dim">answered.</span>
            </>
          }
          sub="Can't find yours? Ask in the WhatsApp community."
        />
        <div className="faq">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={0.03 * i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
              <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="faq-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q">{f.q}</span>
                <span className="faq-ico" />
              </button>
              <motion.div
                className="faq-a"
                initial={false}
                animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <p>{f.a}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final">
      <div className="final-bg">
        <GradientASCII
          colors={ASCII_COLORS}
          shape="rise"
          characters=" =+xX0S8#@"
          cellSize={18}
          glow={0.2}
          gradientOpacity={0.9}
          fontFamily={MONO}
        />
      </div>
      <div className="container final-inner">
        <Reveal as="span" className="mono-label">
          Friday · 30 October 2026 · Mathura
        </Reveal>
        <Reveal delay={0.06} as="h2">
          Your seat <span className="dim">is waiting.</span>
        </Reveal>
        <Reveal delay={0.12} as="p">
          Free and in person. Register on Luma — every detail, including the Db2Hack brief and submission form, lands
          in your inbox before the start.
        </Reveal>
        <Reveal delay={0.18} className="final-ctas">
          <RegisterButton size="btn-xl" label="Register free on Luma" />
          <a className="btn btn-ghost btn-xl" href={WHATSAPP_URL} {...ext}>
            WhatsApp community <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logos/ibm-db2-white.svg" alt="IBM Db2" />
            <p>
              {EVENT.theme}.
              <br />
              {EVENT.tagline}
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <span className="mono-label">Event</span>
              {NAV.slice(0, 4).map(n => (
                <a key={n.id} href={`#${n.id}`}>
                  {n.label}
                </a>
              ))}
            </div>
            <div>
              <span className="mono-label">More</span>
              {NAV.slice(4).map(n => (
                <a key={n.id} href={`#${n.id}`}>
                  {n.label}
                </a>
              ))}
            </div>
            <div>
              <span className="mono-label">Connect</span>
              <a href={LUMA_URL} {...ext}>
                Register on Luma
              </a>
              <a href={WHATSAPP_URL} {...ext}>
                WhatsApp community
              </a>
              <a href={MAPS_URL} {...ext}>
                Directions
              </a>
            </div>
          </div>
        </div>
        <div className="footer-logos">
          <img src="/logos/iic.png" alt="Institution's Innovation Council" />
          <img src="/logos/nexasphere.png" alt="NexaSphere" />
          <img src="/logos/ibm-8bar-blue.svg" alt="IBM" className="logo-ibm" />
          <img src="/logos/gl-bajaj.png" alt="GL Bajaj Group of Institutions" />
        </div>
        <div className="footer-bottom">
          <span>© 2026 IBM Db2 TechX Summit · GL Bajaj Group of Institutions, Mathura</span>
          <span>In association with IBM · IIC · NexaSphere</span>
        </div>
        <div className="footer-giant" aria-hidden="true">
          Db2 TechX
        </div>
      </div>
    </footer>
  );
}

function FloatCta() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a className={`float-cta ${on ? 'is-on' : ''}`} href={LUMA_URL} {...ext}>
      Register <Arrow />
    </a>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div className="progress" style={{ scaleX: x }} />;
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <Partners />
        <About />
        <Statement />
        <Schedule />
        <Db2Hack />
        <Toolkit />
        <Resources />
        <Rewards />
        <Speakers />
        <Venue />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatCta />
    </>
  );
}
