import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import VUMeters from './VUMeters';
import TransportControls from './TransportControls';

/** VHS-style cassette icon for hero */
export function TapeIcon({ className = '' }) {
  return (
    <motion.div
      className={`hero__tape-icon ${className}`}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.9 }}
      aria-hidden
    >
      <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="56" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" />
        <circle cx="18" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        <circle cx="46" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        <rect x="10" y="14" width="12" height="4" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="42" y="14" width="12" height="4" rx="1" fill="currentColor" opacity="0.5" />
        <path d="M4 18h56M4 30h56" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

/**
 * Hero graphic - right side of name/title area.
 * VHS-style cassette + reels + play graphic with periodic glitch.
 */
const GLITCH_INTERVAL_MS = 4200;
const GLITCH_DURATION_MS = 400;

export function HeroGraphic() {
  const [glitch, setGlitch] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timeoutId;
    const id = setInterval(() => {
      setGlitch(true);
      timeoutId = setTimeout(() => setGlitch(false), GLITCH_DURATION_MS);
    }, GLITCH_INTERVAL_MS);
    return () => {
      clearInterval(id);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      className="hero__photo-wrap"
      initial={{ opacity: 0, x: 20, scale: 0.94 }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        ...(reduceMotion ? {} : { y: [0, -6, 0] }),
      }}
      transition={{
        opacity: { duration: 0.5 },
        x: { type: 'spring', stiffness: 200, damping: 26, delay: 0.5 },
        scale: { type: 'spring', stiffness: 200, damping: 26, delay: 0.5 },
        ...(reduceMotion
          ? {}
          : {
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' },
            }),
      }}
    >
      <div className={`hero__photo-frame ${glitch ? 'hero__photo-frame--glitch' : ''}`}>
        <span className="hero__photo-corner hero__photo-corner--tl" aria-hidden />
        <span className="hero__photo-corner hero__photo-corner--tr" aria-hidden />
        <span className="hero__photo-corner hero__photo-corner--bl" aria-hidden />
        <span className="hero__photo-corner hero__photo-corner--br" aria-hidden />
        <div className="hero__photo-bar">
          <span className="hero__photo-rec">
            <span className="hero__photo-rec-dot" /> REC
          </span>
          <div className="hero__photo-bar-right">
            <span className="hero__photo-time hero__photo-time--led">00:00:00</span>
            <VUMeters className="hero__photo-vu" />
          </div>
        </div>
        <div className={`hero__photo-inner hero__graphic-inner ${glitch ? 'hero__photo-inner--glitch' : ''}`}>
          <HeroGraphicSvg />
        </div>
        <TransportControls />
        <div className="hero__photo-scanlines" aria-hidden />
        {/* Decorative floating orbs */}
        {!reduceMotion && (
          <>
            <motion.span
              className="hero__graphic-orb hero__graphic-orb--1"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="hero__graphic-orb hero__graphic-orb--2"
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.15, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
            <motion.span
              className="hero__graphic-orb hero__graphic-orb--3"
              animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

/** VHS cassette + reels + play graphic with Framer Motion */
function HeroGraphicSvg() {
  return (
    <motion.svg
      className="hero__graphic-svg"
      viewBox="0 0 280 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      variants={container}
      initial="hidden"
      animate="show"
    >
      <defs>
        <linearGradient id="hero-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--vhs-magenta)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--vhs-magenta)" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="hero-cyan" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--vhs-cyan)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--vhs-cyan)" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="hero-reel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--vhs-cyan)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--vhs-magenta)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--vhs-cyan)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <motion.rect width="280" height="360" fill="url(#hero-magenta)" variants={item} />
      <motion.rect width="280" height="360" fill="url(#hero-cyan)" variants={item} />

      <motion.rect x="40" y="80" width="200" height="200" rx="12" fill="none" stroke="var(--vhs-border)" strokeWidth="2" opacity="0.8" variants={item} />
      <motion.rect x="46" y="86" width="188" height="188" rx="8" fill="none" stroke="var(--vhs-magenta)" strokeWidth="1" opacity="0.25" variants={item} />

      <motion.g className="hero__graphic-reel hero__graphic-reel--left" variants={item}>
        <circle cx="100" cy="180" r="38" fill="none" stroke="var(--vhs-border)" strokeWidth="2" opacity="0.6" />
        <circle cx="100" cy="180" r="32" fill="none" stroke="var(--vhs-cyan)" strokeWidth="1.5" opacity="0.5" />
        <circle cx="100" cy="180" r="26" fill="none" stroke="url(#hero-reel)" strokeWidth="2" />
        <circle cx="100" cy="180" r="8" fill="var(--vhs-panel)" stroke="var(--vhs-magenta)" strokeWidth="1" opacity="0.6" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M 100 ${180 - 26 + i * 4} A 26 26 0 0 1 100 ${180 + 26 - i * 4}`} fill="none" stroke="var(--vhs-cyan)" strokeWidth="1" opacity={0.2 + i * 0.08} />
        ))}
      </motion.g>

      <motion.g className="hero__graphic-reel hero__graphic-reel--right" variants={item}>
        <circle cx="180" cy="180" r="38" fill="none" stroke="var(--vhs-border)" strokeWidth="2" opacity="0.6" />
        <circle cx="180" cy="180" r="32" fill="none" stroke="var(--vhs-magenta)" strokeWidth="1.5" opacity="0.5" />
        <circle cx="180" cy="180" r="26" fill="none" stroke="url(#hero-reel)" strokeWidth="2" />
        <circle cx="180" cy="180" r="8" fill="var(--vhs-panel)" stroke="var(--vhs-cyan)" strokeWidth="1" opacity="0.6" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M 180 ${180 + 26 - i * 4} A 26 26 0 0 1 180 ${180 - 26 + i * 4}`} fill="none" stroke="var(--vhs-magenta)" strokeWidth="1" opacity={0.2 + i * 0.08} />
        ))}
      </motion.g>

      <motion.g
        variants={item}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M 128 158 L 128 202 L 162 180 Z" fill="var(--vhs-magenta)" opacity="0.9" />
        <path d="M 152 168 L 152 192 L 172 180 Z" fill="var(--vhs-cyan)" opacity="0.6" />
      </motion.g>

      <motion.rect x="56" y="130" width="24" height="100" rx="2" fill="var(--vhs-bg)" stroke="var(--vhs-border)" strokeWidth="1" opacity="0.5" variants={item} />
      <motion.rect x="200" y="130" width="24" height="100" rx="2" fill="var(--vhs-bg)" stroke="var(--vhs-border)" strokeWidth="1" opacity="0.5" variants={item} />

      <motion.text x="140" y="298" textAnchor="middle" className="hero__graphic-opportunities" fill="var(--vhs-magenta)" variants={item}>
        OPEN TO OPPORTUNITIES
      </motion.text>

      <motion.line x1="20" y1="308" x2="260" y2="308" stroke="var(--vhs-magenta)" strokeWidth="0.5" opacity="0.2" variants={item} />
      <motion.line x1="20" y1="326" x2="240" y2="326" stroke="var(--vhs-cyan)" strokeWidth="0.5" opacity="0.15" variants={item} />
      <motion.line x1="40" y1="344" x2="260" y2="344" stroke="var(--vhs-magenta)" strokeWidth="0.5" opacity="0.1" variants={item} />
    </motion.svg>
  );
}

/** Avatar with initials - replace src with your photo later */
export function Avatar({ initials = 'AD', src = null, className = '' }) {
  return (
    <motion.div
      className={`hero__avatar ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24, delay: 0.5 }}
    >
      {src ? (
        <img src={src} alt="" width={120} height={120} />
      ) : (
        <span className="hero__avatar-initials">{initials}</span>
      )}
    </motion.div>
  );
}
