/* AdStudio · Inline SVG icon set (no external icon dependency).
   Every icon inherits `currentColor` and accepts standard props. */
import React from "react";

const S = ({ children, size = 24, fill = "none", ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={fill}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

/* ---- Navigation ---- */
export const IcDashboard = (p) => (<S {...p}><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></S>);
export const IcAdvertiser = (p) => (<S {...p}><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-3"/><path d="M9 9h0M9 12h0M9 15h0"/></S>);
export const IcCampaign = (p) => (<S {...p}><path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M14 8a4 4 0 0 1 0 8"/><path d="M17 5a8 8 0 0 1 0 14"/></S>);
export const IcMediaPlan = (p) => (<S {...p}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><path d="M7 13h4M7 17h7"/></S>);
export const IcCreative = (p) => (<S {...p}><rect x="3" y="3" width="18" height="18" rx="2.2"/><circle cx="8.5" cy="8.5" r="1.6"/><path d="M21 15l-5-5L5 21"/></S>);
export const IcDelivery = (p) => (<S {...p}><path d="M3 12h4l2 5 4-12 2 7h6"/></S>);
export const IcPublisher = (p) => (<S {...p}><circle cx="6" cy="18" r="2.2"/><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 5a15 15 0 0 1 15 15"/></S>);
export const IcFinance = (p) => (<S {...p}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M12 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/><path d="M7 13h.01M17 17h.01"/></S>);
export const IcAnalytics = (p) => (<S {...p}><path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6" rx="0.8"/><rect x="12.5" y="7" width="3" height="10" rx="0.8"/><rect x="18" y="13" width="3" height="4" rx="0.8" transform="translate(-3 0)"/></S>);
export const IcBell = (p) => (<S {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></S>);
export const IcAdmin = (p) => (<S {...p}><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></S>);

/* ---- Stat / metric ---- */
export const IcTarget = (p) => (<S {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></S>);
export const IcLayers = (p) => (<S {...p}><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></S>);
export const IcEye = (p) => (<S {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></S>);
export const IcPointer = (p) => (<S {...p}><path d="m4 4 7 16 2-7 7-2L4 4Z"/></S>);
export const IcWallet = (p) => (<S {...p}><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18"/><path d="M16 14h2"/></S>);
export const IcMoney = (p) => (<S {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.2c0-1 .9-1.7 2.5-1.7s2.5.8 2.5 1.8c0 2.4-5 1.4-5 3.8 0 1 .9 1.9 2.5 1.9s2.5-.8 2.5-1.8"/></S>);
export const IcTrendUp = (p) => (<S {...p}><path d="m3 17 6-6 4 4 8-8"/><path d="M21 11V7h-4"/></S>);
export const IcTrendDown = (p) => (<S {...p}><path d="m3 7 6 6 4-4 8 8"/><path d="M21 13v4h-4"/></S>);
export const IcChart = (p) => (<S {...p}><path d="M3 3v18h18"/><path d="m7 14 3-3 3 2 5-6"/></S>);
export const IcCheckCircle = (p) => (<S {...p}><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.3 2.3L16 9"/></S>);
export const IcPercent = (p) => (<S {...p}><line x1="19" y1="5" x2="5" y2="19"/><circle cx="7" cy="7" r="2.2"/><circle cx="17" cy="17" r="2.2"/></S>);

/* ---- Actions / UI ---- */
export const IcSearch = (p) => (<S {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></S>);
export const IcPlus = (p) => (<S {...p}><path d="M12 5v14M5 12h14"/></S>);
export const IcChevronDown = (p) => (<S {...p}><path d="m6 9 6 6 6-6"/></S>);
export const IcChevronRight = (p) => (<S {...p}><path d="m9 6 6 6-6 6"/></S>);
export const IcCheck = (p) => (<S {...p}><path d="m5 12 5 5L20 7"/></S>);
export const IcClose = (p) => (<S {...p}><path d="M6 6l12 12M18 6 6 18"/></S>);
export const IcLock = (p) => (<S {...p}><rect x="4.5" y="11" width="15" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.4" fill="currentColor" stroke="none"/></S>);
export const IcShieldX = (p) => (<S {...p}><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/><path d="m9.5 9.5 5 5M14.5 9.5l-5 5"/></S>);
export const IcLogout = (p) => (<S {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></S>);
export const IcUser = (p) => (<S {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/></S>);
export const IcUsers = (p) => (<S {...p}><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.3 2.9-5 6.5-5s6.5 1.7 6.5 5"/><path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M17.5 20c0-2.6-1-4.2-3-4.8"/></S>);
export const IcSettings = (p) => (<S {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 13a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 9 4.6V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.4.9Z"/></S>);
export const IcEdit = (p) => (<S {...p}><path d="M11 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"/></S>);
export const IcTrash = (p) => (<S {...p}><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></S>);
export const IcFilter = (p) => (<S {...p}><path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z"/></S>);
export const IcDownload = (p) => (<S {...p}><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16"/></S>);
export const IcUpload = (p) => (<S {...p}><path d="M12 16V4m0 0 4 4m-4-4L8 8M4 19h16"/></S>);
export const IcSend = (p) => (<S {...p}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/></S>);
export const IcRefresh = (p) => (<S {...p}><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v5h-5"/></S>);
export const IcCalendar = (p) => (<S {...p}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></S>);
export const IcClock = (p) => (<S {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></S>);
export const IcAlert = (p) => (<S {...p}><path d="M10.3 3.3 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></S>);
export const IcInfo = (p) => (<S {...p}><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></S>);
export const IcMore = (p) => (<S {...p}><circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/></S>);
export const IcMenu = (p) => (<S {...p}><path d="M3 6h18M3 12h18M3 18h18"/></S>);
export const IcMail = (p) => (<S {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></S>);
export const IcPhone = (p) => (<S {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></S>);
export const IcBuilding = (p) => (<S {...p}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h0M15 8h0M9 12h0M15 12h0M9 16h0M15 16h0"/></S>);
export const IcDoc = (p) => (<S {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></S>);
export const IcInbox = (p) => (<S {...p}><path d="M3 12h5l2 3h4l2-3h5"/><path d="M5 5h14l2 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5l2-7Z"/></S>);
export const IcLink = (p) => (<S {...p}><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></S>);
export const IcReceipt = (p) => (<S {...p}><path d="M5 3v18l2-1 2 1 2-1 2 1 2-1 2 1V3l-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M9 8h6M9 12h6"/></S>);
export const IcSparkle = (p) => (<S {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></S>);
export const IcGrid = (p) => (<S {...p}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></S>);
export const IcList = (p) => (<S {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></S>);
export const IcGlobe = (p) => (<S {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></S>);
export const IcCheckList = (p) => (<S {...p}><path d="M11 6h9M11 12h9M11 18h9"/><path d="m3 6 1.2 1.2L7 4.5M3 12l1.2 1.2L7 10.5M3 18l1.2 1.2L7 16.5"/></S>);

/* ---- Creative format icons (filled, for thumbnails) ---- */
export const IcFmtBanner = (p) => (<S {...p}><rect x="3" y="7" width="18" height="10" rx="1.5"/><path d="M3 13h18"/></S>);
export const IcFmtVideo = (p) => (<S {...p}><rect x="3" y="5" width="18" height="14" rx="2.2"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none"/></S>);
export const IcFmtNative = (p) => (<S {...p}><rect x="3" y="4" width="18" height="16" rx="2"/><rect x="6" y="7" width="6" height="5" rx="1"/><path d="M15 8h3M15 11h3M6 15h12M6 17.5h8"/></S>);
export const IcFmtAudio = (p) => (<S {...p}><path d="M4 9v6M8 6v12M12 3v18M16 7v10M20 10v4"/></S>);
export const IcFmtRich = (p) => (<S {...p}><rect x="3" y="3" width="18" height="18" rx="2.2"/><path d="M12 8v8M8 12h8"/></S>);
export const IcFmtText = (p) => (<S {...p}><path d="M5 5h14M5 5v3M12 5v14M9 19h6"/></S>);

export default {};
