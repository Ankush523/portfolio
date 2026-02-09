import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress" role="presentation" aria-hidden="true">
      <div className="scroll-progress__tape-notches" aria-hidden />
      <motion.div
        className="scroll-progress__bar"
        style={{ width: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      />
    </div>
  );
}
