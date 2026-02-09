import { useEffect, useRef } from 'react';
import './CherryBlossoms.css';

const PETAL_COUNT = 35;
const colors = ['#f8b4c4', '#e8a0a0', '#f0c0c8', '#d49090', '#e8b4bc'];

export default function CherryBlossoms() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < PETAL_COUNT; i++) {
      const el = document.createElement('div');
      el.className = 'petal';
      el.setAttribute('data-i', i);
      el.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2 Q16 6 18 10 Q16 14 12 18 Q8 14 6 10 Q8 6 12 2 Z" 
                fill="${colors[i % colors.length]}" opacity="0.9"/>
          <circle cx="12" cy="10" r="1.5" fill="${colors[i % colors.length]}" opacity="0.7"/>
        </svg>
      `;
      el.style.setProperty('--left', `${Math.random() * 100}vw`);
      el.style.setProperty('--duration', `${20 + Math.random() * 16}s`);
      el.style.setProperty('--delay', `${Math.random() * 20}s`);
      el.style.setProperty('--size', `${12 + Math.random() * 14}px`);
      container.appendChild(el);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="cherry-blossoms" aria-hidden="true" />;
}
