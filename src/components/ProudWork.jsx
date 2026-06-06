import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import { FiSmartphone, FiDollarSign, FiCpu, FiLock, FiBriefcase, FiArrowRight } from 'react-icons/fi';

const proudWork = [
  {
    num: '01',
    icon: FiSmartphone,
    title: 'Fernweh',
    meta: 'Offline Protocol · Week 1',
    desc: 'P2P messaging on Bluetooth Mesh — 12K+ users in seven days. Full stack: UI, networking, E2E encryption.',
    tags: ['React Native', 'Mesh', '12K+ Users'],
    link: null,
  },
  {
    num: '02',
    icon: FiDollarSign,
    title: 'Offline Pay',
    meta: 'Offline Protocol · Web3',
    desc: 'Crypto-backed payments without connectivity. Mesh propagation, stablecoin deposits, on-chain settlement.',
    tags: ['Web3', 'Smart Contracts'],
    link: null,
  },
  {
    num: '03',
    icon: FiCpu,
    title: 'IntenSync',
    meta: 'Personal · AI',
    desc: 'Natural language to executable blockchain transactions. Zero blockchain knowledge required.',
    tags: ['LLM', 'Ethereum'],
    link: 'https://github.com/Ankush523/intensync',
  },
  {
    num: '04',
    icon: FiLock,
    title: 'Shadow Pay',
    meta: 'Privacy · FIDO2',
    desc: 'Passkey-verified P2P payments. Confidential, verifiable, anonymous.',
    tags: ['WebAuthn', 'P2P'],
    link: 'https://shadow-pay.vercel.app',
  },
  {
    num: '05',
    icon: FiBriefcase,
    title: 'Velto',
    meta: 'Personal Project · AI Agent',
    desc: 'Local job application agent — monitors Greenhouse, Lever & Ashby boards, scores fit with LLM, tailors résumés, and auto-applies via Playwright.',
    tags: ['FastAPI', 'Playwright', 'Ollama'],
    link: 'https://github.com/Ankush523/job_applyer',
  },
];

export default function ProudWork() {
  const ref = useScrollReveal();

  return (
    <section id="proud" className="proud" ref={ref}>
      <div className="container">
        <SectionTitle index="02">Selected Work</SectionTitle>

        <blockquote className="proud__quote">
          If it works offline, it works everywhere.
          <span className="proud__quote-accent">Reliability beats hype.</span>
        </blockquote>
      </div>

      <div className="proud__carousel">
        <p className="proud__hint">
          <span>Scroll to explore</span>
          <FiArrowRight aria-hidden />
        </p>
        <div className="proud__scroll">
          <div className="proud__track">
            {proudWork.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.num} className="proud-card">
                  <span className="proud-card__num">{item.num}</span>
                  <span className="proud-card__icon" aria-hidden>
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p className="proud-card__meta">{item.meta}</p>
                  <p className="proud-card__desc">{item.desc}</p>
                  <div className="tech-pills">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proud-card__link"
                    >
                      View project →
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="proud__manifesto">
          <div className="manifesto-box manifesto-box--signal">
            <h4>Core Principle</h4>
            <p>
              Build for the edge case — no signal, no server, no excuses.
              Make it <strong>testable, observable, and offline-ready</strong>.
            </p>
          </div>
          <div className="manifesto-box manifesto-box--ink">
            <h4>What I Optimize For</h4>
            <p>
              End-to-end ownership · Mesh &amp; P2P architecture ·
              Ship velocity · <strong>Developer experience</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
