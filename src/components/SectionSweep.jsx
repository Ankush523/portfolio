import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import './SectionSweep.css';

/**
 * Thin gradient line that sweeps left-to-right when the section enters view.
 * Place at the top of each section for a tape-head / scan transition effect.
 */
export default function SectionSweep() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px 0px 0px 0px', amount: 0 });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="section-sweep" aria-hidden>
      {!reduceMotion && (
        <motion.div
          className="section-sweep__line"
          initial={{ x: '-100%' }}
          animate={inView ? { x: '100%' } : { x: '-100%' }}
          transition={{
            type: 'tween',
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      )}
    </div>
  );
}
