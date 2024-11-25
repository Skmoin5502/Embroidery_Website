import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QnA from '../components/QnA';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

function Home() {
  return (
    <div className="App">
           <Navbar />
      <h1>Page Title</h1>
      <p>Welcome to the Home page!</p>
      <Hero />
        <QnA />
        <Footer />
        <BackToTopButton />
    </div>
  );
}

export default Home;
