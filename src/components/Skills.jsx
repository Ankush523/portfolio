import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';

const groups = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C++'],
  },
  {
    title: 'Mobile & Frontend',
    items: ['React Native', 'React', 'Next.js', 'iOS', 'Android', 'Streamlit'],
  },
  {
    title: 'Backend & Data',
    items: ['FastAPI', 'Node.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'SQLite', 'DynamoDB'],
  },
  {
    title: 'AI & Agents',
    items: ['LangGraph', 'RAG', 'LLMs', 'Embeddings', 'ChromaDB', 'Tool Calling', 'Ollama', 'OpenAI API'],
  },
  {
    title: 'DevOps & Testing',
    items: ['Docker', 'AWS', 'CI/CD', 'Git', 'Jest', 'Playwright', 'Linux CLI'],
  },
  {
    title: 'Specialty',
    items: ['Bluetooth Mesh', 'P2P', 'E2E Encryption', 'Passkeys', 'BM25 Retrieval', 'SSE Streaming'],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <SectionTitle index="04">Stack</SectionTitle>

        <p className="skills__lead">
          Tooling for production mobile, applied AI, full-stack systems, and reliable deployment.
        </p>

        <div className="skills-columns">
          {groups.map((group, i) => (
            <article key={group.title} className="skills-col">
              <h3 className="skills-col__title">
                <span className="skills-col__index">{String(i + 1).padStart(2, '0')}</span>
                {group.title}
              </h3>
              <ul className="skills-col__tags">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skills-tag">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
