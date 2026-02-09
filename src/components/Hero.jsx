import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import GlitchFlash from './GlitchFlash';
import { HeroGraphic } from './HeroVisual';
import './Hero.css';

const spring = { type: 'spring', stiffness: 260, damping: 24 };
const springSoft = { type: 'spring', stiffness: 180, damping: 22 };
const t = (delay = 0) => ({ ...spring, delay });

export default function Hero() {
  const [flash, setFlash] = useState(false);
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowScrollCue(window.scrollY < 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handlePlay = (e) => {
    e.preventDefault();
    setFlash(true);
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleFlashComplete = () => setFlash(false);

  return (
    <section id="hero" className="hero">
      <GlitchFlash active={flash} onComplete={handleFlashComplete} />
      <div className="hero__track-wrap">
        <motion.div
          className="hero__track hero__track--1"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.12 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="hero__track hero__track--2"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.12 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.div
          className="hero__track hero__track--3"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.12 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
        <motion.div
          className="hero__vcr-bar"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.3)}
        >
          <span className="hero__rec">
            <span className="hero__rec-dot" /> REC
          </span>
          <span className="hero__time hero__time--led">00:00:00</span>
        </motion.div>

        <motion.p
          className="hero__label"
          initial={{ opacity: 0, x: -24, filter: 'blur(4px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={t(0.45)}
        >
          FULL STACK DEVELOPER
        </motion.p>

        <motion.h1
          className="hero__title glitch"
          initial={{ opacity: 0, y: 48, scale: 0.92, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ ...springSoft, delay: 0.55 }}
        >
          ANKUSH
          <br />
          <motion.span
            className="hero__title-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.75 }}
          >
            DUTTA
          </motion.span>
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(0.95)}
        >
          Building systems that connect people — even without the internet.
          <br />
          P2P · Bluetooth Mesh · 12K+ users.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={t(1.15)}
        >
          <motion.a
            href="#projects"
            className="hero__btn hero__btn--play"
            onClick={handlePlay}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 1.25 }}
          >
            ▶ PLAY TAPE
          </motion.a>
          <motion.a
            href="#contact"
            className="hero__btn hero__btn--outline"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...spring, delay: 1.35 }}
          >
            CONTACT
          </motion.a>
        </motion.div>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.5 }}
        >
          <a href="https://github.com/Ankush523" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hero__meta-icon" /> GITHUB
          </a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/ankush-dutta-920b5b202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hero__meta-icon" /> LINKEDIN
          </a>
        </motion.div>
        </div>

        <HeroGraphic />

        <motion.a
          href="#about"
          className={`hero__scroll-cue ${!showScrollCue ? 'hero__scroll-cue--hidden' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollCue ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to about"
        >
          <span className="hero__scroll-cue-text">Scroll to explore</span>
          <FiChevronDown className="hero__scroll-cue-icon" />
        </motion.a>
      </div>
    </section>
  );
}
