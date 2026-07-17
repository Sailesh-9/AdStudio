/* ============================================================
   AdStudio · Portal registry
   Single source of truth for every feature/portal. Drives:
     - the left sidebar (grouped by `section`)
     - the route table in App.jsx
   `key` must match the strings returned by /eligibilityList.
   ============================================================ */

import React from "react";
import {
  IcDashboard,
  IcAdvertiser,
  IcCampaign,
  IcMediaPlan,
  IcCreative,
  IcDelivery,
  IcPublisher,
  IcFinance,
  IcAnalytics,
  IcBell,
  IcAdmin,
} from "../assets/icons.jsx";

export const PORTALS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    section: "Overview",
    Icon: IcDashboard,
    title: "Dashboard",
    subtitle: "Live snapshot of campaigns, spend and delivery",
  },
  {
    key: "advertiser",
    label: "Advertisers & Brands",
    path: "/advertisers",
    section: "Campaign Management",
    Icon: IcAdvertiser,
    title: "Advertisers & Brands",
    subtitle: "Manage advertiser accounts and brand budgets",
  },
  {
    key: "campaign",
    label: "Campaign Briefs",
    path: "/campaigns",
    section: "Campaign Management",
    Icon: IcCampaign,
    title: "Campaign Planning & Briefing",
    subtitle: "Briefs, objectives and target audiences",
  },
  {
    key: "mediaplan",
    label: "Media Planning",
    path: "/media-plans",
    section: "Campaign Management",
    Icon: IcMediaPlan,
    title: "Media Plan & Insertion Orders",
    subtitle: "Plan channels, schedule line items, issue IOs",
  },
  {
    key: "creative",
    label: "Creative Studio",
    path: "/creative",
    section: "Campaign Management",
    Icon: IcCreative,
    title: "Creative Studio",
    subtitle: "Assets, approval workflow and asset links",
  },
  {
    key: "delivery",
    label: "Delivery & Pacing",
    path: "/delivery",
    section: "Operations",
    Icon: IcDelivery,
    title: "Delivery & Performance Tracking",
    subtitle: "Delivery records and pacing alerts",
  },
  {
    key: "publisher",
    label: "Publisher Portal",
    path: "/publisher",
    section: "Operations",
    Icon: IcPublisher,
    title: "Publisher Portal",
    subtitle: "Insertion order inbox, delivery and invoices",
  },
  {
    key: "finance",
    label: "Billing & Finance",
    path: "/finance",
    section: "Finance & Insights",
    Icon: IcFinance,
    title: "Billing, Reconciliation & Payments",
    subtitle: "Client invoices, publisher reconciliation, payments",
  },
  {
    key: "analytics",
    label: "Analytics & Reports",
    path: "/analytics",
    section: "Finance & Insights",
    Icon: IcAnalytics,
    title: "Campaign Analytics & Reporting",
    subtitle: "Impressions, spend pacing, CPM, CTR and ROI",
  },
  {
    key: "notifications",
    label: "Notifications",
    path: "/notifications",
    section: "System",
    Icon: IcBell,
    title: "Notifications",
    subtitle: "In-app alerts across all your campaigns",
  },
  {
    key: "admin",
    label: "Admin Console",
    path: "/admin",
    section: "System",
    Icon: IcAdmin,
    title: "Admin Console",
    subtitle: "Users, audit logs, channels and rate cards",
  },
];

// Sidebar section order
export const SECTION_ORDER = [
  "Overview",
  "Campaign Management",
  "Operations",
  "Finance & Insights",
  "System",
];

export const getPortalByPath = (path) => PORTALS.find((p) => p.path === path);
export const getPortalByKey = (key) => PORTALS.find((p) => p.key === key);

export default PORTALS;
