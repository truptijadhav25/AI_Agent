// src/pages/Landing.jsx - FIXED
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate("/chat");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Business Chatbot System</h1>
        <p>
          Smart chatbot to interact with customers and generate business leads.
        </p>

        <div className="button-group">
          <button className="btn-primary" onClick={goToChat}>
            Start Chat
          </button>
          <button className="btn-secondary" onClick={goToLogin}>
            Admin Login
          </button>
          <button className="btn-secondary" onClick={goToSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
