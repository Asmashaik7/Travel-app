import React from "react";

function Careers() {
  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Careers at Travel Buddy 🚀</h2>
      <p style={textStyle}>
        Join a passionate team that is shaping the future of travel!  
        At <strong>Travel Buddy</strong>, we believe in innovation, creativity, and collaboration.
      </p>
      <ul style={listStyle}>
        <li>🌟 Frontend Developer (React)</li>
        <li>🌟 Backend Developer (Node.js)</li>
        <li>🌟 Data Analyst (Python + SQL)</li>
        <li>🌟 Marketing & SEO Specialist</li>
      </ul>
      <p style={textStyle}>
        📩 Send your resume to <a href="mailto:careers@travelbuddy.com">careers@travelbuddy.com</a>
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

export default Careers;
