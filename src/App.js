import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QnA from './components/QnA';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWorks from './pages/OurWorks';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-works" element={<OurWorks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
