import { motion, useReducedMotion } from 'framer-motion';
import './VUMeters.css';

/** Cassette-deck style VU level meters - decorative, animated bars */
export default function VUMeters({ className = '' }) {
  const reduceMotion = useReducedMotion();
  const bars = [0.4, 0.7, 0.95, 0.6, 0.85, 0.5, 0.75, 0.55]; // heights 0–1

  return (
    <div className={`vu-meters ${className}`} aria-hidden>
      <span className="vu-meters__label vu-meters__label--l">L</span>
      <div className="vu-meters__strip vu-meters__strip--l">
        {bars.slice(0, 4).map((h, i) => (
          <motion.span
            key={`l-${i}`}
            className="vu-meters__bar"
            initial={{ height: 0 }}
            animate={
              reduceMotion
                ? { height: `${h * 100}%` }
                : {
                    height: [`${h * 100}%`, `${Math.max(20, h * 70)}%`, `${h * 100}%`],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.3 }
                : {
                    duration: 0.4 + i * 0.05,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: i * 0.08,
                  }
            }
          />
        ))}
      </div>
      <div className="vu-meters__strip vu-meters__strip--r">
        {bars.slice(4, 8).map((h, i) => (
          <motion.span
            key={`r-${i}`}
            className="vu-meters__bar"
            initial={{ height: 0 }}
            animate={
              reduceMotion
                ? { height: `${h * 100}%` }
                : {
                    height: [`${h * 100}%`, `${Math.max(20, h * 65)}%`, `${h * 100}%`],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0.3 }
                : {
                    duration: 0.35 + i * 0.06,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: i * 0.06 + 0.1,
                  }
            }
          />
        ))}
      </div>
      <span className="vu-meters__label vu-meters__label--r">R</span>
    </div>
  );
}
