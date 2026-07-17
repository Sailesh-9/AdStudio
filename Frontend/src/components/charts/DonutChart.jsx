import React from "react";

/* SVG donut chart. data = [{ label, value, color }]. */
export default function DonutChart({ data = [], size = 180, thickness = 26, centerValue, centerLabel }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = (size - thickness) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circ = 2 * Math.PI * r;

  let offset = 0;
  const segs = data.map((d) => {
    const frac = d.value / total;
    const len = frac * circ;
    const seg = { ...d, dasharray: `${len} ${circ - len}`, dashoffset: -offset, frac };
    offset += len;
    return seg;
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} role="img">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--line-soft)" strokeWidth={thickness} />
      <g transform={`rotate(-90 ${cx} ${cy})`}>
        {segs.map((s, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={thickness}
            strokeDasharray={s.dasharray}
            strokeDashoffset={s.dashoffset}
            strokeLinecap="butt"
          >
            <title>{`${s.label}: ${Math.round(s.frac * 100)}%`}</title>
          </circle>
        ))}
      </g>
      {(centerValue || centerLabel) && (
        <g className="donut-center">
          <text x={cx} y={cy - 2} textAnchor="middle" className="dv">{centerValue}</text>
          <text x={cx} y={cy + 16} textAnchor="middle" className="dl">{centerLabel}</text>
        </g>
      )}
    </svg>
  );
}
