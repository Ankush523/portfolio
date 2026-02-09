import './WaveDivider.css';

export default function WaveDivider() {
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="wave-divider__svg">
        <path
          d="M0 40 Q300 0 600 40 T1200 40 V80 H0 Z"
          fill="currentColor"
        />
        <path
          d="M0 50 Q300 10 600 50 T1200 50 V80 H0 Z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
