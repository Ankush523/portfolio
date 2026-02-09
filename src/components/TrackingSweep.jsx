import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './TrackingSweep.css';

export default function TrackingSweep({ children, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (inView) setPlay(true);
  }, [inView]);

  return (
    <div ref={ref} className={`tracking-sweep-wrap ${className}`}>
      {play && (
        <motion.div
          className="tracking-sweep"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      )}
      {children}
    </div>
  );
}
