// src/components/Sidebar.jsx - PROFESSIONAL LIGHT THEME ✅
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Bars3Icon, 
  ChartBarIcon, 
  UserGroupIcon, 
  CogIcon, 
  ShieldCheckIcon,
  LinkIcon,
  ScaleIcon,
  InboxIcon,
  PhoneIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon,
  TrophyIcon,
  UserIcon,
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/outline';

import "../styles/sidebar.css";

const Sidebar = ({ 
  activeTab = "overview", 
  user, 
  onLogout, 
  role = "user",
  onTabChange 
}) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogout = () => {
    if (onLogout) onLogout();
    else {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login");
    }
  };

  const menuItems = {
    admin: [
      { id: "overview", label: "Dashboard", icon: ChartBarIcon, tooltip: "Analytics Overview" },
      { id: "users", label: "Users", icon: UserGroupIcon, tooltip: "Manage Users" },
      { id: "bots", label: "Bots", icon: SparklesIcon, tooltip: "AI Bots" },
      { id: "performance", label: "Performance", icon: TrophyIcon, tooltip: "Metrics" },
      { id: "integrations", label: "Integrations", icon: LinkIcon, tooltip: "Connect Apps" },
      { id: "compliance", label: "Compliance", icon: ShieldCheckIcon, tooltip: "Security" }
    ],
    agent: [
      { id: "inbox", label: "Inbox", icon: InboxIcon, tooltip: "Messages" },
      { id: "live", label: "Live", icon: PhoneIcon, tooltip: "Live Chat" },
      { id: "assist", label: "Assist", icon: SparklesIcon, tooltip: "AI Assist" },
      { id: "acw", label: "ACW", icon: ClipboardDocumentCheckIcon, tooltip: "After Call Work" },
      { id: "performance", label: "Performance", icon: TrophyIcon, tooltip: "My Stats" }
    ],
    user: [
      { id: "overview", label: "Overview", icon: ChartBarIcon, tooltip: "Dashboard" },
      { id: "profile", label: "Profile", icon: UserIcon, tooltip: "Account Settings" },
      { id: "activity", label: "Activity", icon: ClipboardDocumentCheckIcon, tooltip: "Recent Activity" }
    ]
  };

  const items = menuItems[role] || menuItems.user;

  const handleMenuClick = (item) => {
    if (onTabChange) onTabChange(item.id);
    else navigate(`/dashboard/${role}/${item.id}`);
  };

  const IconComponent = ({ icon: Icon, ...props }) => <Icon className="h-5 w-5" {...props} />;

  return (
    <>
      {/* Mobile collapse button */}
      {isMobile && (
        <button 
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle Sidebar"
        >
          <Bars3Icon className="h-6 w-6 text-slate-700" />
        </button>
      )}

      <div 
        ref={sidebarRef}
        className={`sidebar ${isCollapsed || isMobile ? 'sidebar-collapsed' : ''}`}
      >
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            {isCollapsed ? (
              <ChartBarIcon className="h-8 w-8 text-blue-500 mx-auto" />
            ) : (
              <>
                <span className="logo-text">
                  {role === "admin" ? "👑 Admin" : role === "agent" ? "🎧 Agent" : "AI Agent"}
                </span>
                {!isCollapsed && user && (
                  <div className="role-badge">{role.toUpperCase()}</div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Menu */}
        <div className="sidebar-menu">
          {items.map((item) => (
            <div 
              key={item.id}
              className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleMenuClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleMenuClick(item)}
              title={!isCollapsed ? item.tooltip : item.label}
            >
              <IconComponent 
                icon={item.icon} 
                className={`menu-icon ${isCollapsed ? 'mx-auto' : ''}`} 
              />
              {!isCollapsed && (
                <span className="menu-label">{item.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sidebar-footer">
          <div className="menu-divider"></div>
          <div 
            className="menu-item logout"
            onClick={handleLogout}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleLogout()}
            title="Logout"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 menu-icon" />
            {!isCollapsed && <span className="menu-label">Logout</span>}
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobile && isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsCollapsed(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
