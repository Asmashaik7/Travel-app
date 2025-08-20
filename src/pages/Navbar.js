import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-center gap-6">
      <Link to="/" className="text-white font-semibold hover:text-gray-300">Home</Link>
      <Link to="/destinations" className="text-white font-semibold hover:text-gray-300">Destinations</Link>
      <Link to="/bookings" className="text-white font-semibold hover:text-gray-300">Bookings</Link>
      <Link to="/offers" className="text-white font-semibold hover:text-gray-300">Offers</Link>
      <Link to="/about" className="text-white font-semibold hover:text-gray-300">About Us</Link>
    </nav>
  );
};

export default Navbar;
