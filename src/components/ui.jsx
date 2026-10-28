import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { MOMENTS } from '../data';
import DecryptedText from './reactbits/DecryptedText';
import Counter from './reactbits/Counter';

const EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ num, kicker, title, sub }) {
  return (
    <div className="section-head">
      <Reveal>
        <span className="kicker">
          {num ? <span className="kicker-num">{num}</span> : <span className="kicker-dot" />}
          <DecryptedText
            text={kicker}
            animateOn="view"
            sequential
            speed={25}
            characters="=+xX0S8#@"
            encryptedClassName="decrypt-dim"
          />
        </span>
      </Reveal>
      <Reveal delay={0.08} as="h2">
        {title}
      </Reveal>
      {sub && (
        <Reveal delay={0.16} as="p" className="section-sub">
          {sub}
        </Reveal>
      )}
    </div>
  );
}

export function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: x => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {String(v).padStart(2, '0')}
      {suffix}
    </span>
  );
}

export function useNow(interval = 1000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), interval);
    return () => clearInterval(id);
  }, [interval]);
  return now;
}

// Which milestone the countdown should point at right now.
export function phaseAt(now) {
  const { hackStart, hackEnd, summitStart, summitEnd } = MOMENTS;
  if (now < hackStart) return { label: 'Db2Hack goes live in', target: hackStart, status: 'Registrations open' };
  if (now < hackEnd) return { label: 'Db2Hack submissions close in', target: hackEnd, status: 'Db2Hack is live' };
  if (now < summitStart) return { label: 'Summit begins in', target: summitStart, status: 'Submissions closed' };
  if (now < summitEnd) return { label: 'Happening now', target: null, status: 'Live at GL Bajaj' };
  return { label: "That's a wrap", target: null, status: 'Thank you, builders' };
}

export function Countdown() {
  const now = useNow();
  const phase = phaseAt(now);
  const diff = phase.target ? Math.max(0, phase.target - now) : 0;
  const parts = [
    ['Days', Math.floor(diff / 864e5)],
    ['Hrs', Math.floor(diff / 36e5) % 24],
    ['Min', Math.floor(diff / 6e4) % 60],
    ['Sec', Math.floor(diff / 1e3) % 60],
  ];
  return (
    <div className="countdown">
      <div className="countdown-label">
        <span className="live-dot" />
        {phase.label}
      </div>
      {phase.target && (
        <div className="countdown-grid">
          {parts.map(([k, n]) => (
            <div className="countdown-cell" key={k}>
              <Counter value={n} minDigits={2} fontSize={30} fontWeight={500} className="countdown-num" />
              <span className="countdown-unit">{k}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Card with a cursor-following glow.
export function Spotlight({ children, className = '', ...rest }) {
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div className={`spot ${className}`} onPointerMove={onMove} {...rest}>
      {children}
    </div>
  );
}

export function CopyCmd({ cmd }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setDone(true);
      setTimeout(() => setDone(false), 1400);
    } catch {
      /* clipboard blocked — the command stays selectable */
    }
  };
  return (
    <button type="button" className={`cmd ${done ? 'is-done' : ''}`} onClick={copy} aria-label={`Copy: ${cmd}`}>
      <span className="cmd-prompt">$</span>
      <code>{cmd}</code>
      <span className="cmd-act">{done ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

export const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

export const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);
