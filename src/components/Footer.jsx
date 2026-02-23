import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__copy">© {new Date().getFullYear()} Ankush Dutta</span>
        <div className="footer__links">
          <a href="#hero">Back to top</a>
          <span className="footer__sep">·</span>
          <span className="footer__built">Built with React + Vite</span>
        </div>
      </div>
    </footer>
  );
}
