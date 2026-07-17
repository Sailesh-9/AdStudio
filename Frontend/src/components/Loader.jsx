import React from "react";

export function Loader({ label = "Loading data…" }) {
  return (
    <div className="loader-wrap">
      <div className="spinner" />
      <div className="lbl">{label}</div>
    </div>
  );
}

export function MockFlag() {
  return (
    <span className="mock-flag" title="No backend detected on :8181 — showing sample data">
      <span className="dot" />
      Sample data
    </span>
  );
}

export default Loader;
