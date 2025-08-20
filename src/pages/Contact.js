import React from "react";

function Contact() {
  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Contact Us 📩</h2>
      <p style={textStyle}>
        Have questions or need support? We’d love to hear from you!
      </p>

      <form style={formStyle}>
        <label style={labelStyle}>Name</label>
        <input type="text" placeholder="Your Name" style={inputStyle} required />

        <label style={labelStyle}>Email</label>
        <input type="email" placeholder="Your Email" style={inputStyle} required />

        <label style={labelStyle}>Message</label>
        <textarea placeholder="Your Message" rows="4" style={inputStyle} required></textarea>

        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>

      <p style={textStyle}>
        📧 Email us at <a href="mailto:support@travelbuddy.com">support@travelbuddy.com</a>
      </p>
    </div>
  );
}

const pageStyle = { padding: "40px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" };
const headingStyle = { fontSize: "2rem", color: "#2e8b57", marginBottom: "20px" };
const textStyle = { fontSize: "1.1rem", color: "#333" };
const formStyle = { display: "flex", flexDirection: "column", marginTop: "20px" };
const labelStyle = { margin: "10px 0 5px", fontSize: "1rem" };
const inputStyle = { padding: "10px", fontSize: "1rem", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "8px" };
const buttonStyle = { padding: "12px", backgroundColor: "#2e8b57", color: "#fff", fontSize: "1rem", border: "none", borderRadius: "8px", cursor: "pointer" };

export default Contact;
