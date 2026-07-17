import React from "react";
import { IcTrendUp, IcTrendDown } from "../assets/icons.jsx";

/* KPI stat card: icon, label, big value, and optional trend %. */
export default function StatCard({ Icon, label, value, trend, foot }) {
  const hasTrend = trend !== undefined && trend !== null;
  const up = hasTrend && trend >= 0;
  return (
    <div className="stat">
      <div className="stat-top">
        <div className="stat-ico">{Icon && <Icon />}</div>
        {hasTrend && (
          <span className={`stat-trend ${up ? "trend-up" : "trend-down"}`}>
            {up ? <IcTrendUp size={13} /> : <IcTrendDown size={13} />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-value tnum">{value}</div>
      {foot && <div className="stat-foot">{foot}</div>}
    </div>
  );
}
