// src/components/BarChart.jsx
import React from "react";

const BarChart = () => {
  const bars = [70, 100, 90, 60, 80, 50, 40, 70, 60, 50];
  return (
    <div className="panel">
      <div className="panel-header"><span>Usage by User</span></div>
      <div className="bar-chart">
        {bars.map((height, index) => (
          <div className="bar" key={index} style={{ height: `${height}px` }}></div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
