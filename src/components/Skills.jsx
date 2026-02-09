import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayout, FiServer, FiDatabase, FiZap, FiRadio, FiDisc } from 'react-icons/fi';
import VHSFrame from './VHSFrame';
import TrackingSweep from './TrackingSweep';
import SectionSweep from './SectionSweep';
import './Skills.css';

/* One-by-one: each card gets a clear scroll band to pop in from bottom */
const ENTER_OFF = 0.07;   /* 6 cards × 0.07 ≈ 0.42 = full enter phase */
const EXIT_OFF = 0.08;   /* 6 cards × 0.08 ≈ 0.48 = full exit phase */
const EXIT_START = 0.52;
/* Large motion: rise from below the fold and land in place */
const Y_IN = 200;
const Y_OUT = 180;

function SkillCassette({ g, gi, scrollYProgress }) {
  const GroupIcon = g.icon;
  const enterStart = gi * ENTER_OFF;
  const enterEnd = enterStart + ENTER_OFF;
  const exitStart = EXIT_START + gi * EXIT_OFF;
  const exitEnd = exitStart + EXIT_OFF;

  const y = useTransform(
    scrollYProgress,
    [0, enterStart, enterEnd, exitStart, exitEnd],
    [Y_IN, Y_IN, 0, 0, Y_OUT]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, enterStart, enterEnd, exitStart, exitEnd],
    [0, 0, 1, 1, 0]
  );

  return (
    <motion.div
      className={`skills__group skills__cassette skills__cassette--${gi % 2 === 0 ? 'magenta' : 'cyan'}`}
      style={{ y, opacity }}
    >
      <div className="skills__tape-top" aria-hidden>
        <span className="skills__side-label">{gi % 2 === 0 ? 'A' : 'B'}</span>
        <span className="skills__notch skills__notch--circle" />
        <span className="skills__notch skills__notch--circle" />
        <span className="skills__notch skills__notch--slot" />
        <span className="skills__notch skills__notch--slot" />
      </div>
      <div className="skills__tape-body">
        <span className="skills__reel skills__reel--l" aria-hidden />
        <div className="skills__label-window">
          <h3 className="skills__group-title">
            {GroupIcon ? <GroupIcon className="skills__group-icon" aria-hidden /> : null}
            {g.title}
          </h3>
          <div className="skills__pills">
            {g.items.map((item, ii) => (
              <motion.span
                key={item}
                className="skills__pill glitch"
                whileHover={{ scale: 1.02 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
        <span className="skills__reel skills__reel--r" aria-hidden />
      </div>
    </motion.div>
  );
}

const groups = [
  { title: 'LANGUAGES', items: ['JavaScript', 'TypeScript', 'Python', 'Solidity', 'C++', 'Java'], icon: FiCode },
  { title: 'FRONTEND', items: ['React', 'Next.js', 'React Native', 'HTML/CSS'], icon: FiLayout },
  { title: 'BACKEND', items: ['Node.js', 'Express', 'NestJS', 'GraphQL'], icon: FiServer },
  { title: 'DATA', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'], icon: FiDatabase },
  { title: 'BLOCKCHAIN', items: ['Smart Contracts', 'Ethereum', 'Web3.js', 'IPFS'], icon: FiZap },
  { title: 'SPECIAL', items: ['Bluetooth Mesh', 'P2P', 'E2E Encryption', 'Offline-First'], icon: FiRadio },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const [inViewRef, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const setRefs = (el) => {
    sectionRef.current = el;
    inViewRef(el);
  };

  return (
    <section id="skills" className="section" ref={setRefs}>
      <SectionSweep />
      <div className="section__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <FiDisc className="section__label-icon" aria-hidden /> TRACK 04
        </motion.p>
        <motion.h2
          className="section__title glitch"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.08 }}
        >
          SKILLS
        </motion.h2>

        <TrackingSweep>
        <VHSFrame time="00:04:00">
          <div className="skills__grid">
            {groups.map((g, gi) => (
              <SkillCassette key={g.title} g={g} gi={gi} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </VHSFrame>
        </TrackingSweep>
      </div>
    </section>
  );
}
