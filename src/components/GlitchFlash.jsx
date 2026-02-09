import { motion } from 'framer-motion';
import './GlitchFlash.css';

export default function GlitchFlash({ active, onComplete }) {
  return (
    <motion.div
      className="glitch-flash"
      initial={false}
      animate={active ? { opacity: [0, 1, 0.3, 0] } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onAnimationComplete={active ? onComplete : undefined}
      aria-hidden="true"
    />
  );
}
