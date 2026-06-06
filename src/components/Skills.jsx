import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';

const groups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Solidity', 'C'],
  },
  {
    title: 'Mobile & Frontend',
    items: ['React Native', 'React', 'Next.js', 'HTML/CSS', 'Streamlit'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'NestJS', 'FastAPI', 'Express', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'AI & Agents',
    items: ['LLMs', 'RAG', 'Embeddings', 'ChromaDB', 'Ollama', 'Playwright'],
  },
  {
    title: 'Mesh & Security',
    items: ['Bluetooth Mesh', 'P2P', 'E2E Encryption', 'Passkeys', 'Offline-First'],
  },
  {
    title: 'Blockchain',
    items: ['Smart Contracts', 'Ethereum', 'Web3.js', 'IPFS'],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <SectionTitle index="04">Stack</SectionTitle>

        <p className="skills__lead">
          Core tooling for offline systems, applied AI, mesh networking, and on-chain work.
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
