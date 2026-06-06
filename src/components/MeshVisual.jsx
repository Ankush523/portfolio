import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars -- motion.* JSX

const nodes = [
  { cx: 120, cy: 80, r: 14, primary: false },
  { cx: 220, cy: 140, r: 18, primary: true },
  { cx: 160, cy: 220, r: 12, primary: false },
  { cx: 280, cy: 200, r: 10, primary: false },
  { cx: 80, cy: 180, r: 8, primary: false },
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [4, 2],
  [1, 3],
];

export default function MeshVisual() {
  return (
    <div className="mesh-visual" aria-hidden>
      <svg viewBox="0 0 360 320" className="mesh-visual__svg">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            className="mesh-visual__edge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
          />
        ))}
        {nodes.map((node, i) => (
          <g key={i}>
            {node.primary && (
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r + 10}
                className="mesh-visual__pulse"
              />
            )}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              className={`mesh-visual__node ${node.primary ? 'mesh-visual__node--primary' : ''}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.15 + i * 0.07 }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />
          </g>
        ))}
        <text x="180" y="300" textAnchor="middle" className="mesh-visual__label">
          MESH ACTIVE
        </text>
      </svg>
    </div>
  );
}
