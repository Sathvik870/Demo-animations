import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './ScrollToDemo.css';

gsap.registerPlugin(ScrollToPlugin);

function ScrollToDemo() {
  const main = useRef();
  const scroller = ".content"; // The scrollable element from Layout.jsx

  const scrollToSection = (id) => {
    gsap.to(scroller, {
      duration: 1.5,
      scrollTo: {
        y: id,
        autoKill: false
      },
      ease: 'power2.inOut'
    });
  };

  return (
    <div className="st-page" ref={main}>
      <div className="st-header">
        <h1>ScrollTo Plugin</h1>
        <p>Click the buttons below to smoothly scroll to a section.</p>
        <div className="controls">
            <button onClick={() => scrollToSection('#section-1')}>Go to Section 1</button>
            <button onClick={() => scrollToSection('#section-2')}>Go to Section 2</button>
            <button onClick={() => scrollToSection('#section-3')}>Go to Section 3</button>
        </div>
      </div>

      <section id="section-1" className="st-section">
        <div className="st-box color-1">Section 1</div>
      </section>
      <section id="section-2" className="st-section">
        <div className="st-box color-2">Section 2</div>
      </section>
      <section id="section-3" className="st-section">
        <div className="st-box color-3">Section 3</div>
      </section>
      <div className="st-footer">
        <p>End of content.</p>
      </div>
    </div>
  );
}

export default ScrollToDemo;