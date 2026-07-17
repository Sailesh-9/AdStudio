import React from "react";

/* AdStudio logo mark — an upward "A" charted like a rising metric,
   with a sky-blue baseline. Pure SVG so it scales crisply anywhere. */
export default function Logo({ size = 40, className = "" }) {
  const id = React.useId();
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AdStudio"
      role="img"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f5bc4" />
          <stop offset="1" stopColor="#0e1f44" />
        </linearGradient>
        <linearGradient id={`sk-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5fa3ff" />
          <stop offset="1" stopColor="#3d8bff" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill={`url(#bg-${id})`} />
      <rect x="2" y="2" width="60" height="60" rx="16" fill="none" stroke="rgba(255,255,255,0.12)" />
      <path
        d="M19 45 L32 17 L45 45"
        fill="none"
        stroke="#ffffff"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="24.5" y1="37" x2="39.5" y2="37" stroke={`url(#sk-${id})`} strokeWidth="4.6" strokeLinecap="round" />
      <circle cx="45" cy="45" r="3.4" fill="#5fa3ff" />
    </svg>
  );
}
