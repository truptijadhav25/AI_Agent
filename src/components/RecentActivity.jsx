// src/components/RecentActivity.jsx
import React from "react";

const RecentActivity = () => {
  const activities = [
    { lead: "Lead", time: "Timspamo" },
    { lead: "Lead Hendy", time: "4:20 a.m." },
    { lead: "Lead Lead", time: "3:59 a.m." },
  ];

  return (
    <div className="panel">
      <div className="panel-header"><span>Recent Activity</span></div>
      {activities.map((act, i) => (
        <div className="activity-row" key={i}>
          <span>{act.lead}</span>
          <span className="muted">{act.time}</span>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;
