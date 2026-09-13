import SectionTitle from './SectionTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import {
  FiSmartphone,
  FiTrendingUp,
  FiCpu,
  FiLock,
  FiArrowRight,
} from 'react-icons/fi';

const FERNWEH_APP_STORE =
  'https://apps.apple.com/us/app/fernweh-offline-messages/id6738829052';
const FERNWEH_PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.fernweh_offline_messaging';

const proudWork = [
  {
    num: '01',
    icon: FiSmartphone,
    title: 'Fernweh',
    meta: 'Offline Protocol · Shipped · 10K+ downloads',
    desc: 'Production offline messaging on Bluetooth mesh with internet fallback. 10K+ Android & 2K+ iOS in week one. Led V2 with transport switching and encrypted A/V calls.',
    tags: ['React Native', 'Mesh', 'E2E', 'CI/CD'],
    links: [
      { label: 'App Store', href: FERNWEH_APP_STORE },
      { label: 'Google Play', href: FERNWEH_PLAY_STORE },
    ],
  },
  {
    num: '02',
    icon: FiTrendingUp,
    title: 'EarningsPulse',
    meta: 'AI x Finance Hackathon · LangGraph',
    desc: 'Pre-earnings research platform with 5 LangGraph agents, SSE streaming, and cited playbooks from Yahoo Finance, Finnhub, Tavily, and SEC EDGAR.',
    tags: ['Next.js', 'FastAPI', 'LangGraph', 'SSE'],
    links: [
      { label: 'Live demo', href: 'https://earnings-pulse-pi.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Ankush523/EarningsPulse' },
    ],
  },
  {
    num: '03',
    icon: FiCpu,
    title: 'IntenSync',
    meta: 'ETHIndia 2022 · ENS Integration Prize',
    desc: 'LLM interface that converts natural language into executable blockchain transactions with gas estimation.',
    tags: ['LLM', 'Ethereum', 'React'],
    links: [{ label: 'GitHub', href: 'https://github.com/Ankush523/intensync' }],
  },
  {
    num: '04',
    icon: FiLock,
    title: 'Shadow Pay',
    meta: 'ETHforAll 2023 · Superfluid Pool Prize',
    desc: 'FIDO2 passkey-verified P2P payments. Confidential flows visible only to involved parties.',
    tags: ['WebAuthn', 'P2P', 'Privacy'],
    links: [{ label: 'Live demo', href: 'https://shadow-pay.vercel.app' }],
  },
  {
    num: '05',
    icon: FiTrendingUp,
    title: 'TRS LLM',
    meta: 'Personal · LLM Evaluation',
    desc: 'Local-first Thinking with Reasoning Skills pipeline — trace generation, skill distillation, BM25/hybrid retrieval, and benchmark evaluation.',
    tags: ['Python', 'BM25', 'HumanEval+', 'MBPP'],
    links: [{ label: 'GitHub', href: 'https://github.com/Ankush523/trs_llm' }],
  },
];

export default function ProudWork() {
  const ref = useScrollReveal();

  return (
    <section id="proud" className="proud" ref={ref}>
      <div className="container">
        <SectionTitle index="02">Selected Work</SectionTitle>

        <blockquote className="proud__quote">
          Ship products people can touch — then build the AI that makes them smarter.
          <span className="proud__quote-accent">Production first, demos second.</span>
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
                  {item.links?.length > 0 && (
                    <div className="proud-card__links">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="proud-card__link"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
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
              Own the full stack — mobile, backend, agents, and deployment.
              Make it <strong>testable, observable, and production-ready</strong>.
            </p>
          </div>
          <div className="manifesto-box manifesto-box--ink">
            <h4>What I Optimize For</h4>
            <p>
              Shipped products · Multi-agent AI · Mobile at scale ·
              <strong> End-to-end ownership</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
