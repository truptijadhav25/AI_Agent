// src/components/Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      <h1 className="topbar-title">Home</h1>
      <div className="topbar-user">
        <div className="avatar">S</div>
        <div className="username">ABC</div>
        <div className="dropdown-arrow">▼</div>
      </div>
    </div>
  );
};

export default Topbar;
