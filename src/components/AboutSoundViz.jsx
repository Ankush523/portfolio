import { useReducedMotion } from 'framer-motion';
import './AboutSoundViz.css';

const BAR_COUNT = 200;

export default function AboutSoundViz() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="about__sound-viz"
      aria-hidden
      data-reduced-motion={reduceMotion ? 'true' : undefined}
    >
      <div className="about__sound-viz-bars">
        {Array.from({ length: BAR_COUNT }, (_, i) => (
          <span
            key={i}
            className="about__sound-viz-bar"
            style={{
              '--i': i,
              '--n': BAR_COUNT,
            }}
          />
        ))}
      </div>
    </div>
  );
}
