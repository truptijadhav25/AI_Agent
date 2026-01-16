// src/pages/Chatbot.jsx

 // we will create this file in next step
import "../styles/Bots.css"

function Chatbot() {
    return (
        <div className="dashboard">
            {/* LEFT SIDE = SIDEBAR */}
            <aside className="sidebar">
                <div className="sidebar-logo">AI Agent</div>

                <nav className="sidebar-menu">
                    <button className="menu-item active">
                        🏠 Home
                    </button>
                    <button className="menu-item">
                        ➕ Create User
                    </button>
                    <button className="menu-item">
                        🔍 Search User
                    </button>
                    <button className="menu-item">
                        📋 License
                    </button>
                </nav>

            </aside>

            {/* RIGHT SIDE = MAIN AREA */}
            <main className="main">
                {/* TOP BAR */}
                <header className="topbar">
                    <h1 className="topbar-title">Home</h1>

                    <div className="topbar-user">
                        <span className="avatar">SS</span>
                        <span className="username">ABC</span>
                    </div>
                </header>

                {/* CONTENT AREA – WE WILL FILL LATER */}
                <section className="content">
                    {/* LEFT COLUMN: 4 cards in 2x2 grid */}
                    <div>
                        <div className="cards-grid">
                            <div className="card">
                                <p className="card-label">Total Licenses Sold</p>
                                <h2 className="card-value">1,250</h2>
                            </div>

                            <div className="card">
                                <p className="card-label">Active Users</p>
                                <h2 className="card-value">940</h2>
                            </div>

                            <div className="card">
                                <p className="card-label">Leads Generated</p>
                                <h2 className="card-value">312</h2>
                            </div>

                            <div className="card">
                                <p className="card-label">Leads Generated</p>
                                <div className="card-donut"></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: charts */}
                    <div className="side-column">
                        <div className="panel">
                            <div className="panel-header">
                                <span>Usage by User</span>
                            </div>
                            <div className="bar-chart">
                                {["40", "60", "35", "75", "55", "45", "65"].map((h, i) => (
                                    <div key={i} className="bar" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>

                        <div className="panel">
                            <div className="panel-header">
                                <span>Recent Activity</span>
                            </div>
                            <div className="activity-row">
                                <span>Lead Hendy</span>
                                <span className="muted">4:20 a.m.</span>
                            </div>
                            <div className="activity-row">
                                <span>Lead Lead</span>
                                <span className="muted">3:59 a.m.</span>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
        </div>
    );
}

export default Chatbot;
