import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#proud' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'proud', 'experience', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [activeId, setActiveId] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches
  );

  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(max-width: 900px)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const top = window.scrollY + 120;
      let current = 'hero';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= top) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-dot" aria-hidden />
          Ankush
        </a>

        {!isMobile && (
          <div className="nav__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link ${activeId === link.href.slice(1) ? 'nav__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {!isMobile && (
          <div className="nav__actions">
            <ThemeToggle />
            <a href="#contact" className="nav__cta btn btn-primary btn--sm">
              Hire me
            </a>
          </div>
        )}

        {isMobile && (
          <div className="nav__actions">
            <ThemeToggle />
            <button
              type="button"
              className="nav__toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        )}
      </div>

      {isMobile &&
        createPortal(
          <div
            className={`nav__drawer ${menuOpen ? 'nav__drawer--open' : ''}`}
            aria-hidden={!menuOpen}
            onClick={() => setMenuOpen(false)}
          >
            <div className="nav__drawer-inner" onClick={(e) => e.stopPropagation()}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav__drawer-link ${activeId === link.href.slice(1) ? 'nav__drawer-link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                Hire me
              </a>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
}
