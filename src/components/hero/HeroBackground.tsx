// Nós da "constelação" (rede neural), concentrados à direita, atrás da foto.
const NODES: [number, number, number][] = [
  [760, 140, 3],
  [880, 90, 4],
  [1010, 150, 3.5],
  [1120, 110, 2.5],
  [820, 260, 2.5],
  [950, 300, 5],
  [1080, 260, 3],
  [1160, 360, 2.5],
  [860, 420, 3],
  [1010, 450, 3.5],
  [700, 360, 2],
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [2, 6], [3, 6],
  [4, 5], [5, 6], [6, 7], [4, 8], [5, 8], [5, 9], [6, 9], [8, 9], [10, 4], [10, 8],
];

/**
 * Fundo decorativo do topo: rede neural como constelação + ondas de rio na base.
 */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-40 md:opacity-100"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMaxYMid slice"
      >
        <g className="stroke-brand/25" strokeWidth="1">
          {EDGES.map(([a, b]) => (
            <line key={`${a}-${b}`} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
          ))}
        </g>
        <g className="fill-brand-soft">
          {NODES.map(([x, y, r], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              className={i % 3 === 0 ? 'motion-safe:animate-pulse' : undefined}
            />
          ))}
        </g>
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full h-24 sm:h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          className="fill-brand/20"
          d="M0 50 C 200 10, 380 90, 600 50 S 1000 20, 1200 55 L1200 120 L0 120 Z"
        />
        <path
          className="fill-brand/25"
          d="M0 80 C 220 50, 420 115, 640 82 S 1020 60, 1200 85 L1200 120 L0 120 Z"
        />
      </svg>
    </div>
  );
}
