import React from 'react';
import Navbar from '../components/Navbar';
import QnA from '../components/QnA';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
function AboutUs() {
  return (
    <div classname = "App">
       <Navbar />
      <h1>Page Title</h1>
      <p>Welcome to the AboutUs page!</p>
      <QnA />
      <Footer />
        <BackToTopButton />
    </div>
  );
}

export default AboutUs;
