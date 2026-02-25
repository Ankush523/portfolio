import { useState, useEffect, useRef } from 'react';
import { useId } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars -- used as motion.p, motion.h2, motion.div
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayout, FiServer, FiDatabase, FiZap, FiRadio } from 'react-icons/fi';
import SkillsVortex from './SkillsVortex';
import './Skills.css';

const groups = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Solidity', 'C++', 'Java'], icon: FiCode },
  { title: 'Frontend', items: ['React', 'Next.js', 'React Native', 'HTML/CSS'], icon: FiLayout },
  { title: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'GraphQL'], icon: FiServer },
  { title: 'Data', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'], icon: FiDatabase },
  { title: 'Blockchain', items: ['Smart Contracts', 'Ethereum', 'Web3.js', 'IPFS'], icon: FiZap },
  { title: 'Special', items: ['Bluetooth Mesh', 'P2P', 'E2E Encryption', 'Offline-First'], icon: FiRadio },
];

const RADIUS = 300; // distance from center to each card (px)
// One angle per card (degrees, 0 = top/12 o'clock). Order matches groups: [Languages, Frontend, Backend, Data, Blockchain, Special]
const CARD_ANGLES = [10, 80, 125, 195, 255, 300]; // uneven spacing
const CARD_ANGLE_OFFSET = 0; // rotate entire ring (added to every card)
const SEGMENT_FRACTION = 0.05; // 5% of circle

function getLayoutByViewport(width) {
  if (width <= 340) return { cardRadius: 120, orbitRadius: 72, cardScale: 0.62 };
  if (width <= 380) return { cardRadius: 130, orbitRadius: 78, cardScale: 0.68 };
  if (width <= 500) return { cardRadius: 145, orbitRadius: 86, cardScale: 0.74 };
  if (width <= 700) return { cardRadius: 170, orbitRadius: 98, cardScale: 0.82 };
  return { cardRadius: RADIUS, orbitRadius: 150, cardScale: 1 };
}

function getActiveIndex(normalizedAngle) {
  const base = (normalizedAngle - CARD_ANGLE_OFFSET + 360) % 360;
  let best = 0;
  let bestD = 360;
  CARD_ANGLES.forEach((a, i) => {
    const cardPos = (a + 360) % 360;
    let d = Math.abs(base - cardPos);
    if (d > 180) d = 360 - d;
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  });
  return best;
}

export default function Skills() {
  const gradientId = useId().replace(/:/g, '-');
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [angle, setAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const { cardRadius, orbitRadius, cardScale } = getLayoutByViewport(viewportWidth);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const duration = 18000; // full rotation in ms
    const start = () => {
      const step = (t) => {
        if (lastRef.current == null) lastRef.current = t;
        const delta = t - lastRef.current;
        lastRef.current = t;
        setAngle((a) => {
          const next = a + (360 * delta) / duration;
          const normalized = next >= 360 ? next % 360 : next;
          setActiveIndex(getActiveIndex(normalized));
          return normalized;
        });
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };
    start();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastRef.current = null;
    };
  }, []);

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="section__inner skills__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          What I use
        </motion.p>
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.06 }}
        >
          <span className="section__title--gradient">Skills</span>
        </motion.h2>
        <motion.p
          className="skills__tagline"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          Tools & tech I ship with — always evolving.
        </motion.p>

        <div className="skills__stage">
          {/* Decorative floating orbs */}
          <div className="skills__orb skills__orb--1" aria-hidden />
          <div className="skills__orb skills__orb--2" aria-hidden />
          <div className="skills__orb skills__orb--3" aria-hidden />
        <div className="skills__system-box">
          <div className="skills__orbit-wrap">
            {/* Black hole vortex inside the orbit (teal & green) */}
            <div className="skills__vortex-wrap" aria-hidden>
              <SkillsVortex />
            </div>
            {/* Circle + small gradient segment on it (tracker), same stroke size */}
            <div className="skills__orbit" aria-hidden>
            <svg className="skills__orbit-svg" viewBox="0 0 400 400">
              <defs>
                <linearGradient
                  id={`${gradientId}-tracker-gradient`}
                  gradientUnits="userSpaceOnUse"
                  x1={200 + orbitRadius * Math.cos(((angle + CARD_ANGLE_OFFSET - 90) * Math.PI) / 180)}
                  y1={200 + orbitRadius * Math.sin(((angle + CARD_ANGLE_OFFSET - 90) * Math.PI) / 180)}
                  x2={200 + orbitRadius * Math.cos(((angle + CARD_ANGLE_OFFSET - 90 + SEGMENT_FRACTION * 360) * Math.PI) / 180)}
                  y2={200 + orbitRadius * Math.sin(((angle + CARD_ANGLE_OFFSET - 90 + SEGMENT_FRACTION * 360) * Math.PI) / 180)}
                >
                  <stop offset="0%" stopColor="rgba(20, 184, 166, 0)" />
                  <stop offset="60%" stopColor="rgba(20, 184, 166, 0.25)" />
                  <stop offset="80%" stopColor="rgb(16, 232, 207)" />
                  <stop offset="100%" stopColor="var(--teal)" />
                </linearGradient>
                </defs>
              <circle
                cx="200"
                cy="200"
                r={orbitRadius}
                fill="none"
                stroke="rgba(20, 184, 165, 0.3)"
                strokeWidth="1.5"
              />
              {/* Decorative dashed outer ring */}
              <circle
                cx="200"
                cy="200"
                r={orbitRadius + 24}
                fill="none"
                stroke="rgba(20, 184, 166, 0.12)"
                strokeWidth="1"
                strokeDasharray="6 10"
                className="skills__orbit-dashed"
              />
              <circle
                className="skills__tracker-segment"
                cx="200"
                cy="200"
                r={orbitRadius}
                fill="none"
                stroke={`url(#${gradientId}-tracker-gradient)`}
                strokeWidth="1.5"
                strokeLinecap="butt"
                strokeDasharray={`${(2 * Math.PI * orbitRadius * SEGMENT_FRACTION).toFixed(1)} ${(2 * Math.PI * orbitRadius * (1 - SEGMENT_FRACTION)).toFixed(1)}`}
                strokeDashoffset={-(((angle + CARD_ANGLE_OFFSET - 90) / 360) * 2 * Math.PI * orbitRadius)}
              />
            </svg>
          </div>

          {/* Skill cards: only current and previous visible (2 at a time); previous-to-previous fades out */}
          {groups.map((g, i) => {
            const Icon = g.icon;
            const prevIndex = (activeIndex - 1 + groups.length) % groups.length;
            const isActive = activeIndex === i;
            const isPrevious = prevIndex === i;
            const cardAngle = CARD_ANGLE_OFFSET + CARD_ANGLES[i];
            return (
              <div
                key={g.title}
                className="skills__card-slot"
                style={{
                  transform: `translate(-50%, -50%) rotate(${cardAngle}deg) translateY(-${cardRadius}px)`,
                }}
              >
                <motion.div
                  className={`skills__card ${isActive ? 'skills__card--active' : ''}`}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : isPrevious ? 0.55 : 0,
                    scale: isActive ? cardScale : isPrevious ? cardScale * 0.92 : cardScale * 0.84,
                    rotate: -cardAngle,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <div className="skills__head">
                    <span className="skills__icon" aria-hidden>
                      <Icon />
                    </span>
                    <h3 className="skills__title">{g.title}</h3>
                  </div>
                  <div className="skills__pills">
                    {g.items.map((item) => (
                      <span key={item} className="skills__pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
