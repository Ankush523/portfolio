import { useEffect, useRef } from 'react';
import './TrackingLines.css';

export default function TrackingLines() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const count = 16;
    for (let i = 0; i < count; i++) {
      const line = document.createElement('div');
      line.className = 'track-line';
      line.style.setProperty('--i', i);
      line.style.setProperty('--delay', `${i * 0.35}s`);
      el.appendChild(line);
    }
    return () => { el.innerHTML = ''; };
  }, []);

  return (
    <div ref={ref} className="tracking-lines" aria-hidden="true">
      <div className="track-scan-vertical" />
    </div>
  );
}
