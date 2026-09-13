import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import { FiSmartphone, FiCode, FiLayers } from 'react-icons/fi';

const jobs = [
  {
    company: 'Offline Protocol',
    role: 'Software Development Engineer (SDE)',
    location: 'Remote',
    date: 'Jun 2024 — Aug 2026',
    icon: FiSmartphone,
    sections: [
      {
        title: 'Fernweh · Production Mobile',
        points: [
          'Shipped Fernweh — Bluetooth mesh + internet fallback messaging; 10K+ Android & 2K+ iOS in week one',
          'Owned CI/CD and Jest test gates for iOS/Android App Store and Google Play releases',
          'Led Fernweh V2 with 2 engineers: transport failover, encrypted A/V calls, location sharing',
          'Full mobile stack: UI, networking, SQLite, peer discovery, identity, E2E encryption',
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
          'Modular SDK integrating Push Protocol, Transak & Huddle01 — 50% faster partner integration',
          'Passkey-based authentication with sub-30s account recovery across onboarding flows',
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
          'Cross-chain Telegram notifications — sub-5s latency across 6 blockchain networks',
          'Docker-containerized backend services with AWS DynamoDB for high-volume transaction metadata',
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
