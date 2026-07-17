import React from "react";

/* Maps every status string used across AdStudio to a badge colour. */
const MAP = {
  // greens — good / done / paid / approved / live
  Active: "green", Approved: "green", Paid: "green", Confirmed: "green",
  Accepted: "green", Reconciled: "green", Live: "green", Completed: "gray",

  // blue / navy — in progress / submitted / sent
  Submitted: "blue", Sent: "blue", Ordered: "blue", Issued: "blue",
  Delivered: "navy", Received: "blue", Linked: "blue",

  // amber — pending / draft / review
  Draft: "gray", PendingApproval: "amber", Pending: "amber",
  PendingVerification: "amber", Planned: "amber", Open: "amber",
  RevisionRequired: "amber", Actioned: "blue",

  // red — bad / rejected / disputed / overdue
  Rejected: "red", Disputed: "red", Overdue: "red", Discrepancy: "red",
  Suspended: "red",

  // neutral
  Inactive: "gray", Archived: "gray", Discontinued: "gray",
  Replaced: "gray", Removed: "gray", Closed: "gray", Read: "gray",
  Paused: "amber", Unread: "blue",

  // pacing alert types
  UnderDelivery: "red", OverDelivery: "amber",
  BudgetExhausted: "red", FlightEndApproaching: "amber",
};

export default function StatusBadge({ status, withDot = true }) {
  if (!status || status === "—") return <span className="cell-muted">—</span>;
  const tone = MAP[status] || "gray";
  // Humanize CamelCase: PendingApproval -> Pending Approval
  const label = String(status).replace(/([a-z])([A-Z])/g, "$1 $2");
  return (
    <span className={`badge badge-${tone}`}>
      {withDot && <span className="dot" />}
      {label}
    </span>
  );
}
