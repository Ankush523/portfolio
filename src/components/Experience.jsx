import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSmartphone, FiCpu, FiCode, FiLayers } from 'react-icons/fi';
import './Experience.css';

const JOBS = [
  {
    company: 'Offline Protocol',
    role: 'Full Stack Developer',
    period: '2024 — Now',
    icon: FiSmartphone,
    points: [
      'Fernweh — P2P messaging on Bluetooth Mesh, 10K+ Android & 2K+ iOS in week one',
      'Full mobile stack: UI, networking, background services, E2E encryption',
      'V2: transport switching, audio/video calls, location sharing',
      'Offline Pay — crypto-backed offline payments, on-chain settlement',
    ],
  },
  {
    company: 'Metaverse Ventures',
    role: 'Blockchain Developer',
    period: '2024',
    icon: FiCpu,
    points: [
      'Secure OTC marketplace with smart contracts (+20% adoption)',
      '35% faster on-chain confirmation times',
    ],
  },
  {
    company: 'Meroku DAO',
    role: 'SDE Intern',
    period: '2023',
    icon: FiCode,
    points: [
      'Modular SDK for Push Protocol, Transak, Huddle01 — 50% faster implementation',
      'Passkey-based identity — 60% faster auth, sub-30s recovery',
    ],
  },
  {
    company: 'Bytekode',
    role: 'Full Stack Developer',
    period: '2023',
    icon: FiLayers,
    points: [
      'Cross-chain Telegram notifications — sub-5s latency, 6 networks',
      'Metamask Snaps — 40% fewer support requests',
      'vybe.gg gaming platform — Web3 wallet + NFT',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const sectionTop = rect.top;
      const sectionH = rect.height;
      if (sectionH <= viewportH) {
        setScrollProgress(sectionTop <= 0 ? 1 : 0);
        return;
      }
      const scrollable = sectionH - viewportH;
      const scrolled = -sectionTop;
      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      setScrollProgress(p);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    const raf = requestAnimationFrame(() => onScroll());
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const setRefs = (node) => {
    sectionRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  return (
    <section id="experience" className="section exp" ref={setRefs}>
      <div className="exp__line" aria-hidden />
      <div className="section__inner exp__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Where I've built
        </motion.p>
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.06 }}
        >
          <span className="section__title--gradient">Experience</span>
        </motion.h2>

        <div className="exp__sections">
          {/* Scroll tracker in the middle */}
          <div className="exp__track-wrap" aria-hidden>
            <div className="exp__track">
              <motion.div
                className="exp__track-fill"
                style={{ height: `${scrollProgress * 100}%` }}
                transition={{ type: 'spring', stiffness: 100, damping: 30 }}
              />
            </div>
          </div>

          {JOBS.map((job, i) => {
            const Icon = job.icon;
            const num = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={job.company}
                className="exp__block"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.1 + i * 0.08 }}
              >
                <div className="exp__left">
                  <span className="exp__num" aria-hidden>
                    <span className="exp__num-inner">{num}</span>
                  </span>
                  <h3 className="exp__step-title">{job.company}</h3>
                </div>
                <div className="exp__right">
                  <div className="exp__card">
                    <div className="exp__head">
                      <span className="exp__icon" aria-hidden>
                        <Icon />
                      </span>
                      <div className="exp__head-text">
                        <p className="exp__role">{job.role}</p>
                      </div>
                      <span className="exp__period">{job.period}</span>
                    </div>
                    <ul className="exp__points">
                      {job.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
