import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import GradientASCII from './components/GradientASCII';
import DecryptedText from './components/reactbits/DecryptedText';
import ShinyText from './components/reactbits/ShinyText';
import Magnet from './components/reactbits/Magnet';
import RotatingText from './components/reactbits/RotatingText';
import ScrollVelocity from './components/reactbits/ScrollVelocity';
import LogoLoop from './components/reactbits/LogoLoop';
import StarBorder from './components/reactbits/StarBorder';
import DotGrid from './components/reactbits/DotGrid';
import BorderGlow from './components/reactbits/BorderGlow';
import ClickSpark from './components/reactbits/ClickSpark';
import ScrollReveal from './components/reactbits/ScrollReveal';
import MagicBento from './components/reactbits/MagicBento';
import SplitFlapText from './components/reactbits/SplitFlapText';
import CardSwap, { Card } from './components/reactbits/CardSwap';
import LaserFlow from './components/reactbits/LaserFlow';
import LetterGlitch from './components/reactbits/LetterGlitch';
import LightRays from './components/reactbits/LightRays';
import Radar from './components/reactbits/Radar';
import TextPressure from './components/reactbits/TextPressure';
import PixelCard from './components/reactbits/PixelCard';
import {
  Reveal,
  SectionHead,
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
  LUMA_EVENT_ID,
  LUMA_EMBED,
  WHATSAPP_URL,
  MAPS_URL,
  MAPS_EMBED,
  EVENT,
  NAV,
  PROGRAMME,
  STATS,
  AUDIENCE,
  SCHEDULE_DAYS,
  LEARN_VIDEOS,
  LEARN_CHANNEL,
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
  MANDATORY,
  MUST_DO,
  ELIGIBILITY,
  QUICKSTART,
  QUICK_PACKAGES,
  IBM_BOB,
  QUICK_EXAMPLE,
  LOCAL_DB2,
  SUBMISSION_REPO,
  SUBMISSION_ISSUES,
  SUBMIT_DATES,
  SUBMIT_REQUIREMENTS,
  SUBMIT_STEPS,
  SUBMIT_NAMING,
  JUDGING,
  PENALTIES,
} from './data';

const EASE = [0.22, 1, 0.36, 1];
const ext = { target: '_blank', rel: 'noopener noreferrer' };
// Luma's checkout script (index.html) turns these links into its popup; without it they open the event page.
const luma = { href: LUMA_URL, ...ext, 'data-luma-action': 'checkout', 'data-luma-event-id': LUMA_EVENT_ID };
const MONO = '"IBM Plex Mono", ui-monospace, monospace';
const ASCII_COLORS = ['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8'];

function useWide(min = 900) {
  const [wide, setWide] = useState(() => window.innerWidth >= min);
  useEffect(() => {
    const onResize = () => setWide(window.innerWidth >= min);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [min]);
  return wide;
}

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.5 5 5.2-1.4A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.82.83-3-.2-.31a8.2 8.2 0 1 1 6.97 3.82Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.96-.14.17-.29.19-.54.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48a.92.92 0 0 0-.67.31 2.8 2.8 0 0 0-.87 2.08 4.9 4.9 0 0 0 1.02 2.58c.13.16 1.76 2.7 4.28 3.78 1.6.69 2.22.75 3.02.63.49-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.15-1.18-.06-.1-.22-.16-.47-.29Z"
    />
  </svg>
);

function WhatsAppButton({ size = '', label = 'Join WhatsApp community', tag = true }) {
  return (
    <a className={`btn btn-wa ${size}`} href={WHATSAPP_URL} {...ext}>
      <WaIcon />
      {label}
      {tag && <span className="wa-tag">Mandatory</span>}
    </a>
  );
}

function RegisterButton({ size = '', label = 'Register on Luma' }) {
  return (
    <a className={`btn btn-primary ${size}`} {...luma}>
      {label}
      <Arrow />
    </a>
  );
}

