import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'EarningsPulse',
    event: 'AI x Finance Hackathon',
    date: '2026',
    tech: ['Next.js', 'FastAPI', 'LangGraph', 'SSE', 'SEC EDGAR'],
    desc: 'Pre-earnings research platform with 5 LangGraph agents producing cited playbooks — beat/miss probabilities, reaction scenarios, and peer spillover analysis.',
    award: 'Featured',
    links: [
      { label: 'Live demo', href: 'https://earnings-pulse-pi.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Ankush523/EarningsPulse' },
    ],
    featured: true,
  },
  {
    title: 'TRS LLM',
    event: 'Personal',
    date: '2026',
    tech: ['Python', 'BM25', 'Hybrid Retrieval', 'Benchmarks'],
    desc: 'Local-first Thinking with Reasoning Skills pipeline across 4 stages with frozen library snapshots and reproducible eval on HumanEval+, MBPP, and Hendrycks Math.',
    award: 'LLM Eval',
    links: [{ label: 'GitHub', href: 'https://github.com/Ankush523/trs_llm' }],
  },
  {
    title: 'Resume–JD Matcher',
    event: 'Personal',
    date: '2026',
    tech: ['RAG', 'ChromaDB', 'FastAPI', 'Embeddings'],
    desc: 'Section-aware PDF chunking with top-k retrieval — fit score (0–100), skill gaps, and 3 grounded bullet rewrites per job description.',
    award: 'Applied AI',
    links: [{ label: 'GitHub', href: 'https://github.com/Ankush523/resume-jd-matcher' }],
  },
  {
    title: 'GitHub Assistant Agent',
    event: 'Personal',
    date: '2026',
    tech: ['Python', 'Tool Calling', 'GitHub API', 'Streamlit'],
    desc: 'Tool-calling agent that inspects repo files and GitHub issues before producing grounded code explanations and structured patch suggestions.',
    award: 'AI Agent',
    links: [{ label: 'GitHub', href: 'https://github.com/Ankush523/github-assistant-agent' }],
  },
  {
    title: 'NYC Event Scanner',
    event: 'Personal',
    date: '2026',
    tech: ['Python', 'CLI', 'Web Scraping', 'ICS Export'],
    desc: 'Aggregates NYC tech events from 6 sources with fault-tolerant adapters — deduplicates cross-listings and exports HTML, Markdown, JSON, and ICS.',
    award: 'Full Stack',
    links: [
      { label: 'Live site', href: 'https://event-scrapper-nine.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Ankush523/event_scrapper' },
    ],
  },
  {
    title: 'Velto',
    event: 'Personal',
    date: '2026',
    tech: ['FastAPI', 'React', 'Playwright', 'SQLite'],
    desc: 'Local job workflow dashboard — role fit scoring, application tracking, and Playwright automation across Greenhouse, Lever, and Ashby.',
    award: 'Automation',
    links: [{ label: 'GitHub', href: 'https://github.com/Ankush523/job_applyer' }],
  },
  {
    title: 'CoLab',
    event: 'Hackathon',
    date: '2023',
    tech: ['Real-time', 'Encryption', 'Pair Programming'],
    desc: 'Collaborative developer platform — issue listing, session scheduling, real-time shared code editing, and encrypted file storage.',
    award: null,
    links: [{ label: 'GitHub', href: 'https://github.com/Ankush523/CoLab' }],
  },
  {
    title: 'IntenSync',
    event: 'ETHIndia 2022',
    date: '2022',
    tech: ['LLM', 'Ethereum', 'React'],
    desc: 'Natural language to executable blockchain transactions with gas estimation. ENS Integration Prize winner.',
    award: 'Winner',
    links: [{ label: 'GitHub', href: 'https://github.com/Ankush523/intensync' }],
  },
  {
    title: 'Shadow Pay',
    event: 'ETHforAll 2023',
    date: '2023',
    tech: ['FIDO2', 'WebAuthn', 'P2P'],
    desc: 'Privacy-first P2P payments with passkey and biometric verification. Superfluid Pool Prize winner.',
    award: 'Winner',
    links: [{ label: 'Live demo', href: 'https://shadow-pay.vercel.app' }],
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <SectionTitle index="05">Projects</SectionTitle>

        <p className="projects__lead">
          Applied AI systems, production tools, hackathon wins, and side projects.
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

                {(project.award || project.links?.length > 0) && (
                  <footer className="project-card__foot">
                    {project.award && (
                      <span className="project-card__badge">{project.award}</span>
                    )}
                    {project.links?.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                      >
                        {link.label} →
                      </a>
                    ))}
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
