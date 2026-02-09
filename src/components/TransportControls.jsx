import { motion, useReducedMotion } from 'framer-motion';
import { FiSkipBack, FiPlay, FiSquare, FiSkipForward } from 'react-icons/fi';
import './TransportControls.css';

/** Cassette-deck style transport buttons - rewind, play, stop, fast-forward */
export default function TransportControls() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="transport" role="group" aria-label="Transport controls">
      <motion.a
        href="#about"
        className="transport__btn transport__btn--rew"
        aria-label="Rewind to about"
        whileHover={reduceMotion ? {} : { scale: 1.08, boxShadow: '0 0 14px rgba(0,255,255,0.4)' }}
        whileTap={{ scale: 0.96 }}
      >
        <FiSkipBack className="transport__icon" aria-hidden />
      </motion.a>
      <motion.a
        href="#projects"
        className="transport__btn transport__btn--play"
        aria-label="Play - go to projects"
        whileHover={reduceMotion ? {} : { scale: 1.1, boxShadow: '0 0 18px rgba(255,0,255,0.5)' }}
        whileTap={{ scale: 0.96 }}
      >
        <FiPlay className="transport__icon" aria-hidden />
      </motion.a>
      <motion.a
        href="#hero"
        className="transport__btn transport__btn--stop"
        aria-label="Stop - back to top"
        whileHover={reduceMotion ? {} : { scale: 1.08, boxShadow: '0 0 14px rgba(255,0,255,0.35)' }}
        whileTap={{ scale: 0.96 }}
      >
        <FiSquare className="transport__icon transport__icon--stop" aria-hidden />
      </motion.a>
      <motion.a
        href="#contact"
        className="transport__btn transport__btn--ff"
        aria-label="Fast forward to contact"
        whileHover={reduceMotion ? {} : { scale: 1.08, boxShadow: '0 0 14px rgba(0,255,255,0.4)' }}
        whileTap={{ scale: 0.96 }}
      >
        <FiSkipForward className="transport__icon" aria-hidden />
      </motion.a>
    </div>
  );
}
