import React from "react";

/* SVG area + line chart. data = [{ label, value }]. */
export default function LineChart({ data = [], height = 240, unit = "", prefix = "" }) {
  const id = React.useId();
  const W = 600;
  const pad = { top: 20, bottom: 34, left: 20, right: 20 };
  const innerH = height - pad.top - pad.bottom;
  const innerW = W - pad.left - pad.right;
  const max = Math.max(...data.map((d) => d.value), 1) * 1.12;
  const min = 0;
  const n = data.length;

  const pts = data.map((d, i) => {
    const x = pad.left + (n === 1 ? innerW / 2 : (innerW / (n - 1)) * i);
    const y = pad.top + innerH - ((d.value - min) / (max - min)) * innerH;
    return { x, y, ...d };
  });

  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${pts[pts.length - 1].x.toFixed(1)},${pad.top + innerH} L${pts[0].x.toFixed(1)},${pad.top + innerH} Z`;

  return (
    <div className="chart-box">
      <svg viewBox={`0 0 ${W} ${height}`} width="100%" style={{ height: "auto", display: "block" }} role="img">
        <defs>
          <linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--sky-500)" stopOpacity="0.28" />
            <stop offset="1" stopColor="var(--sky-500)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 0.33, 0.66, 1].map((g, i) => {
          const y = pad.top + innerH * (1 - g);
          return <line key={i} x1={pad.left} y1={y} x2={W - pad.right} y2={y} stroke="var(--line-soft)" strokeWidth="1" />;
        })}
        <path d={areaPath} fill={`url(#area-${id})`} />
        <path d={linePath} fill="none" stroke="var(--navy-500)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill="#fff" stroke="var(--navy-500)" strokeWidth="2.4">
              <title>{`${p.label}: ${prefix}${p.value}${unit}`}</title>
            </circle>
            <text x={p.x} y={height - 12} textAnchor="middle" fontSize="12.5" fill="var(--slate-500)" fontFamily="var(--font-body)">
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
