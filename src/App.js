import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Bookings from "./pages/Bookings";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact"; 
import SummerSpecial from "./pages/SummerSpecial";
import AdventureAwaits from "./pages/AdventureAwaits";
import FamilyGetaways from "./pages/FamilyGetaways";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
        {/* Header/Navbar */}
        <header
          style={{
            backgroundColor: "#2e8b57",
            color: "white",
            padding: "15px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "1.8rem" }}>🌍 Travel Buddy</h1>
          <nav>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                gap: "20px",
              }}
            >
              <li>
                <Link to="/" style={linkStyle}>Home</Link>
              </li>
              <li>
                <Link to="/destinations" style={linkStyle}>Destinations</Link>
              </li>
              <li>
                <Link to="/bookings" style={linkStyle}>Bookings</Link>
              </li>
              <li>
                <Link to="/offers" style={linkStyle}>Offers</Link>
              </li>
              <li>
                <Link to="/about" style={linkStyle}>About</Link>
              </li>
              <li>
                <Link to="/contact" style={linkStyle}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Fix: nested offer routes */}
          <Route path="/offers/summer" element={<SummerSpecial />} />
          <Route path="/offers/adventure" element={<AdventureAwaits />} />
          <Route path="/offers/family" element={<FamilyGetaways />} />
        </Routes>
      </div>
    </Router>
  );
}

// Reusable Link Style
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.1rem",
  transition: "color 0.3s ease",
};

export default App;
