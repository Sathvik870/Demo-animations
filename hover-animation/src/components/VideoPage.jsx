// src/components/VideoPage.js

import React, { useState, useEffect } from 'react';
import './VideoPage.css';

// Import your local video file
import myVideo from '../assets/car.mp4'; // Adjust the path as necessary

// Define the two links the button will cycle through
const links = [
  'https://react.dev', // Link for the first 3 seconds
  'https://www.google.com'   // Link for the next 3 seconds
];

function VideoPage() {
  // State to track which link is currently active (0 for the first, 1 for the second)
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to run a function every 3000 milliseconds (3 seconds)
    const intervalId = setInterval(() => {
      // Update the active link index.
      // The modulo operator (%) makes it loop perfectly between 0 and 1.
      // (0 + 1) % 2 = 1
      // (1 + 1) % 2 = 0
      setActiveLinkIndex(prevIndex => (prevIndex + 1) % links.length);
    }, 3000);

    // IMPORTANT: Cleanup function
    // This function runs when the component is unmounted.
    // It clears the interval to prevent memory leaks.
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array [] means this effect runs only once when the component mounts

  return (
    <div className="video-page-container">
      {/* Background Video */}
      <video
        className="background-video"
        src={myVideo}
        autoPlay // The video starts playing automatically
        loop     // The video will loop continuously
        muted    // **Crucial for autoplay in most browsers**
      />

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* The dynamic button/link */}
        <a
          href={links[activeLinkIndex]}
          className="dynamic-link-button"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </div>
    </div>
  );
}

export default VideoPage;