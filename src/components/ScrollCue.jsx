import { FiChevronDown } from 'react-icons/fi';

export default function ScrollCue() {
  return (
    <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
      <span className="scroll-cue__label">Scroll</span>
      <FiChevronDown className="scroll-cue__icon" aria-hidden />
    </a>
  );
}
