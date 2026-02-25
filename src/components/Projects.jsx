import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSmartphone, FiDollarSign, FiCpu, FiLock, FiUsers } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'Fernweh',
    tags: 'Mobile · P2P',
    year: '24',
    desc: 'Offline-first messaging app built on Bluetooth Mesh networking. Shipped V1 with production-ready P2P messaging and store-and-forward mesh routing, scaling to 10K+ Android and 2K+ iOS users within one week of launch. Architected the full mobile stack: UI systems, networking layers, background services, local persistence, cross-platform parity, secure peer discovery, identity management, and E2E encrypted messaging. V2 (in progress) adds dynamic transport switching (internet/Bluetooth fallback), audio/video calls, and location sharing.',
    tech: ['React Native', 'Bluetooth Mesh', 'E2E Encryption'],
    link: null,
    icon: FiSmartphone,
  },
  {
    title: 'Offline Pay',
    tags: 'Fintech · Web3',
    year: '24',
    desc: 'Crypto-backed offline payment app enabling transactions without connectivity. Designed stablecoin deposits, transferable payment tokens, and Bluetooth-mesh propagation so payments can propagate through the mesh when devices are offline. Built reconciliation flows and on-chain settlement so that once connectivity returns, balances sync and settle securely on-chain. Part of the same offline-protocol stack as Fernweh, focused on confidential yet verifiable payments in low-connectivity scenarios.',
    tech: ['Blockchain', 'Smart Contracts', 'Bluetooth Mesh'],
    link: null,
    icon: FiDollarSign,
  },
  {
    title: 'IntenSync',
    tags: 'AI · Web3',
    year: '23',
    desc: 'LLM-powered platform that translates natural language into executable blockchain transactions. Automatically generates optimized transaction objects with gas estimations for the Ethereum Virtual Machine, eliminating technical barriers with an intuitive interface that requires zero blockchain knowledge. Reduces onboarding friction for non-technical users who want to interact with smart contracts without writing code or understanding gas, ABI, or encoding.',
    tech: ['LLM', 'Ethereum', 'React', 'EVM'],
    link: 'https://github.com/Ankush523/intensync',
    icon: FiCpu,
  },
  {
    title: 'Shadow Pay',
    tags: 'Privacy · P2P',
    year: '23',
    desc: 'Privacy-focused P2P transaction platform with FIDO2-compliant passkey and biometric verification. Ensures transaction visibility only to the involved parties and enables confidential yet verifiable payments between anonymous users. Built to give users full control over who sees their payment data while still allowing audit and verification where needed.',
    tech: ['FIDO2', 'WebAuthn', 'Biometrics'],
    link: 'https://shadow-pay.vercel.app',
    icon: FiLock,
  },
  {
    title: 'Colab',
    tags: 'Web3 · Collaboration',
    year: '23',
    desc: 'Collaborative platform connecting developers to solve coding challenges using decentralized infrastructure. Integrates Filecoin, Huddle01, and ENS to provide decentralized encrypted mailing, real-time code editing, and personalized meeting rooms. Successful issue resolvers are rewarded via NFT minting, creating a verifiable record of contributions. Built for remote, trust-minimized collaboration with on-chain credentials.',
    tech: ['Filecoin', 'Huddle01', 'ENS', 'NFT'],
    link: 'https://colab-delta.vercel.app',
    icon: FiUsers,
  },
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
