import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import { FiSmartphone, FiDollarSign, FiCpu, FiLock, FiBriefcase, FiArrowRight } from 'react-icons/fi';

const proudWork = [
  {
    num: '01',
    icon: FiSmartphone,
    title: 'Fernweh',
    meta: 'Offline Protocol · Shipped',
    desc: 'Production P2P messaging on Bluetooth Mesh — 10K+ Android & 2K+ iOS in week one. Now leading V2 with transport switching and A/V calls.',
    tags: ['React Native', 'Mesh', 'E2E'],
    link: null,
  },
  {
    num: '02',
    icon: FiDollarSign,
    title: 'Offline Pay',
    meta: 'Offline Protocol · Beta',
    desc: 'Crypto-backed payments without connectivity. Stablecoin deposits, mesh propagation, reconciliation, and on-chain settlement.',
    tags: ['Web3', 'Stablecoins', 'Mesh'],
    link: null,
  },
  {
    num: '03',
    icon: FiCpu,
    title: 'IntenSync',
    meta: 'ETHIndia 2022 · AI',
    desc: 'LLM interface that converts natural language into executable blockchain transactions with gas estimation.',
    tags: ['LLM', 'Ethereum', 'ENS Prize'],
    link: 'https://github.com/Ankush523/intensync',
  },
  {
    num: '04',
    icon: FiLock,
    title: 'Shadow Pay',
    meta: 'ETHforAll 2023 · Privacy',
    desc: 'FIDO2 passkey-verified P2P payments. Confidential flows visible only to involved parties.',
    tags: ['WebAuthn', 'P2P', 'Superfluid Prize'],
    link: 'https://shadow-pay.vercel.app',
  },
  {
    num: '05',
    icon: FiBriefcase,
    title: 'Velto',
    meta: 'Personal · AI Agent',
    desc: 'Local job agent — monitors Greenhouse, Lever & Ashby, scores fit with LLM, tailors résumés, and auto-applies via Playwright.',
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
