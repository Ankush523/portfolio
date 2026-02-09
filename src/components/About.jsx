import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FiUsers, FiBriefcase, FiAward, FiTarget, FiDisc } from 'react-icons/fi';
import VHSFrame from './VHSFrame';
import TrackingSweep from './TrackingSweep';
import SectionSweep from './SectionSweep';
import { Avatar } from './HeroVisual';
import './About.css';

function Counter({ to, suffix = '' }) {
  const v = useMotionValue(0);
  const display = useTransform(v, (n) =>
    (Number.isInteger(to) ? Math.round(n) : n.toFixed(2)) + suffix
  );
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  useEffect(() => {
    if (inView) animate(v, to, { duration: 2, ease: 'easeOut' });
  }, [inView, v, to]);
  return <motion.span ref={ref} className="about__num">{display}</motion.span>;
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const stats = [
    { to: 12, suffix: 'K+', label: 'USERS WEEK 1', Icon: FiUsers },
    { to: 4, suffix: '', label: 'COMPANIES', Icon: FiBriefcase },
    { to: 9.66, suffix: '', label: 'CGPA', Icon: FiAward },
    { to: 3, suffix: '', label: 'HACKATHONS', Icon: FiTarget },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      <SectionSweep />
      <div className="section__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        >
          <FiDisc className="section__label-icon" aria-hidden /> TRACK 01
        </motion.p>
        <motion.h2
          className="section__title glitch"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.06 }}
        >
          ABOUT
        </motion.h2>

        <TrackingSweep>
        <VHSFrame time="00:01:24">
          <div className="about__player">
            <div className="about__player-top" aria-hidden>
              <span className="about__player-btn" />
              <span className="about__player-btn" />
              <span className="about__player-btn" />
              <span className="about__player-btn" />
              <span className="about__player-slit" />
            </div>
            <div className="about__compartment">
              <div className="about__tape-notches" aria-hidden>
                <span className="about__notch about__notch--circle" />
                <span className="about__notch about__notch--circle" />
                <span className="about__notch about__notch--slot" />
                <span className="about__notch about__notch--slot" />
              </div>
              <div className="about__tape-body">
                <div className="about__reel about__reel--l" aria-hidden>
                  <span className="about__reel-ring" />
                  <span className="about__reel-ring" />
                  <span className="about__reel-hub" />
                </div>
                <div className="about__label-window">
          <div className="about__intro">
            <motion.div
              className="about__avatar-wrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.12 }}
            >
              <Avatar initials="AD" className="about__avatar" />
            </motion.div>
            <motion.p
              className="about__lead"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 220, damping: 28, delay: 0.15 }}
            >
              I build systems that work in the hardest conditions — no internet, no problem.
            </motion.p>
          </div>
          <motion.div
            className="about__cols"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <motion.p
              className="about__p"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.3 }}
            >
              At <span className="about__hi">Offline Protocol</span> I built a P2P messaging app that hit 12,000+ users in a week on Bluetooth Mesh. I architect full mobile stacks: networking, E2E encryption, local persistence, secure peer discovery.
            </motion.p>
            <motion.p
              className="about__p"
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.38 }}
            >
              Before that: cross-chain notification systems, decentralized identity SDKs, smart contract marketplaces. Graduated <span className="about__hi">SRM IST</span> with 9.66 CGPA (AI/ML). Won <span className="about__hi">ETHIndia</span> & <span className="about__hi">ETHforAll</span>.
            </motion.p>
          </motion.div>
          <motion.div
            className="about__stats"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {stats.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={i}
                  className="about__stat"
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ type: 'spring', stiffness: 240, damping: 28, delay: 0.4 + i * 0.08 }}
                >
                  <span className="about__stat-icon" aria-hidden>
                    <Icon />
                  </span>
                  <Counter to={s.to} suffix={s.suffix} />
                  <span>{s.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
                </div>
                <div className="about__reel about__reel--r" aria-hidden>
                  <span className="about__reel-ring" />
                  <span className="about__reel-ring" />
                  <span className="about__reel-hub" />
                </div>
              </div>
            </div>
            <div className="about__player-bottom" aria-hidden>
              <span className="about__player-seg" />
              <span className="about__player-seg" />
              <span className="about__player-seg" />
              <span className="about__player-seg" />
              <span className="about__player-seg" />
            </div>
          </div>
        </VHSFrame>
        </TrackingSweep>
      </div>
    </section>
  );
}
