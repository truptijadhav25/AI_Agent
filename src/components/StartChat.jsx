// src/components/StartChat.jsx
import { useNavigate } from "react-router-dom";
import "../styles/Bots.css";

function StartChat() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* LEFT SIDE = SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-logo">AI Agent</div>

        <nav className="sidebar-menu">
          <button
            className="menu-item active"
            onClick={() => navigate("/")}
          >
            🏠 Home
          </button>

          <button
            className="menu-item"
            onClick={() => navigate("/dashboard")}
          >
            ➕ Create User
          </button>

          <button
            className="menu-item"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>

          <button
            className="menu-item"
            onClick={() => navigate("/dashboard")}
          >
            📋 License
          </button>
        </nav>
      </aside>

      {/* RIGHT SIDE = MAIN AREA */}
      <main className="main">
        <header className="topbar">
          <h1 className="topbar-title">Home</h1>

          <div className="topbar-user">
            <span className="avatar">SS</span>
            <span className="username">ABC</span>
          </div>
        </header>

        <section className="content">
          <h2>Start Chat Page</h2>
        </section>
      </main>
    </div>
  );
}

export default StartChat;   // ✅ THIS IS VERY IMPORTANT
