import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Turning Ideas Into Embroidered Masterpieces</h1>
        <p>Your one-stop destination for all embroidery solutions.</p>
      </div>
      <div className="hero-slider">
        <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
        <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
        <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
      </div>
    </div>
  );
}

export default Hero;
