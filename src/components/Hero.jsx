import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-container">
          <h1>
            Voice Intelligence For <br />
            <span>Indian Businesses</span>
          </h1>

          <p className="hero-subtitle">
            From handling customer calls to screening candidates, we automate
            real conversations at real scale — across languages, accents, and
            peak traffic.
          </p>

          <div className="hero-actions">
            <button
              className="hero-btn primary"
              onClick={() => navigate("/landing")}
            >
              Get Started
            </button>
          </div>

          <p className="hero-trust">
            Trusted by fast-growing Indian teams in FinTech, EdTech, Healthcare &
            E-commerce
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Powerful Voice AI Features</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🤖 AI Voice Agents</h3>
            <p>
              Handle thousands of inbound & outbound calls simultaneously with
              natural conversations.
            </p>
          </div>

          <div className="feature-card">
            <h3>🌐 Multi-Language Support</h3>
            <p>
              Hindi, English & Indian regional languages with local accents.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Real-Time Analytics</h3>
            <p>
              Track call performance, intent detection & customer sentiment.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="industries">
        <h2>Built for Every Industry</h2>

        <ul>
          <li>📞 Customer Support</li>
          <li>🧑‍💼 Recruitment & HR Calls</li>
          <li>🏦 Banking & Finance</li>
          <li>🛒 Sales & Lead Qualification</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Connect your phone number</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>Train your AI agent</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Start automating calls</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Ready to automate your business calls?</h2>
        <button onClick={() => navigate("/landing")}>
          Get Started Free →
        </button>
      </section>
    </>
  );
};

export default Hero;
