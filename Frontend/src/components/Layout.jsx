import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import "../styles/layout.css";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar open={mobileOpen} onNavigate={() => setMobileOpen(false)} />
      <div className={`sb-backdrop ${mobileOpen ? "show" : ""}`} onClick={() => setMobileOpen(false)} />
      <div className="main-col">
        <Navbar onBurger={() => setMobileOpen((o) => !o)} />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
