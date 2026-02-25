import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

export default function Navbar() {
  const [activeId, setActiveId] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
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

  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className="nav"
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.2 }}
    >
      <div className="nav__bar">
        <motion.a
          href="#hero"
          className={`nav__logo ${activeId === 'hero' ? 'nav__link--active' : ''}`}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <span className="nav__logo-text">ANKUSH</span>
        </motion.a>
        {!isMobile && (
        <div className="nav__pill">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className={`nav__link ${activeId === l.href.slice(1) ? 'nav__link--active' : ''}`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.04, duration: 0.35 }}
            >
              <span>{l.label}</span>
              <FiChevronDown className="nav__chevron" aria-hidden />
            </motion.a>
          ))}
        </div>
        )}
        {isMobile && (
        <button
          type="button"
          className="nav__toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        )}
      </div>
      {isMobile &&
        createPortal(
          <div
            className={`nav__drawer ${menuOpen ? 'nav__drawer--open' : ''}`}
            aria-hidden={!menuOpen}
            onClick={closeMenu}
          >
            <div className="nav__drawer-inner" onClick={(e) => e.stopPropagation()}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`nav__drawer-link ${activeId === l.href.slice(1) ? 'nav__link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>,
          document.body
        )}
    </motion.nav>
  );
}
