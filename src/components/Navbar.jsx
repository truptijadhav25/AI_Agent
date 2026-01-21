import React, { useState } from "react";
import "../styles/Navbar.css";
import DemoModal from "./DemoModal"; // Make sure DemoModal.jsx is in the same folder

const Navbar = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">TalkAI</div>

        <ul className="nav-links">
          <li>Product</li>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Company</li>
        </ul>

        <button className="nav-btn" onClick={() => setIsDemoOpen(true)}>
          Book a Demo
        </button>
      </nav>

      {/* Render the DemoModal */}
      {isDemoOpen && <DemoModal onClose={() => setIsDemoOpen(false)} />}
    </>
  );
};

export default Navbar;
