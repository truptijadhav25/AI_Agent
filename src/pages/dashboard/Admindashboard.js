// src/pages/dashboard/AdminDashboard.jsx - SIDEBAR FIXED ✅
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Users from "../../components/users";
import Bots from "../../components/Bots";
import Performance from "../../components/Performance";
import "../../styles/Dashboard.css";

const AdminDashboard = ({ roleOverride }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  const [role, setRole] = useState("admin");
  const [notification, setNotification] = useState("");
  // ✅ NEW: Sidebar state management
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);

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

  // ✅ Sidebar handlers
  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    if (sidebarOpenMobile) setSidebarOpenMobile(false);
  };

  const handleMobileSidebarClose = () => {
    setSidebarOpenMobile(false);
  };

  const handleUserAction = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleBotAction = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handlePerformanceAction = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    // Close mobile sidebar when tab changes
    if (sidebarOpenMobile) setSidebarOpenMobile(false);
  };

  const getTabTitle = (tab) => {
    const titles = {
      overview: '📊 Overview',
      users: '👥 Users Management', 
      bots: '🤖 Bots Management',
      performance: '📈 Performance Analytics',
      integrations: '🔗 Integrations',
      compliance: '🛡️ Compliance'
    };
    return titles[tab] || tab.charAt(0).toUpperCase() + tab.slice(1);
  };

  const renderContent = () => {
    if (role !== 'admin') {
      return <UserContent activeTab={activeTab} />;
    }

    // ✅ MAIN CONTENT WRAPPER - Perfect sidebar offset
    const notificationElement = notification ? (
      <div className={`notification ${notification.includes('✅') ? 'success' : 'error'}`}>
        {notification}
        <button className="close-btn" onClick={() => setNotification('')}>×</button>
      </div>
    ) : null;

    // USERS TAB
    if (activeTab === 'users') {
      return (
        <div className="main-content-inner">
          {notificationElement}
          <Users onUserAction={handleUserAction} />
        </div>
      );
    }

    // BOTS TAB  
    if (activeTab === 'bots') {
      return (
        <div className="main-content-inner">
          {notificationElement}
          <Bots onBotAction={handleBotAction} />
        </div>
      );
    }

    // PERFORMANCE TAB
    if (activeTab === 'performance') {
      return (
        <div className="main-content-inner">
          {notificationElement}
          <Performance onAction={handlePerformanceAction} />
        </div>
      );
    }

    // OTHER TABS - Cards + Stats
    return (
      <div className="main-content-inner">
        {notificationElement}
        <AdminContent activeTab={activeTab} />
      </div>
    );
  };

  return (
    <div className="dashboard-layout">
      {/* ✅ MOBILE OVERLAY */}
      {sidebarOpenMobile && (
        <div 
          className="sidebar-overlay"
          onClick={handleMobileSidebarClose}
        />
      )}

      {/* ✅ SIDEBAR - Fixed positioning */}
      <div className={`sidebar ${sidebarCollapsed ? 'sidebar-collapsed' : ''} 
                      ${sidebarOpenMobile ? 'sidebar-open' : ''}`}>
        <Sidebar 
          activeTab={activeTab}
          user={mockUser}
          role={role}
          onLogout={handleLogout}
          onTabChange={handleTabChange}
          // ✅ Pass sidebar controls
          sidebarCollapsed={sidebarCollapsed}
          onSidebarToggle={handleSidebarToggle}
        />
      </div>

      {/* ✅ MAIN CONTENT WRAPPER - PERFECT SIDEBAR OFFSET */}
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="topbar">
  <h1 className="topbar-title">
    {role === 'admin' ? `👑 Admin Panel - ${getTabTitle(activeTab)}` : 'Dashboard'}
  </h1>
  
  {/* ✅ NEW TOPBAR RIGHT SECTION */}
  <div className="topbar-actions">
    {/* Notification Bell */}
    <button className={`notification-bell ${notification ? 'has-notification' : ''}`} 
            onClick={() => setNotification(notification ? '' : '🔔 New notification!')}>
      <span className="bell-icon">🔔</span>
      {notification && <span className="notification-dot"></span>}
    </button>
    
    {/* Profile Section */}
    <div className="profile-section">
      <div className="profile-avatar" title={mockUser.email}>
        {mockUser.firstName[0]}{mockUser.lastName[0] || ''}
      </div>
      <div className="profile-info">
        <div className="profile-name">{mockUser.firstName}</div>
        <div className="profile-role">{role.toUpperCase()}</div>
      </div>
      <button className="dropdown-arrow" onClick={handleLogout}>▼</button>
    </div>
  </div>
</div>
        <div className="content">
          <div className="main-column">
            {renderContent()}
          </div>
          
          {/* Side column only for overview */}
          {activeTab === 'overview' && (
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

// AdminContent, UserContent, getTabTitle remain the SAME
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

const UserContent = ({ activeTab }) => (
  <div className="cards-grid">
    <div className="card large">
      <div className="card-label">👋 Welcome Back!</div>
      <div className="card-value">Your Dashboard</div>
      <p>Access your account features and analytics here.</p>
    </div>
  </div>
);

const getTabTitle = (tab) => {
  const titles = {
    overview: '📊 Overview',
    users: '👥 Users Management', 
    bots: '🤖 Bots Management',
    performance: '📈 Performance Analytics',
    integrations: '🔗 Integrations',
    compliance: '🛡️ Compliance'
  };
  return titles[tab] || tab.charAt(0).toUpperCase() + tab.slice(1);
};

export default AdminDashboard;
