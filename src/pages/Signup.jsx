// src/pages/Signup.jsx - FULL CODE with Google + Mock API
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { signupUser } from '../services/api';
import "../styles/Signup.css"; 

function SignUpDefault() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // VALIDATION FUNCTION
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    return newErrors;
  };

  // EMAIL/PASSWORD SIGNUP
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await signupUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      navigate('/dashboard/user');
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  // GOOGLE SIGNUP (Mock)
  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockGoogleUser = {
        token: `mock-google-signup-${Date.now()}`,
        user: {
          id: 1000 + Math.floor(Math.random() * 1000),
          firstName: "Google",
          lastName: "User",
          email: `google${Math.floor(Math.random() * 1000)}@company.com`,
          role: "user"
        }
      };
      
      localStorage.setItem('token', mockGoogleUser.token);
      localStorage.setItem('user', JSON.stringify(mockGoogleUser.user));
      
      navigate('/dashboard/user');
    } catch (error) {
      setErrors({ general: "Google signup failed" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Create Account</h3>
        <p className="login-subtitle">Join thousands of users on our platform</p>
        
        {/* GOOGLE SIGN IN */}
        <div 
          className={`google-btn ${isLoading ? 'disabled' : ''}`}
          onClick={handleGoogleSignUp}
        >
          <FcGoogle className="google-icon" />
          Sign up with Google
        </div>
        
        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">or</span>
          <div className="divider-line"></div>
        </div>
        
        {/* FORM */}
        <form onSubmit={handleSignUp} noValidate>
          <div className="name-row">
            <div className="input-group">
              <label className="input-label">First Name*</label>
              <input
                name="firstName"
                className={`input-field ${errors.firstName ? 'error' : ''}`}
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            
            <div className="input-group">
              <label className="input-label">Last Name*</label>
              <input
                name="lastName"
                className={`input-field ${errors.lastName ? 'error' : ''}`}
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Email*</label>
            <input
              name="email"
              className={`input-field ${errors.email ? 'error' : ''}`}
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              disabled={isLoading}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Password*</label>
            <input
              name="password"
              className={`input-field ${errors.password ? 'error' : ''}`}
              placeholder="Min. 6 characters"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              disabled={isLoading}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Password*</label>
            <input
              name="confirmPassword"
              className={`input-field ${errors.confirmPassword ? 'error' : ''}`}
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              type="password"
              disabled={isLoading}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>
          
          <div className="form-footer">
            <label className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
              />
              <span>Remember me</span>
            </label>
            <Link to="/login" className="forgot-link">Already have account?</Link>
          </div>
          
          {errors.general && <div className="error-message general">{errors.general}</div>}
          
          <button 
            className="signin-btn"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account → Dashboard"}
          </button>
        </form>
        
        <div className="signup-section">
          <span className="signup-text">Already have an account?</span>
          <Link to="/login" className="signup-link">Sign in instead</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpDefault;
