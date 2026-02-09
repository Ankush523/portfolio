import { motion } from 'framer-motion';
import './VHSFrame.css';

export default function VHSFrame({ children, className = '', rec = false, time = '' }) {
  return (
    <motion.div
      className={`vhs-frame ${className}`}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px', amount: 0.2 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 26,
        mass: 0.8,
      }}
    >
      {(rec || time) && (
        <div className="vhs-frame__bar">
          {rec && (
            <span className="vhs-frame__rec">
              <span className="vhs-frame__rec-dot" /> REC
            </span>
          )}
          {time && <span className="vhs-frame__time">{time}</span>}
        </div>
      )}
      <div className="vhs-frame__inner">{children}</div>
    </motion.div>
  );
}
