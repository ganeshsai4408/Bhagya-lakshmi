import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo">
          <span className="logo-text">BL</span>
        </div>

        {/* Centered Navigation Links */}
        <div className="nav-center">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="nav-right">
          <a href="#contact" className="contact-btn" style={{textDecoration:'none'}}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;