// src/components/StatsCards.jsx
import React from "react";

const StatsCards = () => {
  const stats = [
    { label: "Total Licenses Sold", value: "1,250" },
    { label: "Active Users", value: "940" },
    { label: "Leads Generated", value: "312" },
    { label: "Leads Generated", value: "" }, // Donut chart placeholder
  ];

  return (
    <div className="cards-grid">
      {stats.map((stat, index) => (
        <div className="card" key={index}>
          <div className="card-label">{stat.label}</div>
          {index === 3 ? (
            <div className="card-donut"></div>
          ) : (
            <div className="card-value">{stat.value}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
