import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">

        {/* Logo */}
        <div className="login-logo">
          <h2>TalkAI</h2>
        </div>

        {/* Heading */}
        <h1>Welcome back</h1>
        <p className="subtitle">
          Sign in to continue building the next generation of Voice AI agents
        </p>

        {/* Card */}
        <div className="login-card">
          <label>Email</label>
          <input type="email" placeholder="name@example.com" />

          <div className="password-row">
            <label>Password</label>
            <span className="forgot">Forgot password?</span>
          </div>
          <input type="password" placeholder="********" />

          <button className="primary-btn">
            Sign in to your account →
          </button>

          <div className="divider">OR CONTINUE WITH</div>

          <div className="social-buttons">
            <button className="social-btn">GitHub</button>
            <button className="social-btn">Google</button>
          </div>

          <p className="terms">
            By logging in, you agree to our{" "}
            <span>Terms of Service</span> and <span>Privacy Policy</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
