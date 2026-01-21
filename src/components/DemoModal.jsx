import React from "react";
import "../styles/DemoModal.css";

const DemoModal = ({ onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div className="modal-overlay" onClick={onClose} />

      {/* Modal */}
      <div className="demo-modal open">
        <div className="modal-header">
          <h2>Book Your Demo</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-body">
          <p>Please provide your details to connect with our team</p>
          <form className="demo-form">
            <label>
              Full Name*
              <input type="text" placeholder="Type your answer here..." required />
            </label>
            <label>
              Business Email*
              <input type="email" placeholder="name@example.com" required />
            </label>
            <label>
              Phone Number*
              <div className="phone-input">
                <span className="country-flag">🇮🇳</span>
                <input type="tel" placeholder="081234 56789" required />
              </div>
            </label>
            <button type="submit" className="submit-btn">
              OK
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DemoModal;
