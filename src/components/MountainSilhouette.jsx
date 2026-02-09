import './MountainSilhouette.css';

export default function MountainSilhouette({ className = '' }) {
  return (
    <div className={`mountain-silhouette ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMax slice">
        <path
          d="M0 200 L0 120 Q100 80 200 100 L300 60 Q400 40 500 80 L600 50 Q700 30 800 70 L800 200 Z"
          fill="currentColor"
        />
        <path
          d="M0 200 L50 150 Q150 100 250 130 L400 90 Q550 60 700 100 L800 80 L800 200 Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M0 200 L100 160 Q200 120 350 150 L500 110 L800 140 L800 200 Z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