function AnnouncementBar() {
  const phase = phaseAt(useNow(30000));
  return (
    <div className="announce">
      <a className="announce-wa" href={WHATSAPP_URL} {...ext}>
        <WaIcon />
        <span>
          Join the WhatsApp community <b>· mandatory</b>
        </span>
      </a>
      <div className="announce-track">
        {Array.from({ length: 2 }).map((_, k) => (
          <div className="announce-row" key={k} aria-hidden={k === 1}>
            <span>
              <b>{phase.status}</b>
            </span>
            <span>Open to everyone · solo or as a team</span>
            <span>Top 10 present 30 Oct · 4:00 – 4:30 PM</span>
            <span>Summit · Fri 30 Oct · 9:00 AM – 5:00 PM IST</span>
            <span>GL Bajaj Group of Institutions, Mathura</span>
            <span>Free · In person · Registration on Luma</span>
            <span>WhatsApp community is mandatory for every participant</span>
            <span>Submit: GitHub pull request + Google Form</span>
            <span>Event details are emailed to registered participants before the start</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// A nav entry is either a home-page section (`id`) or a separate page (`path`).
function NavItem({ n, className = '', onClick, children }) {
  const { pathname } = useLocation();
  if (n.path) {
    return (
      <Link to={n.path} className={className} onClick={onClick}>
        {children ?? n.label}
      </Link>
    );
  }
  if (pathname === '/') {
    return (
      <a href={`#${n.id}`} className={className} onClick={onClick}>
        {children ?? n.label}
      </a>
    );
  }
  return (
    <Link to={`/#${n.id}`} className={className} onClick={onClick}>
      {children ?? n.label}
    </Link>
  );
}

function Nav() {
  const { pathname } = useLocation();
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
      const el = n.id && document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  const isActive = n => (n.path ? pathname === n.path : pathname === '/' && active === n.id);
  return (
    <header className={`nav ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-brand" aria-label="IBM Db2 TechX Summit — home" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logos/ibm-db2-white.svg" alt="IBM Db2" />
          <span className="nav-brand-sep" />
          <span className="nav-brand-text">TechX Summit</span>
        </Link>
        <nav className="nav-links" aria-label="Sections">
          {NAV.map(n => (
            <NavItem key={n.label} n={n} className={isActive(n) ? 'is-active' : ''} />
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-primary btn-sm" {...luma}>
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
          <motion.div
            key={n.label}
            initial={false}
            animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: open ? 0.05 * i : 0, ease: EASE }}
          >
            <NavItem n={n} className="mm-link" onClick={() => setOpen(false)}>
              <span className="mm-n">{String(i + 1).padStart(2, '0')}</span>
              {n.label}
            </NavItem>
          </motion.div>
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
          <DecryptedText
            text="A DAY OF IBM DB2 — DATA AND AI"
            animateOn="view"
            sequential
            speed={35}
            characters="=+xX0S8#@"
            encryptedClassName="decrypt-dim"
          />
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
          <ShinyText text={EVENT.tagline} color="#c6c6c6" shineColor="#ffffff" speed={3} delay={1.5} />
        </motion.p>

        <motion.div className="hero-ctas" {...rise(1.05, 20)}>
          <Magnet padding={70} magnetStrength={4}>
            <RegisterButton size="btn-xl" label="Register free on Luma" />
          </Magnet>
          <Magnet padding={70} magnetStrength={4}>
            <WhatsAppButton size="btn-xl" />
          </Magnet>
        </motion.div>
        <motion.div className="hero-sublinks" {...rise(1.2, 14)}>
          <Link to="/submit">How to submit your project →</Link>
          <a href="#mandatory">What's mandatory →</a>
          <Link to="/resources">Resources & toolkit →</Link>
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

// Big tiles (positions 3 and 4) carry a visual; the rest are text-only.
const BENTO_ORDER = [
  'Hands-on workshop',
  'Knowledge sharing',
  'Talks by IBM experts',
  'Db2Hack finale',
  'Panel discussion',
  'Data & AI Quiz',
];
const BENTO_VISUALS = {
  'Talks by IBM experts': (
    <div className="bento-faces">
      {SPEAKERS.map(sp => (
        <img key={sp.name} src={sp.photo} alt="" />
      ))}
      <span>{SPEAKERS.length} IBM Db2 speakers</span>
    </div>
  ),
  'Db2Hack finale': (
    <div className="bento-top10">
      <strong>TOP 10</strong>
      <span>4:00 – 4:30 PM · live pitch</span>
    </div>
  ),
};

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
            <ScrollReveal
              containerClassName="lead-reveal"
              textClassName="lead"
              baseOpacity={0.15}
              baseRotation={0}
              blurStrength={3}
            >
              IBM Db2 TechX Summit is a one-day event on IBM Db2, data and AI at GL Bajaj Group of Institutions,
              Mathura. Hear directly from IBM Db2 experts, learn how modern AI applications are built on data, and
              build real AI use cases on IBM Db2 with popular open-source frameworks.
            </ScrollReveal>
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

        <Reveal className="programme-bento">
          <MagicBento
            items={BENTO_ORDER.map((k, i) => {
              const p = PROGRAMME.find(x => x.title === k);
              return {
                label: String(i + 1).padStart(2, '0'),
                title: p.title,
                description: p.body,
                visual: BENTO_VISUALS[k],
                ...(i === 2 || i === 3 ? { colSpan: 2, rowSpan: 2 } : {}),
              };
            })}
            columns={4}
            rowHeight={210}
            gap={12}
            radius={24}
            glowColor="#0f62fe"
            textAutoHide={false}
            enableStars
            particleCount={14}
            enableTilt={false}
          />
        </Reveal>

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

const at = (date, hhmm) => new Date(`${date}T00:00:00+05:30`).getTime() + toMin(hhmm) * 6e4;
const fmt12 = hhmm => {
  const m = toMin(hhmm) % (24 * 60);
  const h = Math.floor(m / 60);
  return `${((h + 11) % 12) + 1}:${String(m % 60).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
};
// "7:00 PM" for a moment, "7:00 PM onwards" when it runs to midnight, "Until 7:00 PM" from midnight.
const fmtRange = ({ start, end }) => {
  if (start === end) return fmt12(start);
  if (end === '24:00') return `${fmt12(start)} onwards`;
  if (start === '00:00') return `Until ${fmt12(end)}`;
  return `${fmt(start)} – ${fmt12(end)}`;
};

function Schedule() {
  const now = useNow(30000).getTime();
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 70%', 'end 60%'] });
  const grow = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  let n = 0;
  return (
    <section className="section" id="schedule">
      <div className="container">
        <SectionHead
          num="02"
          kicker="Event flow · 28 – 30 October 2026"
          title={
            <>
              Three days, <span className="dim">one stage.</span>
            </>
          }
          sub="Db2Hack opened on 28 Oct at 7:00 PM and stays open — no deadline today. The Summit is in person on 30 Oct: reporting at 9:00 AM, final build hour after the workshop, Top 10 on stage at 4:00 PM. All times are IST."
        />
        <div className="timeline" ref={lineRef}>
          <div className="tl-rail">
            <motion.div className="tl-rail-fill" style={{ scaleY: grow }} />
          </div>
          {SCHEDULE_DAYS.map(day => (
            <div className="tl-daygroup" key={day.date}>
              <Reveal className="tl-day">
                <span className="tl-day-node" />
                <strong>{day.label}</strong>
                <span>{day.caption}</span>
              </Reveal>
              {day.items.map(it => {
                const live = now >= at(day.date, it.start) && now < at(day.date, it.end);
                return (
                  <Reveal
                    key={it.title}
                    delay={0.04 * n++}
                    className={`tl-item ${it.highlight ? 'is-hl' : ''} ${live ? 'is-live' : ''}`}
                  >
                    <span className="tl-node" />
                    <div className="tl-time">{fmtRange(it)}</div>
                    <div className="tl-body">
                      <h3>
                        {it.title}
                        {live && <span className="tag tag-live">Live now</span>}
                        {it.tag && !live && <span className="tag">{it.tag}</span>}
                      </h3>
                      <p>{it.detail}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Db2Hack() {
  const wide = useWide();
  const flap = wide ? 44 : 15;
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
          <Reveal delay={0.12} className="hack-rotate">
            Build with
            <RotatingText
              texts={CORE_FRAMEWORKS}
              mainClassName="rotate-pill"
              staggerFrom="last"
              staggerDuration={0.025}
              rotationInterval={2200}
              splitLevelClassName="rotate-split"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            />
            on IBM Db2
          </Reveal>
          <Reveal delay={0.14} as="p" className="hack-lead">
            Build an AI use case on IBM Db2. Open to everyone, solo or as a team — <b>and submissions are still open.</b>
          </Reveal>
        </div>

        <Reveal className="flap-board">
          <SplitFlapText
            words={['SUBMISSIONS OPEN NOW', 'NO DEADLINE TODAY', 'TOP 10 · 30 OCT 4PM']}
            padTo={19}
            fontSize={flap}
            gap={wide ? 5 : 3}
            tileColor="#111111"
            textColor="#ffffff"
            tileRadius={wide ? 6 : 4}
            cycleDelay={2600}
            align="left"
          />
        </Reveal>

        <Reveal className="hack-window">
          <div className="hw-point">
            <span className="mono-label">Opened</span>
            <strong>Wed, 28 Oct</strong>
            <span>7:00 PM IST</span>
          </div>
          <div className="hw-line">
            <span className="hw-line-fill" />
            <span className="hw-line-label">still open · build · share · submit</span>
          </div>
          <div className="hw-point">
            <span className="mono-label">Submissions close</span>
            <strong>Fri, 30 Oct</strong>
            <span>3:30 PM IST · after the workshop</span>
          </div>
          <div className="hw-line hw-line-short">
            <span className="hw-line-fill" />
          </div>
          <div className="hw-point hw-final">
            <span className="mono-label">Finale</span>
            <strong>Fri, 30 Oct</strong>
            <span>4:00 – 4:30 PM · Top 10 present</span>
          </div>
        </Reveal>

        {wide && (
          <div className="swap-row">
            <Reveal className="swap-copy">
              <span className="mono-label">How it works</span>
              <h3>
                Build. Share. Submit. <span className="dim">Pitch.</span>
              </h3>
              <p>Four steps from your first commit to the Db2Hack finale stage. Hover to pause, drag to flip.</p>
            </Reveal>
            <div className="swap-stage">
              <CardSwap width={440} height={300} cardDistance={56} verticalDistance={64} delay={3600} skewAmount={4}>
                {HACK_STEPS.map(s => (
                  <Card key={s.n} customClass="swap-card">
                    <div className="step-top">
                      <span className="step-n">{s.n}</span>
                      <span className="step-when">{s.when}</span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        )}
        <div className={`hack-steps ${wide ? 'is-hidden' : ''}`}>
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
              <li>Open to everyone — solo or as a team</li>
              <li>Submit a GitHub pull request, then the PR link via Google Form</li>
              <li>Joining the WhatsApp community is mandatory</li>
              <li>No deadline today — submissions close 30 Oct, 3:30 PM</li>
              <li>Post your use case on LinkedIn and tag the organising team</li>
              <li>Top 10 pitch live to IBM experts on 30 Oct</li>
            </ul>
          </Reveal>
        </div>
        <Reveal className="hack-cta">
          <RegisterButton size="btn-lg" label="Register to get the Db2Hack brief" />
          <Link className="btn btn-ghost btn-lg" to="/submit">
            Submission guide & judging <Arrow />
          </Link>
          <WhatsAppButton size="btn-lg" />
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
            num="02"
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

        <div id="community-edition" />
        <Reveal className="ce-wrap">
          <div className="ce-laser" aria-hidden="true">
            <LaserFlow color="#0f62fe" beamPosition={0.5} intensity={1.4} fog={0.15} dust={1} mouseInteraction={false} />
          </div>
          <BorderGlow
            className="ce"
            backgroundColor="#0b0b0b"
            borderRadius={24}
            glowColor="218 99 53"
            colors={['#0f62fe', '#78a9ff', '#38bdf8']}
            glowRadius={36}
          >
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
                {w.cmd && <CopyCmd cmd={w.cmd} />}
                {w.link && (
                  <a className={`btn btn-ghost ce-link ${w.cmd ? 'ce-link-sub' : ''}`} href={w.link} {...ext}>
                    {w.linkLabel} <ArrowUpRight />
                  </a>
                )}
              </div>
            ))}
          </div>
          </BorderGlow>
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
          <div className="logo-loops">
            {[0, 1].map(r => (
              <LogoLoop
                key={r}
                logos={ECOSYSTEM.map(e => ({
                  title: e.name,
                  node: (
                    <span className="mq-item">
                      <span className="mq-logo">
                        <img src={`/fw/${e.logo}`} alt="" />
                      </span>
                      {e.name}
                    </span>
                  ),
                }))}
                speed={r ? 50 : 70}
                direction={r ? 'right' : 'left'}
                logoHeight={46}
                gap={10}
                pauseOnHover
                fadeOut
                ariaLabel="IBM Db2 ecosystem integrations"
              />
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

const GROUP_ORDER = ['blog', 'start', 'docs', 'news'];

function ResourceCard({ r }) {
  return (
    <a className="res-card" href={r.url} {...ext}>
      <span className={`res-thumb ${r.thumb ? '' : 'is-cover'}`}>
        {r.thumb ? (
          <img src={r.thumb} alt="" loading="lazy" />
        ) : (
          <>
            <span className="res-cover-logo">
              <img src={r.logo} alt="" loading="lazy" />
            </span>
            <span className="res-cover-src">{r.src}</span>
          </>
        )}
      </span>
      <span className="res-body">
        <span className="res-src">{r.src}</span>
        <span className="res-title">{r.title}</span>
        <span className="res-go">
          Open <ArrowUpRight />
        </span>
      </span>
    </a>
  );
}

// Compulsory checklist + community blogs — the top of /resources.
function MustDo() {
  const blogs = RESOURCES.filter(r => r.group === 'blog');
  return (
    <section className="section mustdo" id="must-do">
      <div className="container">
        <SectionHead
          num="01"
          kicker="Compulsory · do these first"
          title={
            <>
              Four things before <span className="dim">you write code.</span>
            </>
          }
          sub="Every Db2Hack participant should finish these. They take about an hour and make building — and judging — much easier."
        />
        <ol className="must-list">
          {MUST_DO.map((m, i) => (
            <Reveal as="li" key={m.title} delay={0.06 * i} className="must">
              <span className="must-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="must-body">
                <h3>{m.title}</h3>
                <p>
                  <b>Why it helps:</b> {m.why}
                </p>
                {m.cmd && <CopyCmd cmd={m.cmd} />}
                <div className="must-links">
                  {m.links.map(l =>
                    l.url.startsWith('#') ? (
                      <a key={l.label} className="mand-act" href={l.url}>
                        {l.label} <Arrow />
                      </a>
                    ) : (
                      <a key={l.label} className="mand-act" href={l.url} {...ext}>
                        {l.label} <ArrowUpRight />
                      </a>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="blogs" id="community-blogs">
          <div className="learn-head">
            <div>
              <span className="mono-label">Must-read · IBM Db2 community</span>
              <h3>
                Community blogs <span className="dim">from the Db2 team.</span>
              </h3>
            </div>
          </div>
          <ul className="res-grid">
            {blogs.map((r, i) => (
              <Reveal as="li" key={r.url} delay={0.05 * i}>
                <ResourceCard r={r} />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  const [group, setGroup] = useState('all');
  const list =
    group === 'all'
      ? [...RESOURCES].sort((a, b) => GROUP_ORDER.indexOf(a.group) - GROUP_ORDER.indexOf(b.group))
      : RESOURCES.filter(r => r.group === group);
  return (
    <section className="section" id="resources">
      <div className="container">
        <div id="tutorials" />
        <SectionHead
          num="02"
          kicker="Official IBM tutorials & all links"
          title={
            <>
              Watch, read, <span className="dim">then ship.</span>
            </>
          }
          sub="IBM Product Hub tutorials, then every blog, getting-started guide, connector doc and announcement in one filterable grid."
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
        <motion.ul className="res-grid" layout>
          {list.map(r => (
            <motion.li
              key={r.url}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <ResourceCard r={r} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

// Optional Python / agentic-AI basics — kept low on the page on purpose.
function Prerequisites() {
  return (
    <section className="section" id="prerequisites">
      <div className="container">
        <div className="learn-head">
          <div>
            <span className="mono-label">Optional prerequisites · Hinglish</span>
            <h3>
              New to Python or agentic AI? <span className="dim">You can also watch Dhruv Chaturvedi.</span>
            </h3>
            <p className="prereq-sub">Beginner-friendly explainers to get the basics in place before you start building.</p>
          </div>
          <a className="btn btn-ghost" href={LEARN_CHANNEL} {...ext}>
            Dhruv Insights on YouTube <ArrowUpRight />
          </a>
        </div>
        <div className="videos videos-learn">
          {LEARN_VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={0.06 * i}>
              <Video v={v} />
            </Reveal>
          ))}
        </div>
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
    <section className="section rewards-sec" id="rewards">
      <div className="rewards-bg" aria-hidden="true">
        <DotGrid dotSize={3} gap={26} baseColor="#1c1c1c" activeColor="#0f62fe" proximity={130} glow={0.4} />
      </div>
      <div className="container">
        <SectionHead
          num="04"
          kicker="Rewards & recognition"
          title={
            <>
              Build well. <span className="dim">Get recognised.</span>
            </>
          }
        />
        <div className="rewards-grid">
          <Reveal className="reward-mystery-wrap">
            <PixelCard
              className="reward-mystery"
              colors={['#0f62fe', '#4589ff', '#a6c8ff']}
              glowColor="#78a9ff"
              radius={24}
              trigger="hover"
            >
            <span className="mono-label">Db2Hack winners</span>
            <div className="mystery-glyphs" aria-hidden="true">
              <LoopScramble />
            </div>
            <h3>
              Revealed live <span className="dim">at the finale.</span>
            </h3>
            <p>What the winners take home stays under wraps until 30 October.</p>
            </PixelCard>
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

const Social = {
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.66 4.8 6.13v5.43h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.9h-4v-11Z"
      />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  ),
  youtube: (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
      />
    </svg>
  ),
};
const SOCIAL_LABEL = { linkedin: 'LinkedIn', instagram: 'Instagram', youtube: 'YouTube' };

function Speakers() {
  return (
    <section className="section" id="speakers">
      <div className="container">
        <SectionHead
          num="05"
          kicker="Speakers · IBM Db2"
          title={
            <>
              Learn from the people <span className="dim">who build Db2.</span>
            </>
          }
          sub="IBM Db2 leadership and engineers lead the talks, the workshop and the Db2Hack finale."
        />
        <div className="speakers">
          {SPEAKERS.map((sp, i) => (
            <Reveal key={sp.name} delay={0.06 * i} className="speaker-wrap">
              <Spotlight className="speaker">
                <div className="sp-photo">
                  <img src={sp.photo} alt={sp.name} loading="lazy" />
                </div>
                <div className="sp-meta">
                  <h3>{sp.name}</h3>
                  <p>{sp.role}</p>
                  <span className="sp-org">
                    <img src="/logos/ibm-8bar-white.svg" alt="IBM" />
                    {sp.org === 'IBM' ? 'IBM' : sp.org.replace('IBM ', '')}
                  </span>
                  {sp.tag && <span className="tag tag-sm">{sp.tag}</span>}
                </div>
                {(sp.linkedin || sp.instagram || sp.youtube) && (
                <div className="sp-social">
                  {['linkedin', 'instagram', 'youtube']
                    .filter(k => sp[k])
                    .map(k => (
                      <a key={k} href={sp[k]} {...ext} aria-label={`${sp.name} on ${SOCIAL_LABEL[k]}`}>
                        {Social[k]}
                        <span>{SOCIAL_LABEL[k]}</span>
                      </a>
                    ))}
                </div>
                )}
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Band() {
  return (
    <section className="band" aria-hidden="true">
      <ScrollVelocity
        texts={['IBM Db2 TechX Summit', 'Db2Hack · still open · Build on Db2']}
        velocity={60}
        separator="✦"
        outlineAlternate
        parallaxClassName="band-parallax"
        scrollerClassName="band-scroller"
      />
    </section>
  );
}

function Venue() {
  return (
    <section className="section venue-sec" id="venue">
      <div className="venue-radar" aria-hidden="true">
        <Radar color="#0f62fe" centerX={0.22} centerY={0.42} scale={0.8} targets={3} clutter={0.2} opacity={0.55} mouseInteraction={false} />
      </div>
      <div className="container venue">
        <div>
          <SectionHead
            num="06"
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
          num="07"
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
          <StarBorder
            as="a"
            href={WHATSAPP_URL}
            {...ext}
            className="star-cta"
            color="#78a9ff"
            radius={40}
            backgroundColor="#000"
            textColor="#fff"
            stars={2}
          >
            WhatsApp community <ArrowUpRight />
          </StarBorder>
        </Reveal>
        <Reveal delay={0.24} className="luma-embed">
          <iframe src={LUMA_EMBED} title="Register for IBM Db2 TechX Summit on Luma" allow="fullscreen; payment" loading="lazy" />
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
                <NavItem key={n.label} n={n} />
              ))}
            </div>
            <div>
              <span className="mono-label">More</span>
              {NAV.slice(4).map(n => (
                <NavItem key={n.label} n={n} />
              ))}
            </div>
            <div>
              <span className="mono-label">Connect</span>
              <a {...luma}>
                Register on Luma
              </a>
              <Link to="/submit">Submission guide</Link>
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
          <TextPressure text="Db2 TechX" textColor="#2a2a2a" pressureColor="#0f62fe" minFontSize={48} italic={false} idle="wave" />
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
    <a className={`float-cta ${on ? 'is-on' : ''}`} {...luma}>
      Register <Arrow />
    </a>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div className="progress" style={{ scaleX: x }} />;
}

function MandatoryAction({ action }) {
  if (action === 'register')
    return (
      <a className="mand-act" {...luma}>
        Register <Arrow />
      </a>
    );
  if (action === 'whatsapp')
    return (
      <a className="mand-act mand-act-wa" href={WHATSAPP_URL} {...ext}>
        Join now <ArrowUpRight />
      </a>
    );
  if (action === 'setup')
    return (
      <Link className="mand-act" to="/submit#local-db2">
        Setup guide <Arrow />
      </Link>
    );
  if (action === 'submit')
    return (
      <Link className="mand-act" to="/submit">
        How to submit <Arrow />
      </Link>
    );
  return null;
}

// "What's mandatory" checklist — sits right under the hero and on /submit.
function Mandatory({ compact = false }) {
  return (
    <section className={`mandatory ${compact ? 'is-compact' : ''}`} id="mandatory">
      <div className="container">
        <Reveal className="mand-card">
          <div className="mand-head">
            <div>
              <span className="mono-label">Before you start · mandatory</span>
              <h2>
                Six things every participant <span className="dim">must do.</span>
              </h2>
            </div>
            <WhatsAppButton size="btn-lg" />
          </div>
          <ol className="mand-list">
            {MANDATORY.map((m, i) => (
              <li key={m.title} className={m.action === 'whatsapp' ? 'is-wa' : ''}>
                <span className="mand-n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
                <MandatoryAction action={m.action} />
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

// Still-open notice, eligibility, the plan and IBM's goal.
function OpenCall() {
  return (
    <section className="opencall" id="open-call">
      <div className="container">
        <Reveal className="oc-card">
          <div className="oc-banner">
            <span className="live-dot" />
            <strong>Db2Hack is still open.</strong>
            <span>No deadline today — start or keep building, and submit anytime until 3:30 PM on 30 Oct.</span>
            <Link className="btn btn-primary btn-sm" to="/submit#quick-start">
              Start in 6 steps <Arrow />
            </Link>
          </div>
          <div className="oc-grid">
            <div className="oc-col">
              <span className="mono-label">Eligibility</span>
              <h3>Open to everyone.</h3>
              <p>{ELIGIBILITY.who}</p>
            </div>
            <div className="oc-col">
              <span className="mono-label">How it works now</span>
              <ul className="checks">
                {ELIGIBILITY.plan.map(pt => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
            <div className="oc-col oc-goal">
              <span className="mono-label">IBM's goal</span>
              <h3>Learn. Build. Stay.</h3>
              <p>{ELIGIBILITY.goal}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section className="section" id="quick-start">
      <div className="container">
        <SectionHead
          num="01"
          kicker="Quick start · idea to PR"
          title={
            <>
              Build your project <span className="dim">in six steps.</span>
            </>
          }
          sub="Never built with AI and a database before? Follow this path — most people go from idea to a working prototype in an afternoon."
        />
        <ol className="ssteps qsteps">
          {QUICKSTART.map((q, i) => (
            <Reveal as="li" key={q.title} delay={0.04 * i} className="sstep">
              <span className="sstep-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="sstep-body">
                <h3>{q.title}</h3>
                <p>{q.body}</p>
                {q.packages && (
                  <div className="qpkgs">
                    {QUICK_PACKAGES.map(pk => (
                      <div className="qpkg" key={pk.name}>
                        <span className="mono-label">
                          {pk.name} · {pk.note}
                        </span>
                        <CopyCmd cmd={pk.cmd} />
                      </div>
                    ))}
                    <Link className="qmore" to="/resources#toolkit">
                      CrewAI, Langflow and more in the toolkit <Arrow />
                    </Link>
                  </div>
                )}
                {q.bob && (
                  <div className="qbob">
                    <a className="btn btn-primary" href={IBM_BOB.trial} {...ext}>
                      Start the IBM Bob free trial <ArrowUpRight />
                    </a>
                    <a className="btn btn-ghost" href={IBM_BOB.site} {...ext}>
                      What is IBM Bob? <ArrowUpRight />
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="qexample">
          <span className="mono-label">Worked example</span>
          <h3>{QUICK_EXAMPLE.title}</h3>
          <ol className="qex-steps">
            {QUICK_EXAMPLE.steps.map(st => (
              <li key={st}>{st}</li>
            ))}
          </ol>
          <CodeBlock code={QUICK_EXAMPLE.install} />
          <CodeBlock code={QUICK_EXAMPLE.code} />
          <p className="qex-note">
            Swap the notes for your own data, add an LLM for step 5, and you have a submission. Use the same host, port,
            username and password you set when creating the Db2 instance below.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function LocalDb2() {
  return (
    <section className="section" id="local-db2">
      <div className="container">
        <SectionHead
          num="02"
          kicker="Free Db2 on your laptop"
          title={
            <>
              Db2 in three clicks <span className="dim">with VS Code.</span>
            </>
          }
          sub="The IBM Db2 Developer Extension installs free Db2 Community Edition locally — no cloud account or credit card."
        />
        <div className="local-steps">
          {LOCAL_DB2.map((st, i) => (
            <Reveal key={st.title} delay={0.08 * i}>
              <Spotlight className="local-step">
                <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
                {st.cmd && <CopyCmd cmd={st.cmd} />}
              </Spotlight>
            </Reveal>
          ))}
        </div>
        <Reveal className="local-links">
          <a className="mand-act" href="https://ibm.github.io/db2developerextension-about/docs/the-basics/creating-db2-instance" {...ext}>
            Official step-by-step guide <ArrowUpRight />
          </a>
          <a className="mand-act" href="https://ibm.github.io/db2developerextension-about/docs/troubleshooting/docker-colima-troubleshooting" {...ext}>
            Docker / Colima troubleshooting <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function CodeBlock({ code }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setDone(true);
      setTimeout(() => setDone(false), 1400);
    } catch {
      /* clipboard blocked — text stays selectable */
    }
  };
  return (
    <div className="codeblock">
      <button type="button" onClick={copy} className={done ? 'is-done' : ''}>
        {done ? 'Copied' : 'Copy'}
      </button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function SubmitHero() {
  return (
    <section className="page-hero submit-hero">
      <div className="page-hero-bg submit-hero-bg" aria-hidden="true">
        <LightRays raysOrigin="top-center" raysColor="#4589ff" raysSpeed={0.8} lightSpread={0.9} rayLength={2.4} intensity={1.2} followMouse mouseInfluence={0.08} />
      </div>
      <div className="container page-hero-inner">
        <Reveal as="span" className="kicker">
          <span className="kicker-dot" />
          Db2Hack · submission guide
        </Reveal>
        <Reveal delay={0.06} as="h1">
          Ship it right. <span className="dim">Get judged fairly.</span>
        </Reveal>
        <Reveal delay={0.12} as="p">
          Open to everyone and still open for submissions. A 6-step quick start, free local Db2, the GitHub + Google Form
          flow, naming rules and the 100-point judging rubric.
        </Reveal>
        <Reveal delay={0.18} className="page-hero-ctas">
          <a className="btn btn-primary btn-lg" href={SUBMISSION_REPO} {...ext}>
            Open submission repo <ArrowUpRight />
          </a>
          <WhatsAppButton size="btn-lg" />
        </Reveal>
        <Reveal delay={0.24} className="page-hero-links">
          <a href="#quick-start">Quick start</a>
          <a href="#local-db2">Free local Db2</a>
          <a href="#submit-dates">Timeline</a>
          <a href="#submit-steps">Submit steps</a>
          <a href="#judging">Judging</a>
          <a href="#submit-help">Help</a>
        </Reveal>
      </div>
    </section>
  );
}

function SubmitGuide() {
  return (
    <>
      <section className="section" id="submit-dates">
        <div className="container">
          <SectionHead
            num="03"
            kicker="Important dates"
            title={
              <>
                Open now. <span className="dim">Finale on 30 Oct.</span>
              </>
            }
            sub="There is no deadline today. Any change to timings is announced first in the WhatsApp community."
          />
          <div className="sdates">
            {SUBMIT_DATES.map((d, i) => (
              <Reveal key={d.what} delay={0.08 * i} className={`sdate ${i === 1 ? 'is-deadline' : ''}`}>
                <span className="mono-label">{d.what}</span>
                <strong>{d.when}</strong>
                <p>{d.note}</p>
              </Reveal>
            ))}
          </div>

          <div className="sreq">
            {SUBMIT_REQUIREMENTS.map((r, i) => (
              <Reveal key={r.title} delay={0.06 * i}>
                <Spotlight className="sreq-card">
                  <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="submit-steps">
        <div className="container">
          <SectionHead
            num="04"
            kicker="Step-by-step"
            title={
              <>
                From fork <span className="dim">to finale.</span>
              </>
            }
            sub="Steps 6 and 7 are both mandatory: a pull request alone does not complete your submission."
          />
          <ol className="ssteps">
            {SUBMIT_STEPS.map((st, i) => (
              <Reveal as="li" key={st.title} delay={0.04 * i} className="sstep">
                <span className="sstep-n">{String(i + 1).padStart(2, '0')}</span>
                <div className="sstep-body">
                  <h3>{st.title}</h3>
                  <p>{st.body}</p>
                  {st.code && <CodeBlock code={st.code} />}
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="snaming">
            <span className="mono-label">Naming conventions</span>
            <div className="snaming-table" role="table">
              {SUBMIT_NAMING.map(n => (
                <div className="snaming-row" role="row" key={n.asset}>
                  <span role="cell">{n.asset}</span>
                  <code role="cell">{n.format}</code>
                  <code role="cell" className="dimcode">
                    {n.example}
                  </code>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="judging">
        <div className="container">
          <SectionHead
            num="05"
            kicker="Judging · 100 points"
            title={
              <>
                How projects <span className="dim">are scored.</span>
              </>
            }
            sub="A panel of IBM engineers, subject-matter experts and academic mentors scores every submission on five dimensions."
          />
          <div className="judging">
            {JUDGING.map((j, i) => (
              <Reveal key={j.name} delay={0.06 * i} className="judge">
                <div className="judge-top">
                  <h3>{j.name}</h3>
                  <span className="judge-w">{j.weight}%</span>
                </div>
                <div className="judge-bar">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: j.weight / 30 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.15 + 0.08 * i, ease: EASE }}
                  />
                </div>
                <ul>
                  {j.points.map(pt => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="penalties">
            <Reveal className="pen-head">
              <span className="mono-label">Disqualification & penalties</span>
              <h3>Avoid these.</h3>
              <p>
                Zero-secrets policy: keep real keys in a local <code>.env</code>, commit only <code>.env.example</code>.
                Follow the Code of Conduct and declare third-party licences.
              </p>
            </Reveal>
            {PENALTIES.map((pn, i) => (
              <Reveal key={pn.title} delay={0.06 * i} className="pen">
                <span className="pen-x" aria-hidden="true">
                  ×
                </span>
                <h4>{pn.title}</h4>
                <p>{pn.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="submit-help">
        <div className="container">
          <SectionHead
            num="06"
            kicker="Need help?"
            title={
              <>
                Stuck? <span className="dim">We've got you.</span>
              </>
            }
          />
          <div className="shelp">
            <Reveal>
              <a className="shelp-card" href={SUBMISSION_ISSUES} {...ext}>
                <span className="mono-label">GitHub</span>
                <h3>Open a submission-help issue</h3>
                <p>Templates for setup, PR and validation questions.</p>
                <span className="res-go">
                  Open issue <ArrowUpRight />
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.06}>
              <a className="shelp-card is-wa" href={WHATSAPP_URL} {...ext}>
                <span className="mono-label">WhatsApp · mandatory</span>
                <h3>Ask in the community</h3>
                <p>Live updates, the Google Form link and quick answers from the organisers.</p>
                <span className="res-go">
                  Join now <ArrowUpRight />
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.12}>
              <Link className="shelp-card" to="/resources">
                <span className="mono-label">Resources</span>
                <h3>Db2 setup & connector docs</h3>
                <p>Db2 Community Edition, the VS Code extension, toolkit packages and tutorials.</p>
                <span className="res-go">
                  Open resources <Arrow />
                </span>
              </Link>
            </Reveal>
          </div>
          <Reveal className="shelp-spoc">
            Event SPOC: <b>Dhruv Chaturvedi</b>, Db2 Software Engineer, IBM Lucknow · Submission repo maintained by{' '}
            <b>Kunal Gola</b>, IBM
          </Reveal>
        </div>
      </section>
    </>
  );
}

function SubmitPage() {
  useHashScroll();
  useEffect(() => {
    document.title = 'Submit your project · Db2Hack · IBM Db2 TechX Summit';
    return () => {
      document.title = 'IBM Db2 TechX Summit · 30 Oct 2026 · GL Bajaj, Mathura';
    };
  }, []);
  return (
    <main className="page-submit">
      <SubmitHero />
      <OpenCall />
      <Mandatory compact />
      <QuickStart />
      <LocalDb2 />
      <SubmitGuide />
      <FinalCta />
    </main>
  );
}

// Home-page teaser for the separate /resources page.
function ResourcesTeaser() {
  return (
    <section className="section teaser" id="resources-teaser">
      <div className="container">
        <Reveal className="teaser-card">
          <div className="teaser-copy">
            <span className="mono-label">Resources · toolkit · tutorials</span>
            <h2>
              Everything you need <span className="dim">to build on Db2.</span>
            </h2>
            <p>
              {VIDEOS.length + LEARN_VIDEOS.length} tutorial videos, {TOOLKIT.length} Db2 packages, the free Db2
              Community Edition and {RESOURCES.length} hand-picked docs and blogs — all on one page.
            </p>
            <Link className="btn btn-primary btn-lg" to="/resources">
              Open resources <Arrow />
            </Link>
          </div>
          <div className="teaser-logos">
            <LogoLoop
              logos={ECOSYSTEM.map(e => ({
                title: e.name,
                node: (
                  <span className="mq-item">
                    <span className="mq-logo">
                      <img src={`/fw/${e.logo}`} alt="" />
                    </span>
                    {e.name}
                  </span>
                ),
              }))}
              speed={60}
              logoHeight={46}
              gap={10}
              pauseOnHover
              ariaLabel="IBM Db2 ecosystem integrations"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PageHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden="true">
        <LetterGlitch
          glitchColors={['#0f62fe', '#4589ff', '#a6c8ff']}
          characters="=+xX0S8#@SELECTFROMDb2"
          fontSize={15}
          speed={0.8}
        />
      </div>
      <div className="container page-hero-inner">
        <Reveal as="span" className="kicker">
          <span className="kicker-dot" />
          IBM Db2 TechX Summit · Resources
        </Reveal>
        <Reveal delay={0.06} as="h1">
          Learn it. <span className="dim">Then build it on Db2.</span>
        </Reveal>
        <Reveal delay={0.12} as="p">
          Tutorials, the Db2 toolkit, Db2 Community Edition and every doc you need for Db2Hack — in one place.
        </Reveal>
        <Reveal delay={0.18} className="page-hero-links">
          <a href="#must-do">Compulsory first</a>
          <a href="#community-blogs">Community blogs</a>
          <a href="#tutorials">IBM tutorials</a>
          <a href="#toolkit">Toolkit</a>
          <a href="#community-edition">Community Edition</a>
        </Reveal>
      </div>
    </section>
  );
}

// Scroll to the #hash after navigating (e.g. /resources → /#faq), otherwise to the top.
function useHashScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 80);
    return () => clearTimeout(t);
  }, [pathname, hash]);
}

function HomePage() {
  useHashScroll();
  return (
    <main>
      <Hero />
      <OpenCall />
      <Mandatory />
      <Partners />
      <About />
      <Statement />
      <Schedule />
      <Db2Hack />
      <ResourcesTeaser />
      <Rewards />
      <Speakers />
      <Band />
      <Venue />
      <Faq />
      <FinalCta />
    </main>
  );
}

function ResourcesPage() {
  useHashScroll();
  useEffect(() => {
    document.title = 'Resources · IBM Db2 TechX Summit';
    return () => {
      document.title = 'IBM Db2 TechX Summit · 30 Oct 2026 · GL Bajaj, Mathura';
    };
  }, []);
  return (
    <main className="page-resources">
      <PageHero />
      <MustDo />
      <Resources />
      <Toolkit />
      <Prerequisites />
      <FinalCta />
    </main>
  );
}

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    const bind = () => window.luma?.initCheckout?.();
    const t = setTimeout(bind, 50);
    const script = document.getElementById('luma-checkout');
    script?.addEventListener('load', bind);
    return () => {
      clearTimeout(t);
      script?.removeEventListener('load', bind);
    };
  }, [pathname]);
  return (
    <ClickSpark sparkColor="#78a9ff" sparkSize={10} sparkRadius={22} sparkCount={9} duration={450}>
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <FloatCta />
    </ClickSpark>
  );
}
