import React from "react";

/* value/max -> filled bar. Turns amber > 85% and red >= 100%. */
export default function ProgressBar({ value = 0, max = 100, tone }) {
  const pct = Math.max(0, Math.min(100, max ? (value / max) * 100 : 0));
  const cls = tone || (pct >= 100 ? "danger" : pct >= 85 ? "warn" : "");
  return (
    <div className={`progress ${cls}`}>
      <span style={{ width: `${pct}%` }} />
    </div>
  );
}
