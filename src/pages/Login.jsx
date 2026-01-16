// src/pages/Login.jsx - FULL CODE with Google Sign In + Mock API
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { loginUser } from '../services/api';
import "../styles/Login.css";

function SignInDefault() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // VALIDATION FUNCTION
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email";
    
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    
    return newErrors;
  };

  // EMAIL/PASSWORD LOGIN
  const handleSignIn = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await loginUser(email, password);
      
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      // Role-based redirect
     if (response.user.role === 'admin') {
  console.log("admin");  // Fix empty console.log
  navigate('/dashboard/admin');  // ✅ CORRECT
} else {
  console.log("user");
  navigate('/dashboard/user');   // ✅ CORRECT
}
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  // GOOGLE SIGN IN (Mock)
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    
    try {
      // Mock Google OAuth response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock Google user (admin role for demo)
      const mockGoogleUser = {
        token: `mock-google-jwt-${Date.now()}`,
        user: {
          id: 999,
          email: "google.user@company.com",
          firstName: "Google",
          lastName: "User",
          role: "admin" // or "user"
        }
      };
      
      localStorage.setItem('token', mockGoogleUser.token);
      localStorage.setItem('user', JSON.stringify(mockGoogleUser.user));
      
      navigate('/dashboard/admin');
    } catch (error) {
      setErrors({ general: "Google sign in failed" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Sign In</h3>
        <p className="login-subtitle">Enter your credentials or use Google</p>
        
        {/* Test Credentials Display */}
        <div className="test-creds">
          <div><strong>👑 Admin:</strong> admin@company.com / admin123</div>
          <div><strong>👤 User:</strong> john.doe@company.com / user123</div>
        </div>

        {/* GOOGLE SIGN IN */}
        <div 
  className={`google-btn ${isLoading ? 'disabled' : ''}`}
  onClick={handleGoogleSignIn}
  style={isLoading ? { cursor: 'not-allowed', opacity: 0.7 } : {}}
>
  <FcGoogle className="google-icon" />
  Sign In with Google
</div>
        
        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">or</span>
          <div className="divider-line"></div>
        </div>
        
        {/* EMAIL/PASSWORD FORM */}
        <form onSubmit={handleSignIn} noValidate>
          <div className="input-group">
            <label className="input-label">Email*</label>
            <input
              className={`input-field ${errors.email ? 'error' : ''}`}
              placeholder="admin@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
              }}
              type="email"
              disabled={isLoading}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Password*</label>
            <input
              className={`input-field ${errors.password ? 'error' : ''}`}
              placeholder="admin123"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
              }}
              type="password"
              disabled={isLoading}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          {/* Checkbox & Forgot Password */}
          <div className="form-footer">
            <label className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
              />
              <span>Keep me logged in</span>
            </label>
            <button 
  className="forgot-link" 
  type="button"
  onClick={() => alert('Coming soon!')}
  disabled={isLoading}
>
  Forgot Password?
</button>
          </div>
          
          {errors.general && <div className="error-message general">{errors.general}</div>}
          
          <button 
            className="signin-btn"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In → Dashboard"}
          </button>
        </form>
        
        <div className="signup-section">
          <span className="signup-text">Don't have an account?</span>
          <a href="/signup" className="signup-link">Create account</a>
        </div>
      </div>
    </div>
  );
}

export default SignInDefault;
