import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiSmartphone, FiCpu, FiCode, FiLayers, FiDisc } from 'react-icons/fi';
import TrackingSweep from './TrackingSweep';
import SectionSweep from './SectionSweep';
import './Experience.css';

const ENTER_OFF = 0.11;  /* progress range per card on enter - larger = slower */
const EXIT_OFF = 0.14;   /* progress range per card on exit */
const EXIT_START = 0.42; /* when exit phase begins */

function ExpCard({ job, index, scrollYProgress, fromLeft }) {
  const Icon = job.icon;
  const enterStart = index * ENTER_OFF;
  const enterEnd = enterStart + ENTER_OFF;
  const exitStart = EXIT_START + index * EXIT_OFF;
  const exitEnd = exitStart + EXIT_OFF;
  const xIn = fromLeft ? -200 : 200;
  const xOut = fromLeft ? -380 : 380;

  const x = useTransform(
    scrollYProgress,
    [0, enterStart, enterEnd, exitStart, exitEnd],
    [xIn, xIn, 0, 0, xOut]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, enterStart, enterEnd, exitStart, exitEnd],
    [0, 0, 1, 1, 0]
  );

  return (
    <motion.div
      className={`exp__card exp__card--${fromLeft ? 'magenta' : 'cyan'}`}
      style={{ x, opacity }}
    >
      <div className="exp__tape-label" aria-hidden>
        <span className="exp__tape-time">00:02:{String(index).padStart(2, '0')}</span>
        <span className="exp__tape-dots" />
      </div>
      <div className="exp__head">
        <div className="exp__head-main">
          <span className="exp__icon" aria-hidden>
            {Icon ? <Icon /> : null}
          </span>
          <div>
            <h3 className="exp__company glitch">{job.company}</h3>
            <p className="exp__role">{job.role}</p>
          </div>
        </div>
        <span className="exp__period">{job.period}</span>
      </div>
      <ul className="exp__points">
        {job.points.map((p, j) => (
          <li key={j}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

const jobs = [
  {
    company: 'OFFLINE PROTOCOL',
    role: 'Full Stack Developer',
    period: '2024 — NOW',
    icon: FiSmartphone,
    points: [
      'Fernweh — P2P messaging on Bluetooth Mesh, 10K+ Android & 2K+ iOS in week one',
      'Full mobile stack: UI, networking, background services, E2E encryption',
      'V2: transport switching, audio/video calls, location sharing',
      'Offline Pay — crypto-backed offline payments, on-chain settlement',
    ],
  },
  {
    company: 'METAVERSE VENTURES',
    role: 'Blockchain Developer',
    period: '2024',
    icon: FiCpu,
    points: [
      'Secure OTC marketplace with smart contracts (+20% adoption)',
      '35% faster on-chain confirmation times',
    ],
  },
  {
    company: 'MEROKU DAO',
    role: 'SDE Intern',
    period: '2023',
    icon: FiCode,
    points: [
      'Modular SDK for Push Protocol, Transak, Huddle01 — 50% faster implementation',
      'Passkey-based identity — 60% faster auth, sub-30s recovery',
    ],
  },
  {
    company: 'BYTEKODE',
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
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const [inViewRef, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const setRefs = (el) => {
    sectionRef.current = el;
    inViewRef(el);
  };

  return (
    <section id="experience" className="section" ref={setRefs}>
      <SectionSweep />
      <div className="section__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.4 }}
        >
          <FiDisc className="section__label-icon" aria-hidden /> TRACK 02
        </motion.p>
        <motion.h2
          className="section__title glitch"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.08 }}
        >
          EXPERIENCE
        </motion.h2>

        <TrackingSweep>
        <div className="exp__list">
          {jobs.map((job, i) => (
            <ExpCard
              key={job.company}
              job={job}
              index={i}
              scrollYProgress={scrollYProgress}
              fromLeft={i % 2 === 0}
            />
          ))}
        </div>
        </TrackingSweep>
      </div>
    </section>
  );
}
