import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// Note: We are only importing TextPlugin, which is free.
import { TextPlugin } from 'gsap/TextPlugin';

// It's good practice to register the plugin in the file where it's used,
// even if it's already in main.jsx.
gsap.registerPlugin(TextPlugin);

function TextPluginDemo() {
  const container = useRef();
  
  // This function will be called when the button is clicked.
  const animateTypewriter = () => {
    // We use .fromTo() to ensure the text resets to empty each time.
    gsap.fromTo(".typewriter-text", 
      { 
        text: "" // Start with empty text
      }, 
      {
        text: "This is the free TextPlugin. It animates the text content of a DOM element, creating a cool typewriter effect. You can control the speed, easing, and more.",
        duration: 4,
        ease: "none", // "none" ease provides a consistent typing speed.
      }
    );
  };

  // We use useGSAP for context scoping, but the main animation is triggered by the button.
  useGSAP(() => {
    // You could put an initial animation here if you wanted.
  }, { scope: container });

  return (
    <div className="page-container" ref={container}>
      <h1>TextPlugin Showcase</h1>
      <p className="description">
        The free TextPlugin is perfect for creating typewriter effects. It sequentially reveals the text in any DOM element.
      </p>

      <div className="demo-area" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <h2>Typewriter Demo</h2>
        <p>Click the button to start the animation.</p>
        
        {/* This is the target element for our animation */}
        <p 
          className="typewriter-text" 
          style={{ 
            minHeight: '80px', 
            width: '100%',
            backgroundColor: '#333', 
            padding: '1rem', 
            borderRadius: '8px', 
            color: '#f0f0f0',
            boxSizing: 'border-box'
          }}
        ></p>
        
        <div className="controls">
          <button onClick={animateTypewriter}>Start Typing</button>
        </div>
      </div>
    </div>
  );
}

export default TextPluginDemo;