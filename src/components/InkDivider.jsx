import { motion } from 'framer-motion';
import './InkDivider.css';

export default function InkDivider() {
  return (
    <motion.div
      className="ink-divider"
      initial={{ scaleX: 0, opacity: 0.6 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg viewBox="0 0 400 12" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M0 6 Q50 2 100 6 T200 6 T300 6 T400 6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  );
}
