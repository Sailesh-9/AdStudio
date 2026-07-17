import React from "react";

/* Tab strip. `tabs` = [{ key, label, count?, Icon? }]. Controlled. */
export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map((t) => {
        const isActive = t.key === active;
        const Icon = t.Icon;
        return (
          <button
            key={t.key}
            role="tab"
            aria-selected={isActive}
            className={`tab ${isActive ? "active" : ""}`}
            onClick={() => onChange(t.key)}
          >
            {Icon && <Icon />}
            {t.label}
            {t.count != null && <span className="count">{t.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
