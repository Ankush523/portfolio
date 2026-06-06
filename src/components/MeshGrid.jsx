export default function MeshGrid() {
  return (
    <svg
      className="mesh-grid"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern id="mesh-dots" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh-dots)" />
    </svg>
  );
}
