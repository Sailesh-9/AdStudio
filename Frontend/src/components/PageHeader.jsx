import React from "react";

/* Page title block with an icon, subtitle and optional action buttons. */
export default function PageHeader({ Icon, title, subtitle, actions }) {
  return (
    <div className="page-head">
      <div className="ph-left">
        {Icon && (
          <div className="ph-ico">
            <Icon />
          </div>
        )}
        <div>
          <h1>{title}</h1>
          {subtitle && <div className="ph-sub">{subtitle}</div>}
        </div>
      </div>
      {actions && <div className="ph-actions">{actions}</div>}
    </div>
  );
}
