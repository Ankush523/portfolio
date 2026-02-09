import { FiRotateCcw } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__reels" aria-hidden>
        <div className="footer__reel footer__reel--l">
          <span className="footer__reel-ring" />
          <span className="footer__reel-ring" />
          <span className="footer__reel-hub" />
        </div>
        <div className="footer__reel footer__reel--r">
          <span className="footer__reel-ring" />
          <span className="footer__reel-ring" />
          <span className="footer__reel-hub" />
        </div>
      </div>
      <div className="footer__inner">
        <span className="footer__copy">© {new Date().getFullYear()} ANKUSH DUTTA</span>
        <div className="footer__tape">
          <a href="#hero" className="footer__rewind" aria-label="Back to top">
            <FiRotateCcw className="footer__rewind-icon" /> REWIND
          </a>
          <span className="footer__sep">·</span>
          <span className="footer__repeat">REPEAT</span>
          <span className="footer__sep">·</span>
          <span className="footer__built">REACT + VITE</span>
        </div>
      </div>
    </footer>
  );
}
