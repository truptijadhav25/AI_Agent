// src/pages/dashboard/AdminDashboard.jsx - SIDEBAR + 80% USERS ✅
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Users from "../../components/users";
import "../../styles/Dashboard.css";

const AdminDashboard = ({ roleOverride }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  const [role, setRole] = useState("admin");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (roleOverride) {
      setRole(roleOverride);
    } else {
      const userData = localStorage.getItem('user');
      if (userData) {
        setRole(JSON.parse(userData).role || "admin");
      }
    }
  }, [roleOverride]);

  // ✅ EXTRACT activeTab FROM URL
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    if (lastSegment && lastSegment !== 'dashboard') {
      setActiveTab(lastSegment);
    }
  }, [location]);

  const mockUser = {
    firstName: role === "admin" ? "Admin" : "John",
    lastName: role === "admin" ? "" : "Doe",
    email: role === "admin" ? "admin@company.com" : "john@company.com",
    role
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const handleUserAction = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const renderContent = () => {
    if (role !== 'admin') {
      return <UserContent activeTab={activeTab} />;
    }

    // ✅ USERS TAB = 80% WIDTH + KEEP SIDEBAR
    if (activeTab === 'users') {
      return (
        <div className="users-wide-mode">
          {notification && (
            <div className={`notification ${notification.includes('✅') ? 'success' : 'error'}`}>
              {notification}
              <button className="close-btn" onClick={() => setNotification('')}>×</button>
            </div>
          )}
          <Users onUserAction={handleUserAction} />
        </div>
      );
    }

    // ✅ OTHER TABS = NORMAL DASHBOARD
    const notificationElement = notification ? (
      <div className={`notification ${notification.includes('✅') ? 'success' : 'error'}`}>
        {notification}
        <button className="close-btn" onClick={() => setNotification('')}>×</button>
      </div>
    ) : null;

    return (
      <>
        {notificationElement}
        <AdminContent activeTab={activeTab} />
      </>
    );
  };

  return (
    <div className="dashboard">
      {/* ✅ SIDEBAR ALWAYS VISIBLE */}
      <Sidebar 
        activeTab={activeTab}
        user={mockUser}
        role={role}
        onLogout={handleLogout}
        onTabChange={handleTabChange}
      />
      
      <div className="main">
        <div className="topbar">
          <h1 className="topbar-title">
            {role === 'admin' ? `👑 Admin Panel - ${activeTab}` : 'Dashboard'}
          </h1>
          <div className="topbar-user">
            <div className="avatar">
              {mockUser.firstName[0]}{mockUser.lastName[0] || ''}
            </div>
            <span className="username">{mockUser.firstName} ({role})</span>
          </div>
        </div>
        
        <div className="content">
          <div className="main-column">
            {renderContent()}
          </div>
          {/* ✅ HIDE SIDE PANEL FOR USERS TAB */}
          {activeTab !== 'users' && (
            <div className="side-column">
              <div className="panel">
                <div className="panel-header">
                  <span>Quick Stats</span>
                </div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-value">50+</div>
                    <div className="stat-label">Total Users</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">42</div>
                    <div className="stat-label">Active</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Simplified AdminContent
const AdminContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'overview':
      return (
        <div className="cards-grid">
          <div className="card">
            <div className="card-label">Total Users</div>
            <div className="card-value">50+</div>
            <div className="card-donut"></div>
          </div>
          <div className="card">
            <div className="card-label">Active Users</div>
            <div className="card-value">42</div>
          </div>
          <div className="card">
            <div className="card-label">Pro Users</div>
            <div className="card-value">18</div>
          </div>
          <div className="card">
            <div className="card-label">Enterprise</div>
            <div className="card-value">8</div>
          </div>
        </div>
      );

    default:
      return (
        <div className="empty-state">
          <h3>{getTabTitle(activeTab)}</h3>
          <p>Content coming soon</p>
        </div>
      );
  }
};

const getTabTitle = (tab) => {
  const titles = {
    bots: '🤖 Bots Management',
    performance: '📈 Performance Analytics',
    integrations: '🔗 Integrations',
    compliance: '🛡️ Compliance'
  };
  return titles[tab] || tab;
};

const UserContent = ({ activeTab }) => (
  <div className="cards-grid">
    <div className="card large">
      <div className="card-label">👋 Welcome Back!</div>
      <div className="card-value">Your Dashboard</div>
      <p>Access your account features and analytics here.</p>
    </div>
  </div>
);

export default AdminDashboard;
