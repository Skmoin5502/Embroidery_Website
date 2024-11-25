import React, { useState, useEffect } from 'react';
import '../styles/BackToTopButton.css';

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <button className="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
}

export default BackToTopButton;
