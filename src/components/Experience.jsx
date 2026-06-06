import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import { FiSmartphone, FiCpu, FiCode, FiLayers } from 'react-icons/fi';

const jobs = [
  {
    company: 'Offline Protocol',
    role: 'Full Stack Developer',
    location: 'Remote',
    date: 'Jun 2024 — Present',
    icon: FiSmartphone,
    sections: [
      {
        title: 'P2P Messaging',
        points: [
          'Fernweh V1 — Bluetooth Mesh messaging, 10K+ Android & 2K+ iOS in week one',
          'Leading Fernweh V2 with 2 engineers: transport switching, A/V calls, location sharing',
          'Full mobile stack: UI, networking, E2E encryption, peer discovery, cross-platform parity',
        ],
      },
      {
        title: 'Offline Payments',
        points: [
          'Offline Pay (beta) — stablecoin deposits, mesh propagation, on-chain settlement',
          'Transferable payment tokens with reconciliation flows',
        ],
      },
    ],
  },
  {
    company: 'Metaverse Ventures',
    role: 'Full Stack Blockchain Developer Intern',
    location: 'Remote',
    date: 'Jan 2024 — Feb 2024',
    icon: FiCpu,
    sections: [
      {
        title: 'Smart Contracts',
        points: [
          'Secure OTC marketplace with smart contract integration (+20% adoption)',
          'Optimized on-chain transactions — 35% faster confirmations',
        ],
      },
    ],
  },
  {
    company: 'Meroku DAO',
    role: 'SDE Intern',
    location: 'Remote',
    date: 'Sept 2023 — Dec 2023',
    icon: FiCode,
    sections: [
      {
        title: 'dApp SDK',
        points: [
          'Modular SDK for Push Protocol, Transak & Huddle01 — 50% faster integration',
          'Passkey identity system — 60% faster auth, sub-30s recovery',
        ],
      },
    ],
  },
  {
    company: 'Bytekode',
    role: 'Full Stack Developer',
    location: 'Remote',
    date: 'Mar 2023 — Aug 2023',
    icon: FiLayers,
    sections: [
      {
        title: 'Web3 Infrastructure',
        points: [
          'Cross-chain Telegram notifications — sub-5s latency across 6 networks',
          'Metamask Snaps integration — 40% fewer support requests',
          'vybe.gg — Web3 wallet + NFT gaming platform',
        ],
      },
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <SectionTitle index="03">Experience</SectionTitle>

        <div className="timeline">
          {jobs.map((job, i) => {
            const Icon = job.icon;
            return (
              <article key={job.company} className="timeline__item">
                <div className="timeline__rail" aria-hidden>
                  <span className="timeline__dot" />
                  {i < jobs.length - 1 && <span className="timeline__line" />}
                </div>
                <div className="timeline__body">
                  <div className="exp-header">
                    <div>
                      <h3>{job.company}</h3>
                      <p className="role">{job.role}</p>
                    </div>
                    <div className="exp-meta">
                      <span className="location">{job.location}</span>
                      <span className="date">{job.date}</span>
                    </div>
                  </div>
                  {job.sections.map((section) => (
                    <div key={section.title} className="exp-section">
                      <h4>
                        <Icon aria-hidden />
                        {section.title}
                      </h4>
                      <ul>
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
