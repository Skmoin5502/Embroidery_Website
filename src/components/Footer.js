import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-description">
        <p>Embroidreams - Turning ideas into embroidered masterpieces.</p>
      </div>

      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
        <li><a href="/our-works">Our Works</a></li>
      </ul>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Embroidreams. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
