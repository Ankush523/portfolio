export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© {new Date().getFullYear()} Ankush Dutta</p>
        <a href="#hero" className="footer__top">
          Back to top ↑
        </a>
        <p className="footer__tag">Signal Brutalism · Offline-first · Built with React</p>
      </div>
    </footer>
  );
}
