import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const links = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const findActive = () => {
      const top = window.scrollY + 120;
      let current = 'hero';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= top) current = id;
      }
      setActiveId(current);
    };
    findActive();
    window.addEventListener('scroll', findActive, { passive: true });
    return () => window.removeEventListener('scroll', findActive);
  }, []);

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav--solid' : ''}`}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.2 }}
    >
      <div className="nav__bar">
        <motion.a
          href="#hero"
          className={`nav__logo glitch ${activeId === 'hero' ? 'nav__link--active' : ''}`}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          ANKUSH.DUTTA
        </motion.a>
        <div className="nav__tracks">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className={`nav__link ${activeId === l.href.slice(1) ? 'nav__link--active' : ''}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.04, duration: 0.35 }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
