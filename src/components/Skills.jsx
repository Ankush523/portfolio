import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayout, FiServer, FiDatabase, FiZap, FiRadio, FiDisc } from 'react-icons/fi';
import VHSFrame from './VHSFrame';
import TrackingSweep from './TrackingSweep';
import SectionSweep from './SectionSweep';
import './Skills.css';

const groups = [
  { title: 'LANGUAGES', items: ['JavaScript', 'TypeScript', 'Python', 'Solidity', 'C++', 'Java'], icon: FiCode },
  { title: 'FRONTEND', items: ['React', 'Next.js', 'React Native', 'HTML/CSS'], icon: FiLayout },
  { title: 'BACKEND', items: ['Node.js', 'Express', 'NestJS', 'GraphQL'], icon: FiServer },
  { title: 'DATA', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'], icon: FiDatabase },
  { title: 'BLOCKCHAIN', items: ['Smart Contracts', 'Ethereum', 'Web3.js', 'IPFS'], icon: FiZap },
  { title: 'SPECIAL', items: ['Bluetooth Mesh', 'P2P', 'E2E Encryption', 'Offline-First'], icon: FiRadio },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section" ref={ref}>
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
            {groups.map((g, gi) => {
              const GroupIcon = g.icon;
              return (
              <motion.div
                key={g.title}
                className="skills__group"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 28,
                  delay: 0.1 + gi * 0.05,
                }}
              >
                <h3 className="skills__group-title">
                  {GroupIcon ? <GroupIcon className="skills__group-icon" aria-hidden /> : null}
                  {g.title}
                </h3>
                <div className="skills__pills">
                  {g.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      className="skills__pill glitch"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        type: 'spring',
                        stiffness: 280,
                        damping: 26,
                        delay: 0.15 + gi * 0.05 + ii * 0.02,
                      }}
                      whileHover={{ scale: 1.03, borderColor: 'rgba(255, 0, 255, 0.5)', color: 'var(--vhs-magenta)' }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              );
            })}
          </div>
        </VHSFrame>
        </TrackingSweep>
      </div>
    </section>
  );
}
