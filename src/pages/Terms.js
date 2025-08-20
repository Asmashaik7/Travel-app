import React from "react";

function Terms() {
  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Terms & Conditions 📜</h2>
      <p style={textStyle}>
        By using <strong>Travel Buddy</strong>, you agree to the following terms:
      </p>
      <ul style={listStyle}>
        <li>✅ Bookings are subject to availability.</li>
        <li>✅ Cancellation charges may apply.</li>
        <li>✅ Offers and discounts are time-limited.</li>
        <li>✅ We reserve the right to update policies anytime.</li>
      </ul>
      <p style={textStyle}>
        Please check this page regularly for updates.
      </p>
    </div>
  );
}

const pageStyle = {
  padding: "40px",
  maxWidth: "800px",
  margin: "0 auto",
  lineHeight: "1.8",
};

const headingStyle = {
  fontSize: "2rem",
  color: "#2e8b57",
  marginBottom: "20px",
};

const textStyle = {
  fontSize: "1.1rem",
  color: "#333",
};

const listStyle = {
  fontSize: "1.1rem",
  color: "#444",
  marginTop: "15px",
};

export default Terms;
