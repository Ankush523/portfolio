import { motion, useReducedMotion } from 'framer-motion'; // eslint-disable-line no-unused-vars -- motion.* JSX

const nodes = [
  { cx: 96, cy: 68, r: 10, tier: 'edge' },
  { cx: 188, cy: 52, r: 8, tier: 'edge' },
  { cx: 272, cy: 108, r: 9, tier: 'relay' },
  { cx: 218, cy: 162, r: 15, tier: 'hub', primary: true },
  { cx: 132, cy: 198, r: 9, tier: 'relay' },
  { cx: 68, cy: 142, r: 7, tier: 'edge' },
  { cx: 298, cy: 188, r: 6, tier: 'edge' },
];

const edges = [
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [3, 6],
  [2, 6],
  [0, 5],
  [1, 2],
];

const packets = [
  { edge: [0, 3], duration: 2.8, delay: 0 },
  { edge: [3, 6], duration: 2.2, delay: 0.6 },
  { edge: [4, 5], duration: 3.1, delay: 1.1 },
  { edge: [1, 3], duration: 2.5, delay: 0.4 },
];

function edgeLength(a, b) {
  const dx = b.cx - a.cx;
  const dy = b.cy - a.cy;
  return Math.hypot(dx, dy);
}

export default function MeshVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mesh-visual" aria-hidden>
      <svg viewBox="0 0 360 300" className="mesh-visual__svg">
        <defs>
          <filter id="mesh-signal-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="mesh-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-signal)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--color-signal)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient field grid */}
        <g className="mesh-visual__field">
          {Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 9 }, (_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={24 + col * 38}
                cy={20 + row * 34}
                r={1.2}
                className="mesh-visual__field-dot"
              />
            ))
          )}
        </g>

        {/* Edge glow underlay */}
        {edges.map(([a, b], i) => (
          <line
            key={`glow-${i}`}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            className="mesh-visual__edge-glow"
          />
        ))}

        {/* Edges */}
        {edges.map(([a, b], i) => {
          const len = edgeLength(nodes[a], nodes[b]);
          return (
            <motion.line
              key={`edge-${i}`}
              x1={nodes[a].cx}
              y1={nodes[a].cy}
              x2={nodes[b].cx}
              y2={nodes[b].cy}
              className="mesh-visual__edge"
              strokeDasharray={len}
              initial={{ strokeDashoffset: len, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.7,
                delay: reduceMotion ? 0 : 0.15 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          );
        })}

        {/* Signal packets */}
        {!reduceMotion &&
          packets.map(({ edge: [a, b], duration, delay }, i) => {
            const from = nodes[a];
            const to = nodes[b];
            return (
              <motion.circle
                key={`packet-${i}`}
                r={3.5}
                className="mesh-visual__packet"
                initial={{ cx: from.cx, cy: from.cy, opacity: 0 }}
                animate={{
                  cx: [from.cx, to.cx, from.cx],
                  cy: [from.cy, to.cy, from.cy],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: 'linear',
                  times: [0, 0.08, 0.92, 1],
                }}
              />
            );
          })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            {node.primary && (
              <>
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r + 22}
                  fill="url(#mesh-hub-glow)"
                  className="mesh-visual__hub-glow"
                />
                {!reduceMotion && (
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r + 12}
                    className="mesh-visual__pulse"
                  />
                )}
              </>
            )}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              className={`mesh-visual__node mesh-visual__node--${node.tier}${node.primary ? ' mesh-visual__node--primary' : ''}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 22,
                delay: reduceMotion ? 0 : 0.2 + i * 0.06,
              }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />
            {(node.tier === 'relay' || node.primary) && (
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r={node.primary ? 4 : 3}
                className="mesh-visual__node-core"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.45 + i * 0.05 }}
                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
              />
            )}
          </g>
        ))}

        {/* HUD strip */}
        <g className="mesh-visual__hud">
          <rect x="72" y="248" width="216" height="36" rx="0" className="mesh-visual__hud-bg" />
          <rect x="72" y="248" width="216" height="36" className="mesh-visual__hud-border" fill="none" />
          <circle cx="92" cy="266" r="5" className="mesh-visual__hud-dot" />
          <text x="108" y="270" className="mesh-visual__label">
            MESH ACTIVE
          </text>
          <text x="248" y="270" textAnchor="end" className="mesh-visual__hud-meta">
            7 NODES
          </text>
        </g>
      </svg>
    </div>
  );
}
