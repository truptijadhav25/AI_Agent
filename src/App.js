// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import StartChat from "./components/StartChat";
import AdminDashboard from "./components/Admindashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />

        {/* Start Chat (this now contains old Chatbot code) */}
        <Route path="/start-chat" element={<StartChat />} />

        {/* Dashboard */}
        <Route path="/dashboard/*" element={<AdminDashboard />} />

        {/* Test Routes */}
        <Route
          path="/test/admin"
          element={<AdminDashboard roleOverride="admin" />}
        />
        <Route
          path="/test/user"
          element={<AdminDashboard roleOverride="user" />}
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
