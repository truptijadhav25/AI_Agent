// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
/* ===================== */
/* 🌐 PUBLIC (LIGHT THEME) */
/* ===================== */
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* ===================== */
/* 🤖 APP PAGES */
/* ===================== */
import StartChat from "./components/StartChat";
import AdminDashboard from "./components/Admindashboard";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {/* ===================== */}
        {/* 🌐 PUBLIC PAGES */}
        {/* ===================== */}
        
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ===================== */}
        {/* 🤖 APP PAGES */}
        {/* ===================== */}
        <Route path="/start-chat" element={<StartChat />} />
        <Route path="/dashboard/*" element={<AdminDashboard />} />

        {/* ===================== */}
        {/* 🧪 DEV / TEST */}
        {/* ===================== */}
        <Route
          path="/test/admin"
          element={<AdminDashboard roleOverride="admin" />}
        />
        <Route
          path="/test/user"
          element={<AdminDashboard roleOverride="user" />}
        />

        {/* ===================== */}
        {/* ❌ FALLBACK */}
        {/* ===================== */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
