// src/components/Sidebar.jsx - LATEST VERSION ✅ PERFECTLY INTEGRATED
import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ 
  activeTab = "overview", 
  user, 
  onLogout, 
  role = "user",
  onTabChange  // ✅ NEW PROP for AdminDashboard integration
}) => {
  const navigate = useNavigate();

  // ✅ handleLogout FUNCTION - Compatible with both parent & standalone
  const handleLogout = () => {
    if (onLogout) {
      onLogout();  // Call parent onLogout (AdminDashboard)
    } else {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login");
    }
  };

  // ✅ COMPLETE MENU ITEMS - ADMIN (6 tabs) + AGENT (5 tabs) + USER (3 tabs)
  const menuItems = {
    admin: [
      { id: "overview", label: "📊 Dashboard", icon: "📈" },
      { id: "users", label: "👥 Users", icon: "👤" },
      { id: "bots", label: "🤖 Bots", icon: "🤖" },
      { id: "performance", label: "📈 Performance", icon: "📊" },
      { id: "integrations", label: "🔗 Integrations", icon: "🔌" },
      { id: "compliance", label: "🛡️ Compliance", icon: "🔒" }
    ],
    agent: [
      { id: "inbox", label: "💬 Inbox", icon: "📨" },
      { id: "live", label: "🎙️ Live Interaction", icon: "📞" },
      { id: "assist", label: "🤖 Assist", icon: "💡" },
      { id: "acw", label: "📝 After-Call Work", icon: "✅" },
      { id: "performance", label: "📊 My Performance", icon: "🏆" }
    ],
    user: [
      { id: "overview", label: "📊 Overview", icon: "📈" },
      { id: "profile", label: "👤 Profile", icon: "👨" },
      { id: "activity", label: "📋 Activity", icon: "📜" }
    ]
  };

  const items = menuItems[role] || menuItems.user;

  // ✅ PERFECT AdminDashboard integration - Calls parent onTabChange
  const handleMenuClick = (item) => {
    if (onTabChange) {
      onTabChange(item.id);  // ✅ Notify AdminDashboard to switch content
    } else {
      navigate(`/dashboard/${role}/${item.id}`);  // Fallback navigation
    }
  };

  return (
    <div className="sidebar">
      {/* ✅ LOGO + ROLE BADGE */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {role === "admin" ? "👑 Admin Panel" : 
           role === "agent" ? "🎧 Agent Hub" : "AI Agent"}
        </div>
        {user && (
          <div className="role-badge">
            {role.toUpperCase()}
          </div>
        )}
      </div>

      {/* ✅ MAIN NAVIGATION - Perfect AdminDashboard integration */}
      <div className="sidebar-menu">
        {items.map((item) => (
          <div 
            key={item.id}
            className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => handleMenuClick(item)}  // ✅ Works with AdminDashboard!
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* ✅ DIVIDER + LOGOUT */}
      <div className="sidebar-footer">
        <div className="menu-divider"></div>
        <div 
          className="menu-item logout"
          onClick={handleLogout}
        >
          🚪 Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
