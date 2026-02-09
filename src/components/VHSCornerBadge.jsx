import { useState, useEffect } from 'react';
import './VHSCornerBadge.css';

function formatTapeTime(progress) {
  const total = 5 * 60; // 5 "minutes" for full scroll
  const sec = Math.floor((progress / 100) * total);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}:00`;
}

export default function VHSCornerBadge() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="vhs-corner" aria-hidden="true">
      <div className="vhs-corner__rec">
        <span className="vhs-corner__rec-dot" /> REC
      </div>
      <div className="vhs-corner__time">{formatTapeTime(scrollProgress)}</div>
      <div className="vhs-corner__label">SP</div>
    </div>
  );
}
