import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSmartphone, FiDollarSign, FiCpu, FiLock, FiUsers } from 'react-icons/fi';
import './Projects.css';

const projects = [
  { title: 'Fernweh', tags: 'Mobile · P2P', year: '24', desc: 'Offline messaging on Bluetooth Mesh. 10K+ Android, 2K+ iOS in week one. E2E encrypted, store-and-forward.', tech: ['React Native', 'Bluetooth Mesh', 'E2E'], link: null, icon: FiSmartphone },
  { title: 'Offline Pay', tags: 'Fintech', year: '24', desc: 'Crypto-backed offline payments. Stablecoins, Bluetooth-mesh propagation, on-chain settlement.', tech: ['Blockchain', 'Smart Contracts'], link: null, icon: FiDollarSign },
  { title: 'IntenSync', tags: 'AI · Web3', year: '23', desc: 'LLM → executable blockchain transactions. Gas estimations for EVM.', tech: ['LLM', 'Ethereum', 'React'], link: 'https://github.com/Ankush523/intensync', icon: FiCpu },
  { title: 'Shadow Pay', tags: 'Privacy', year: '23', desc: 'P2P platform with FIDO2 passkey & biometric. Transactions visible only to parties.', tech: ['FIDO2', 'WebAuthn'], link: 'https://shadow-pay.vercel.app', icon: FiLock },
  { title: 'Colab', tags: 'Web3', year: '23', desc: 'Developer collaboration — decentralized mail, real-time edit, NFT rewards.', tech: ['Filecoin', 'Huddle01', 'ENS'], link: 'https://colab-delta.vercel.app', icon: FiUsers },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="section__inner">
        <motion.p
          className="section__label"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Selected work
        </motion.p>
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 220, damping: 26, delay: 0.06 }}
        >
          <span className="section__title--gradient">Projects</span>
        </motion.h2>

        <div className="proj__grid">
          {projects.map((p, i) => {
            const ProjIcon = p.icon;
            return (
              <motion.div
                key={p.title}
                className={`proj__card card ${i === 1 ? 'card--featured' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.08 + i * 0.05 }}
              >
                <div className="proj__row">
                  <span className="proj__icon" aria-hidden>
                    <ProjIcon />
                  </span>
                  <div className="proj__meta">
                    <h3 className="proj__title">{p.title}</h3>
                    <span className="proj__tags">{p.tags}</span>
                  </div>
                  <span className="proj__year">{p.year}</span>
                </div>
                <div className="proj__detail">
                  <p className="proj__desc">{p.desc}</p>
                  <div className="proj__tech">
                    {p.tech.map((t) => (
                      <span key={t} className="proj__chip">{t}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj__link"
                      aria-label={`View ${p.title} (opens in new tab)`}
                    >
                      View project →
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
