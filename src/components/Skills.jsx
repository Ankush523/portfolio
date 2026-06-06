import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';

const groups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Solidity', 'C++'],
  },
  {
    title: 'Mobile & Frontend',
    items: ['React Native', 'React', 'Next.js', 'HTML/CSS'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'FastAPI', 'Express', 'GraphQL', 'PostgreSQL', 'Playwright'],
  },
  {
    title: 'Mesh & Security',
    items: ['Bluetooth Mesh', 'P2P', 'E2E Encryption', 'Offline-First'],
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
          Core tooling for offline systems, mesh networking, and on-chain work.
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
