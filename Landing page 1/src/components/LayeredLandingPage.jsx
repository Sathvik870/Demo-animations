import React from 'react';
import './LayeredLandingPage.css';

// Import your images from the assets folder.
// React's build process will handle these paths correctly.
import middleLayerImage from '../../src/assets/images/object.png'; 

function LayeredLandingPage() {
  return (
    // LAYER 1: The container with a background image (set in CSS)
    <div className="landing-container">
      
      {/* LAYER 2: The background text using the "Hanseif" font */}
      <h1 className="background-text">DELTA DUBAI</h1>

      {/* LAYER 3: The middle image (must be a transparent PNG) */}
      <img 
        src={middleLayerImage} 
        alt="Main visual object" 
        className="middle-image" 
      />

      {/* LAYER 4: The foreground text */}
      <h2 className="foreground-text">BOOK <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOW.... !</h2>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default LayeredLandingPage;