import React from 'react';

function HomePage() {
  return (
    <div className="page-container">
      <h1>React GSAP Plugin Showcase</h1>
      <p className="description">
        Welcome! This application demonstrates various GSAP (GreenSock Animation Platform) plugins integrated with React.
        Use the navigation on the left to explore each demo.
      </p>
      <div className="demo-area">
        <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
          Select a demo from the sidebar to begin.
        </p>
      </div>
      <h2>About this Project</h2>
      <p>
        Each demo is encapsulated in its own React component and uses the <code>useGSAP()</code> hook for safe, scoped animations that are automatically cleaned up.
      </p>
    </div>
  );
}

export default HomePage;