// src/App.jsx - SIMPLIFIED FOR TESTING
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Chatbot from "./pages/Chatbot";
import AdminDashboard from "./pages/dashboard/Admindashboard";  // ✅ SINGLE DASHBOARD

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={<Chatbot />} />

        {/* ✅ SINGLE DASHBOARD - ADMIN & USER */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/*" element={<AdminDashboard />} />

        {/* ✅ BYPASS LOGIN - Direct role testing */}
        <Route path="/test/admin" element={
          <AdminDashboard roleOverride="admin" />
        } />
        <Route path="/test/user" element={
          <AdminDashboard roleOverride="user" />
        } />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
