import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars -- motion.* JSX
import MeshGrid from './MeshGrid';
import MeshVisual from './MeshVisual';
import ScrollCue from './ScrollCue';

const spring = { type: 'spring', stiffness: 220, damping: 26 };
const stats = [
  { value: '12K+', label: 'Users week 1' },
  { value: '4', label: 'Companies' },
  { value: '9.66', label: 'CGPA' },
  { value: 'NYU', label: 'MS CS · Fall 2026' },
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <MeshGrid />
      <div className="hero__inner container">
        <div className="hero__grid">
          <div className="hero__copy">
            <motion.p
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
            >
              <span className="hero__signal" aria-hidden />
              Offline-first engineer
            </motion.p>

            <motion.h1
              className="hero__name"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
            >
              <span className="hero__name-line">Ankush</span>
              <span className="hero__name-line hero__name-line--accent">Dutta</span>
            </motion.h1>

            <motion.p
              className="hero__role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.35 }}
            >
              Full Stack · P2P · Bluetooth Mesh · Applied AI
            </motion.p>

            <motion.p
              className="hero__bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.45 }}
            >
              Incoming MS CS at NYU. Building offline systems at Offline Protocol —
              10K+ Android &amp; 2K+ iOS on Fernweh week one. ETHIndia &amp; ETHforAll winner.
            </motion.p>

            <motion.div
              className="hero__stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.55 }}
            >
              {stats.map((s) => (
                <div key={s.label} className="hero__stat">
                  <span className="hero__stat-value">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.65 }}
            >
              <a href="#proud" className="btn btn-primary">
                See my work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero__visual-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.4 }}
          >
            <div className="hero__visual-frame">
              <MeshVisual />
              <div className="hero__badge hero__badge--status">Open to work</div>
              <div className="hero__badge hero__badge--loc">Kolkata · UTC+5:30</div>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollCue />
    </section>
  );
}
