import React from "react";

/* A friendly cartoon user avatar shown above the sign-in form. */
export function AuthAvatar({ size = 76, className = "" }) {
  const id = React.useId();
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 96 96" fill="none" role="img" aria-label="User">
      <defs>
        <linearGradient id={`ring-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3d8bff" />
          <stop offset="1" stopColor="#1f4396" />
        </linearGradient>
      </defs>
      <circle cx="48" cy="48" r="46" fill="#eef5ff" stroke={`url(#ring-${id})`} strokeWidth="3" />
      {/* shoulders */}
      <path d="M20 84a28 28 0 0 1 56 0" fill="#1f4396" />
      <path d="M20 84a28 28 0 0 1 56 0" fill="url(#ring-" opacity="0" />
      {/* collar */}
      <path d="M38 70l10 8 10-8-4 14H42z" fill="#ffffff" opacity="0.9" />
      {/* head */}
      <circle cx="48" cy="42" r="17" fill="#ffd9bf" />
      {/* hair */}
      <path d="M31 41c0-11 8-18 17-18s17 7 17 18c0-6-6-8-10-8-3 0-4 2-7 2s-4-2-7-2c-4 0-10 2-10 8Z" fill="#2a3553" />
      {/* eyes */}
      <circle cx="42" cy="42" r="1.9" fill="#2a3553" />
      <circle cx="54" cy="42" r="1.9" fill="#2a3553" />
      {/* smile */}
      <path d="M43 48c1.6 2 7.4 2 9 0" stroke="#c9744a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* A stylized "campaign command center" illustration:
   a person reviewing live ad-performance dashboards. */
export function LoginArt({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 440 320" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Campaign analytics illustration">
      <defs>
        <linearGradient id="la-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b3270" />
          <stop offset="1" stopColor="#13265a" />
        </linearGradient>
        <linearGradient id="la-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#3d8bff" />
          <stop offset="1" stopColor="#7db4ff" />
        </linearGradient>
        <linearGradient id="la-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5fa3ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#5fa3ff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ambient blobs */}
      <circle cx="360" cy="70" r="60" fill="#3d8bff" opacity="0.12" />
      <circle cx="70" cy="250" r="46" fill="#3d8bff" opacity="0.1" />

      {/* main dashboard panel */}
      <rect x="120" y="36" width="248" height="158" rx="14" fill="url(#la-screen)" stroke="rgba(255,255,255,0.12)" />
      <rect x="120" y="36" width="248" height="30" rx="14" fill="rgba(255,255,255,0.05)" />
      <circle cx="138" cy="51" r="3.2" fill="#ff6b81" />
      <circle cx="150" cy="51" r="3.2" fill="#ffc24b" />
      <circle cx="162" cy="51" r="3.2" fill="#3ddc97" />
      <rect x="300" y="46" width="54" height="10" rx="5" fill="rgba(255,255,255,0.14)" />

      {/* line/area chart inside */}
      <path d="M138 150 L172 120 L200 132 L228 96 L262 110 L296 78 L330 92" stroke="#7db4ff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M138 150 L172 120 L200 132 L228 96 L262 110 L296 78 L330 92 L330 176 L138 176 Z" fill="url(#la-area)" />
      <circle cx="296" cy="78" r="4.5" fill="#fff" stroke="#3d8bff" strokeWidth="2.5" />

      {/* KPI chips */}
      <rect x="138" y="78" width="56" height="30" rx="7" fill="rgba(255,255,255,0.07)" />
      <rect x="146" y="85" width="26" height="5" rx="2.5" fill="#7db4ff" />
      <rect x="146" y="95" width="40" height="7" rx="3.5" fill="#ffffff" opacity="0.85" />

      {/* floating bar-chart card */}
      <g transform="translate(40 150)">
        <rect x="0" y="0" width="132" height="120" rx="13" fill="#ffffff" />
        <rect x="0" y="0" width="132" height="120" rx="13" fill="none" stroke="#e4eaf4" />
        <rect x="16" y="16" width="60" height="8" rx="4" fill="#cdd9f0" />
        <rect x="16" y="86" width="14" height="20" rx="3" fill="url(#la-bar)" />
        <rect x="38" y="70" width="14" height="36" rx="3" fill="url(#la-bar)" />
        <rect x="60" y="54" width="14" height="52" rx="3" fill="url(#la-bar)" />
        <rect x="82" y="64" width="14" height="42" rx="3" fill="#bcd3f7" />
        <rect x="104" y="44" width="14" height="62" rx="3" fill="#bcd3f7" />
      </g>

      {/* floating donut card */}
      <g transform="translate(300 168)">
        <rect x="0" y="0" width="112" height="112" rx="13" fill="#ffffff" stroke="#e4eaf4" />
        <circle cx="40" cy="56" r="26" fill="none" stroke="#e4eaf4" strokeWidth="9" />
        <circle cx="40" cy="56" r="26" fill="none" stroke="#1f4396" strokeWidth="9" strokeDasharray="92 164" strokeLinecap="round" transform="rotate(-90 40 56)" />
        <circle cx="40" cy="56" r="26" fill="none" stroke="#3d8bff" strokeWidth="9" strokeDasharray="48 164" strokeDashoffset="-92" strokeLinecap="round" transform="rotate(-90 40 56)" />
        <rect x="76" y="40" width="26" height="6" rx="3" fill="#1f4396" />
        <rect x="76" y="56" width="26" height="6" rx="3" fill="#3d8bff" />
        <rect x="76" y="72" width="18" height="6" rx="3" fill="#cdd9f0" />
      </g>

      {/* the person (megaphone marketer) */}
      <g transform="translate(176 150)">
        {/* body */}
        <path d="M22 150 C22 116 40 100 58 100 C76 100 94 116 94 150 Z" fill="#1f4396" />
        {/* arm holding tablet */}
        <rect x="70" y="118" width="40" height="9" rx="4.5" fill="#ffd9bf" transform="rotate(-18 70 118)" />
        <rect x="96" y="96" width="34" height="24" rx="4" fill="#0e1f44" stroke="#3d8bff" strokeWidth="2" transform="rotate(-18 96 96)" />
        {/* head */}
        <circle cx="58" cy="84" r="16" fill="#ffd9bf" />
        <path d="M42 83c0-10 7-16 16-16s16 6 16 16c0-5-5-7-9-7-3 0-4 2-7 2s-4-2-7-2c-4 0-9 2-9 7Z" fill="#2a3553" />
        <circle cx="53" cy="84" r="1.7" fill="#2a3553" />
        <circle cx="63" cy="84" r="1.7" fill="#2a3553" />
        <path d="M54 89c1.3 1.6 5.7 1.6 7 0" stroke="#c9744a" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </g>

      {/* little sparkles */}
      <path d="M392 130l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#5fa3ff" opacity="0.8" />
      <path d="M96 110l1.4 4 4 1.4-4 1.4-1.4 4-1.4-4-4-1.4 4-1.4z" fill="#5fa3ff" opacity="0.7" />
    </svg>
  );
}

export default LoginArt;
