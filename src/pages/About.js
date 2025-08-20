import React from "react";

function About() {
  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>About Us</h2>
      <p style={textStyle}>
        Welcome to <strong>Travel Buddy</strong> 🌍, your trusted partner in discovering the world!  
        We make travel easier, smarter, and more enjoyable with handpicked destinations, exciting offers,  
        and a seamless booking experience.
      </p>
      <p style={textStyle}>
        Our mission is simple: <em>to inspire and enable you to travel more</em>.  
        Whether it’s beaches, mountains, or cities—you’ll find your dream trip here.
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

export default About;
