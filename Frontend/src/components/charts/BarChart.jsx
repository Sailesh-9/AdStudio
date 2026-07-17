import React from "react";

/* Lightweight SVG bar chart. data = [{ label, value }].
   Uses a 600-wide design space and scales uniformly to its container. */
export default function BarChart({
  data = [],
  height = 240,
  barColor = "var(--navy-500)",
  altColor = "var(--sky-500)",
  unit = "",
  prefix = "",
  alternate = false,
}) {
  const W = 600;
  const max = Math.max(...data.map((d) => d.value), 1);
  const pad = { top: 18, bottom: 34, left: 16, right: 16 };
  const innerH = height - pad.top - pad.bottom;
  const n = data.length || 1;
  const slot = (W - pad.left - pad.right) / n;
  const barW = Math.min(slot * 0.46, 46);

  return (
    <div className="chart-box">
      <svg viewBox={`0 0 ${W} ${height}`} width="100%" style={{ height: "auto", display: "block" }} role="img">
        {[0, 0.25, 0.5, 0.75, 1].map((g, i) => {
          const y = pad.top + innerH * (1 - g);
          return <line key={i} x1={pad.left} y1={y} x2={W - pad.right} y2={y} stroke="var(--line-soft)" strokeWidth="1" />;
        })}
        {data.map((d, i) => {
          const h = (d.value / max) * innerH;
          const cx = pad.left + slot * i + slot / 2;
          const y = pad.top + innerH - h;
          return (
            <g key={i}>
              <rect x={cx - barW / 2} y={y} width={barW} height={Math.max(h, 1)} rx="6" fill={alternate && i % 2 ? altColor : barColor} opacity="0.94">
                <title>{`${d.label}: ${prefix}${d.value}${unit}`}</title>
              </rect>
              <text x={cx} y={y - 7} textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--slate-600)" fontFamily="var(--font-body)">
                {prefix}{d.value}{unit}
              </text>
              <text x={cx} y={height - 12} textAnchor="middle" fontSize="12.5" fill="var(--slate-500)" fontFamily="var(--font-body)">
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
