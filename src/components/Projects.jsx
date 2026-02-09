import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSmartphone, FiDollarSign, FiCpu, FiLock, FiUsers, FiDisc } from 'react-icons/fi';
import VHSFrame from './VHSFrame';
import TrackingSweep from './TrackingSweep';
import SectionSweep from './SectionSweep';
import './Projects.css';

const projects = [
  { title: 'FERNWEH', tags: 'MOBILE · P2P', year: '24', desc: 'Offline messaging on Bluetooth Mesh. 10K+ Android, 2K+ iOS in week one. E2E encrypted, store-and-forward.', tech: ['React Native', 'Bluetooth Mesh', 'E2E'], link: null, icon: FiSmartphone },
  { title: 'OFFLINE PAY', tags: 'FIN TECH', year: '24', desc: 'Crypto-backed offline payments. Stablecoins, Bluetooth-mesh propagation, on-chain settlement.', tech: ['Blockchain', 'Smart Contracts'], link: null, icon: FiDollarSign },
  { title: 'INTENSYNC', tags: 'AI · WEB3', year: '23', desc: 'LLM → executable blockchain transactions. Gas estimations for EVM.', tech: ['LLM', 'Ethereum', 'React'], link: 'https://github.com/Ankush523/intensync', icon: FiCpu },
  { title: 'SHADOW PAY', tags: 'PRIVACY', year: '23', desc: 'P2P platform with FIDO2 passkey & biometric. Transactions visible only to parties.', tech: ['FIDO2', 'WebAuthn'], link: 'https://shadow-pay.vercel.app', icon: FiLock },
  { title: 'COLAB', tags: 'WEB3', year: '23', desc: 'Developer collaboration — decentralized mail, real-time edit, NFT rewards.', tech: ['Filecoin', 'Huddle01', 'ENS'], link: 'https://colab-delta.vercel.app', icon: FiUsers },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [open, setOpen] = useState(null);

  return (
    <section id="projects" className="section" ref={ref}>
      <SectionSweep />
      <div className="section__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <FiDisc className="section__label-icon" aria-hidden /> TRACK 03
        </motion.p>
        <motion.h2
          className="section__title glitch"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.08 }}
        >
          PROJECTS
        </motion.h2>

        <TrackingSweep>
        <div className="proj__list">
          {projects.map((p, i) => {
            const ProjIcon = p.icon;
            return (
            <motion.div
              key={p.title}
              className={`proj__card ${open === i ? 'proj__card--open' : ''}`}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 26,
                delay: 0.1 + i * 0.06,
              }}
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
            >
              <VHSFrame time={`00:03:${String(i).padStart(2, '0')}`}>
                <div className="proj__row">
                  <span className="proj__icon" aria-hidden>
                    {ProjIcon ? <ProjIcon /> : null}
                  </span>
                  <span className="proj__num">0{i + 1}</span>
                  <h3 className="proj__title glitch">{p.title}</h3>
                  <span className="proj__tags">{p.tags}</span>
                  <span className="proj__year">{p.year}</span>
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      className="proj__detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                      <p className="proj__desc">{p.desc}</p>
                      <div className="proj__tech">
                        {p.tech.map((t) => (
                          <span key={t} className="proj__chip">{t}</span>
                        ))}
                      </div>
                      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj__link" aria-label={`View ${p.title} (opens in new tab)`}>VIEW →</a>}
                    </motion.div>
                  )}
                </AnimatePresence>
              </VHSFrame>
            </motion.div>
            );
          })}
        </div>
        </TrackingSweep>
      </div>
    </section>
  );
}
