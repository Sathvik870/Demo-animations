import React, { useState, useEffect } from 'react';
import './LandingPage.css';

import backgroundImage from '../assets/images/layer-1-background.png';

const LandingPage = () => {
  const [isIntroActive, setIntroActive] = useState(true);
  const [isContentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroActive(false);
      setContentVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div
      className="landing-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Layer 3: The Intro Overlay */}
      {isIntroActive && <div className="intro-overlay"></div>}

      {/* Layer 2: The Content Layer */}
      {/* We add a conditional class 'visible' to the parent div */}
      <div className={`content-layer ${isContentVisible ? 'visible' : ''}`}>
        {/* The child elements will now be styled based on this parent class */}
        <h2>DELTA DUBAI</h2>
        <p>Experience Unrivaled Excellence.</p>
        <button>Explore</button>
      </div>
            {/* LAYER 4: The foreground text */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;