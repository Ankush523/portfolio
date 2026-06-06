import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'Velto',
    event: 'Personal',
    date: '2025',
    tech: ['FastAPI', 'Playwright', 'React', 'Ollama'],
    desc: 'Local job agent: 24/7 board monitoring, LLM match scoring, résumé tailoring, and Playwright auto-apply.',
    award: 'Full Stack',
    link: 'https://github.com/Ankush523/job_applyer',
    featured: true,
  },
  {
    title: 'Fernweh',
    event: 'Offline Protocol',
    date: '2024',
    tech: ['React Native', 'Bluetooth Mesh', 'E2E'],
    desc: 'Offline P2P messaging. 12K+ users week one.',
    award: '12K+ Users',
    link: null,
  },
  {
    title: 'IntenSync',
    event: 'ETHIndia',
    date: '2023',
    tech: ['LLM', 'Ethereum', 'React'],
    desc: 'NL to blockchain transactions with gas estimation.',
    award: 'Winner',
    link: 'https://github.com/Ankush523/intensync',
  },
  {
    title: 'Shadow Pay',
    event: 'ETHforAll',
    date: '2023',
    tech: ['FIDO2', 'WebAuthn', 'P2P'],
    desc: 'Privacy-first P2P with passkey verification.',
    award: 'Winner',
    link: 'https://shadow-pay.vercel.app',
  },
  {
    title: 'Colab',
    event: 'Hackathon',
    date: '2023',
    tech: ['Filecoin', 'Huddle01', 'ENS'],
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

        <p className="projects__lead">
          Hackathon wins, shipped products, and tools I run locally.
        </p>

        <div className="projects-stack">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`project-card${project.featured ? ' project-card--featured' : ''}`}
            >
              <span className="project-card__num" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="project-card__body">
                <header className="project-card__head">
                  <div className="project-card__identity">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__context">@{project.event}</p>
                  </div>
                  <span className="project-card__year">{project.date}</span>
                </header>

                <p className="project-card__desc">{project.desc}</p>

                <div className="tech-pills project-card__tech">
                  {project.tech.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {(project.award || project.link) && (
                  <footer className="project-card__foot">
                    {project.award && (
                      <span className="project-card__badge">{project.award}</span>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                      >
                        View project →
                      </a>
                    )}
                  </footer>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
