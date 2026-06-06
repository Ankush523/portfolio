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
        <div className="skills-columns">
          {groups.map((group, i) => (
            <div key={group.title} className="skills-col">
              <h3 className="skills-col__title">
                <span className="skills-col__index">{String(i + 1).padStart(2, '0')}</span>
                {group.title}
              </h3>
              <ul className="skills-col__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
