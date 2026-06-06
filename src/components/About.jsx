import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import { FiAward, FiBriefcase, FiTarget } from 'react-icons/fi';

const cards = [
  {
    num: '01',
    icon: FiAward,
    title: 'Education',
    accent: 'signal',
    lines: [
      { strong: 'New York University' },
      { text: 'MS Computer Science · Incoming Fall 2026' },
      { strong: 'SRM Institute of Science & Technology' },
      { text: 'B.Tech CSE (AI/ML) · CGPA 9.66/10' },
      { text: '2021–2025 · Chennai, India' },
    ],
  },
  {
    num: '02',
    icon: FiBriefcase,
    title: 'Now Building',
    accent: 'ember',
    lines: [
      { strong: 'Offline Protocol' },
      { text: 'Full Stack Developer · Jun 2024–Present' },
      { text: 'Leading Fernweh V2 · Offline Pay beta' },
    ],
  },
  {
    num: '03',
    icon: FiTarget,
    title: 'Recognition',
    accent: 'ink',
    lines: [
      { strong: 'ETHIndia 2022 · ETHforAll 2023' },
      { text: 'ENS Integration Prize · Superfluid Pool Prize' },
      { text: 'Buildspace N&W S2 · DataScience Hack Top 10' },
    ],
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <SectionTitle index="01">About</SectionTitle>
        <div className="about-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.num} className={`about-card about-card--${card.accent}`}>
                <div className="about-card__top">
                  <span className="about-card__num">{card.num}</span>
                  <span className="about-card__icon" aria-hidden>
                    <Icon />
                  </span>
                </div>
                <h3>{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i}>
                    {line.strong ? <strong>{line.strong}</strong> : line.text}
                  </p>
                ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
