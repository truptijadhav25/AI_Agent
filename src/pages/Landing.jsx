// src/pages/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import "../styles/Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* HEADER / BRAND */}
      <header className="landing-header">
        <div className="brand-logo">
          <img
            src="https://www.shutterstock.com/image-vector/ai-generate-logo-artificial-intelligence-600nw-2519534733.jpg"
            alt="TalkAli Logo"
          />
        </div>

        <h1>Welcome Back</h1>
        <p className="subtitle">
          Sign in to continue building the next generation of Voice AI agents
        </p>
      </header>


      {/* AUTHENTICATION CARD */}
      <main className="auth-card">
        {/* Card Top */}
        <div className="card-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="demo-link" onClick={() => navigate("/demo")}>
            view-demo ↗
          </span>
        </div>

        {/* Card Body */}
        <div className="card-body">
          {/* Email Input */}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
          />

          {/* Password Input */}
          <div className="password-row">
            <label htmlFor="password">Password</label>
            <span
              className="forgot"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </span>
          </div>
          <input
            id="password"
            type="password"
            placeholder="********"
            autoComplete="current-password"
          />

          {/* Sign In Button */}
          <button
            type="button"
            className="primary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Sign in to your account →
          </button>

          {/* Divider */}
          <div className="divider">OR CONTINUE WITH</div>

          {/* Social Login */}
          <div className="social-buttons">
            <button className="social-btn" type="button">
              <FaGithub /> GitHub
            </button>
            <button className="social-btn" type="button">
              <FcGoogle /> Google
            </button>
          </div>

          {/* Terms */}
          <p className="terms">
            By logging in, you agree to our{" "}
            <span>Terms of Service</span> and <span>Privacy Policy</span>
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <div className="landing-footer">
        <span className="footer-text">New to TalkAI?</span>

        <button
          className="footer-link"
          onClick={() => navigate("/signup")}
        >
          Create account →
        </button>
      </div>



    </div>
  );
};

export default Landing;
