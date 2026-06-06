import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Velto',
    event: 'Personal',
    date: '2025',
    tech: 'FastAPI · Playwright · React · Ollama',
    desc: 'Local job agent: 24/7 board monitoring, LLM match scoring, résumé tailoring, and Playwright auto-apply.',
    award: 'Full Stack',
    link: 'https://github.com/Ankush523/job_applyer',
  },
  {
    title: 'Fernweh',
    event: 'Offline Protocol',
    date: '2024',
    tech: 'React Native · Bluetooth Mesh · E2E',
    desc: 'Offline P2P messaging. 12K+ users week one.',
    award: '12K+ Users',
    link: null,
  },
  {
    title: 'IntenSync',
    event: 'ETHIndia',
    date: '2023',
    tech: 'LLM · Ethereum · React',
    desc: 'NL to blockchain transactions with gas estimation.',
    award: 'Winner',
    link: 'https://github.com/Ankush523/intensync',
  },
  {
    title: 'Shadow Pay',
    event: 'ETHforAll',
    date: '2023',
    tech: 'FIDO2 · WebAuthn · P2P',
    desc: 'Privacy-first P2P with passkey verification.',
    award: 'Winner',
    link: 'https://shadow-pay.vercel.app',
  },
  {
    title: 'Colab',
    event: 'Hackathon',
    date: '2023',
    tech: 'Filecoin · Huddle01 · ENS',
    desc: 'Decentralized dev collaboration with NFT rewards.',
    award: null,
    link: 'https://colab-delta.vercel.app',
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <SectionTitle index="05">Projects</SectionTitle>

        <div className="projects-list">
          {projects.map((project, i) => (
            <article key={project.title} className="project-row">
              <span className="project-row__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="project-row__main">
                <div className="project-row__head">
                  <h4>
                    {project.title}
                    <span className="project-row__event">@{project.event}</span>
                  </h4>
                  <span className="project-date">{project.date}</span>
                </div>
                <p className="project-tech">{project.tech}</p>
                <p className="project-row__desc">{project.desc}</p>
                <div className="project-row__foot">
                  {project.award && <span className="award-badge">{project.award}</span>}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
