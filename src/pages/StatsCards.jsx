import React from "react";

const StatsCards = ({ stats = {} }) => {
  return (
    <div className="cards-grid">
      <div className="card">
        <div className="card-label">Total Chats</div>
        <div className="card-value">{stats.totalChats || "1,245"}</div>
      </div>
      <div className="card">
        <div className="card-label">Avg Response</div>
        <div className="card-value">{stats.avgResponseTime || "2m 15s"}</div>
      </div>
      <div className="card">
        <div className="card-label">CSAT</div>
        <div className="card-value">{stats.satisfaction || "4.8"}</div>
        <div className="card-donut"></div>
      </div>
      <div className="card">
        <div className="card-label">Active Sessions</div>
        <div className="card-value">{stats.activeSessions || "23"}</div>
      </div>
    </div>
  );
};

export default StatsCards;
