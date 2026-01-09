
// src/pages/Logout.jsx - COMPLETE SESSION CLEAR
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css"; // Reuse your beautiful CSS

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ COMPLETE CLEANUP
    const clearSession = () => {
      // Clear ALL storage
      localStorage.clear();
      sessionStorage.clear();
      
      // Clear any other app state
      window.dispatchEvent(new Event('storage'));
      
      // Optional: Clear site data (modern browsers)
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach(name => caches.delete(name));
        });
      }
      
      console.log("✅ COMPLETE LOGOUT - All data cleared!");
    };

    clearSession();
    
    // Redirect after cleanup
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="dashboard" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e2e 0%, #050b23 100%)'
    }}>
      <div className="card" style={{ 
        padding: '40px 60px', 
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <div className="card-donut" style={{
          width: '80px',
          height: '80px',
          margin: '0 auto 20px',
          animation: 'spin 1s linear infinite'
        }}></div>
        <h2 style={{ 
          color: '#ffffff', 
          fontSize: '24px', 
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #ffffff, #e3e6ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Logging Out...
        </h2>
        <p style={{ color: '#9ba3ff', fontSize: '14px' }}>
          All sessions cleared. Redirecting to login...
        </p>
      </div>
    </div>
  );
};

export default Logout;
