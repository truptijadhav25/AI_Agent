// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCards from "../components/StatsCards";
import DonutChart from "../components/DonutChart";
import BarChart from "../components/BarChart";
import RecentActivity from "../components/RecentActivity";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />

        <div className="content">
          <div>
            <StatsCards />
            <DonutChart />
            <BarChart />
          </div>

          <div className="side-column">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
