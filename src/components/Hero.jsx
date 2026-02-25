import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const spring = { type: 'spring', stiffness: 260, damping: 24 };
const t = (delay = 0) => ({ ...spring, delay });

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <motion.p
            className="hero__label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.2)}
          >
            Full Stack Engineer
          </motion.p>
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ ...spring, delay: 0.35 }}
          >
            Code Done.
            <br />
            <span className="hero__title-accent">Stress is Gone.</span>
          </motion.h1>
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.55)}
          >
            I build systems that work in the hardest conditions — no internet, no problem.
            <br />
            P2P · Bluetooth Mesh · 12K+ users.
          </motion.p>
          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.75)}
          >
            <a href="#projects" className="hero__btn hero__btn--primary">
              View my work
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Get in touch
            </a>
          </motion.div>
          <motion.div
            className="hero__meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <a href="https://github.com/Ankush523" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="hero__meta-icon" /> GitHub
            </a>
            <span className="hero__meta-sep">·</span>
            <a href="https://www.linkedin.com/in/ankush-dutta-920b5b202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hero__meta-icon" /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
