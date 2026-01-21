import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      {/* Header */}
      <div className="signup-header">
        <div className="landing-header">
          <div className="brand-logo">
            <img
              src="https://www.shutterstock.com/image-vector/ai-generate-logo-artificial-intelligence-600nw-2519534733.jpg"
              alt="TalkAli Logo"
            />
          </div>

          <h1>Create your account</h1>
          <p className="subtitle">
            Join us and start your journey in just a few steps
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="auth-card">
        <div className="card-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <div className="card-body">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Email</label>
          <input type="email" placeholder="name@example.com" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <label>Confirm Password</label>
          <input type="password" placeholder="••••••••" />

          <button className="primary-btn">
            Create account →
          </button>

          <div className="divider">OR SIGN UP WITH</div>

          <div className="social-buttons">
            <button className="social-btn">Google</button>
            <button className="social-btn">GitHub</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="signup-footer">
        <span>Already have an account?</span>
        <button
          className="link-btn"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signup;
