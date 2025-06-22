import React from "react";
import { Link, NavLink } from "react-router";

function Sidebar() {
  return (
    <div className="border border-[var(--border-color)] rounded-md ml-6 p-3 bg-[var(--brand-color)]  h-[80vh]">
      <Link to="/" className="sidebar-link">
        Dashboard
      </Link>
      <Link to="/buy" className="sidebar-link">
        Buy Betelnut
      </Link>
      <Link to="/sell" className="sidebar-link">
        Sell Betelnut
      </Link>
    </div>
  );
}

export default Sidebar;
