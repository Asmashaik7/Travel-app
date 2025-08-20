import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const heroStyle = {
    position: "relative",
    textAlign: "center",
    padding: "100px 20px",
    color: "white",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')", // Travel-style background
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const heroContent = {
    position: "relative",
    zIndex: 1,
  };

  const offersSection = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "40px 20px",
  };

  const offerBox = {
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const offerBoxHover = {
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
  };

  const bookingSection = {
    backgroundColor: "#f1fdf6",
    padding: "40px 20px",
    textAlign: "center",
  };

  const footerStyle = {
    backgroundColor: "#2e8b57",
    color: "white",
    padding: "30px 20px",
    marginTop: "40px",
  };

  const footerColumns = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    textAlign: "left",
  };

  const footerLinkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
    transition: "color 0.3s ease",
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        {/* Removed heroOverlay */}
        <div style={heroContent}>
          <h1>Welcome to Travel Buddy 🌍</h1>
          <p>Your trusted companion for memorable journeys.</p>
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "white",
              color: "#2e8b57",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            <Link
              to="/destinations"
              style={{ textDecoration: "none", color: "#2e8b57" }}
            >
              Explore Destinations
            </Link>
          </button>
        </div>
      </section>

      {/* Offers Section */}
      <section style={offersSection}>
        {[
          {
            title: "Summer Special ☀️",
            desc: "Get up to 30% off on beach destinations this summer!",
            link: "/summer-special",
          },
          {
            title: "Adventure Awaits 🏔️",
            desc: "Discounts on trekking and hiking trips across the Himalayas.",
            link: "/offers/adventure",
          },
          {
            title: "Family Getaway 👨‍👩‍👧‍👦",
            desc: "Special packages for families with kids.",
            link: "/offers/family",
          },
        ].map((offer, index) => (
          <div
            key={index}
            style={offerBox}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = offerBoxHover.transform;
              e.currentTarget.style.boxShadow = offerBoxHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = offerBox.boxShadow;
            }}
          >
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>
            <Link to={offer.link}>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 18px",
                  backgroundColor: "#2e8b57",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                View Offer
              </button>
            </Link>
          </div>
        ))}
      </section>

      {/* Booking Section */}
      <section style={bookingSection}>
        <h2>Book Your Trip Now ✈️</h2>
        <p>Fill in your details and let us plan your next journey.</p>
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter Destination"
            style={{
              padding: "10px",
              margin: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="date"
            style={{
              padding: "10px",
              margin: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#2e8b57",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <div style={footerColumns}>
          <div>
            <h4>Company</h4>
            <Link to="/contact" style={footerLinkStyle}>
              Contact Us
            </Link>
            <Link to="/about" style={footerLinkStyle}>
              About Us
            </Link>
            <Link to="/careers" style={footerLinkStyle}>
              Careers
            </Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link to="/privacy" style={footerLinkStyle}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={footerLinkStyle}>
              Terms & Conditions
            </Link>
          </div>
          <div>
            <h4>Follow Us</h4>
            <a href="#" style={footerLinkStyle}>
              🌐 Website
            </a>
            <a href="#" style={footerLinkStyle}>
              📘 Facebook
            </a>
            <a href="#" style={footerLinkStyle}>
              🐦 Twitter
            </a>
            <a href="#" style={footerLinkStyle}>
              📸 Instagram
            </a>
          </div>
        </div>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          © 2025 Travel Buddy. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
