import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import { FiSmartphone, FiCpu, FiCode, FiLayers } from 'react-icons/fi';

const jobs = [
  {
    company: 'Offline Protocol',
    role: 'Full Stack Developer',
    location: 'Remote',
    date: '2024 — Now',
    icon: FiSmartphone,
    sections: [
      {
        title: 'P2P Messaging',
        points: [
          'Fernweh — Bluetooth Mesh messaging, 10K+ Android & 2K+ iOS in week one',
          'Full mobile stack: UI, networking, E2E encryption, cross-platform parity',
          'V2: transport switching, audio/video calls, location sharing',
        ],
      },
      {
        title: 'Offline Payments',
        points: [
          'Crypto-backed offline payments with on-chain settlement',
          'Stablecoin deposits, mesh propagation, reconciliation flows',
        ],
      },
    ],
  },
  {
    company: 'Metaverse Ventures',
    role: 'Blockchain Developer',
    location: 'Remote',
    date: '2024',
    icon: FiCpu,
    sections: [
      {
        title: 'Smart Contracts',
        points: [
          'OTC marketplace (+20% adoption), 35% faster confirmations',
        ],
      },
    ],
  },
  {
    company: 'Meroku DAO',
    role: 'SDE Intern',
    location: 'Remote',
    date: '2023',
    icon: FiCode,
    sections: [
      {
        title: 'Identity SDK',
        points: [
          'Modular SDK — 50% faster third-party integration',
          'Passkey identity — 60% faster auth, sub-30s recovery',
        ],
      },
    ],
  },
  {
    company: 'Bytekode',
    role: 'Full Stack Developer',
    location: 'Remote',
    date: '2023',
    icon: FiLayers,
    sections: [
      {
        title: 'Web3 Infrastructure',
        points: [
          'Cross-chain Telegram notifications — sub-5s, 6 networks',
          'Metamask Snaps — 40% fewer support requests',
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
