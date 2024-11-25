import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../logo/embroidreams-logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Wrap the logo with Link to navigate to home */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Embroidreams Logo" />
        </Link>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        <li><Link to="/our-works" onClick={() => setMenuOpen(false)}>Our Works</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
