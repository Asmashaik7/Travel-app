import React from "react";

function Privacy() {
  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Privacy Policy 🔒</h2>
      <p style={textStyle}>
        At <strong>Travel Buddy</strong>, your privacy is our priority.  
        We collect only the data necessary to improve your travel experience and never share it without consent.
      </p>
      <ul style={listStyle}>
        <li>🔹 We respect your data and keep it secure.</li>
        <li>🔹 No spam—only useful travel updates.</li>
        <li>🔹 You can request account deletion anytime.</li>
      </ul>
      <p style={textStyle}>
        Read more about our policies or contact us for any concerns.
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

export default Privacy;
