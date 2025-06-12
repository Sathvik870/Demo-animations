import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollTriggerDemo.css';

gsap.registerPlugin(ScrollTrigger);

function ScrollTriggerDemo() {
  const main = useRef();
  
  useGSAP(() => {
    // Animate the title
    gsap.to(".title", {
      opacity: 0.5,
      y: -50,
      scrollTrigger: {
        trigger: ".title",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Animate each box as it enters the viewport
    const boxes = gsap.utils.toArray('.st-box');
    boxes.forEach(box => {
      gsap.fromTo(box, 
        { autoAlpha: 0, y: 100 },
        { 
          autoAlpha: 1, 
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: box,
            start: "top 80%", // When the top of the box hits 80% from the top of the viewport
            toggleActions: "play none none reverse", // play on enter, reverse on leave
            markers: true, // helpful for debugging!
          }
        }
      );
    });

  }, { scope: main });

  return (
    // Note: The parent 'content' div from Layout.jsx is the scroller
    <div className="page-container st-page" ref={main}>
      <div className="st-header">
        <h1 className="title">ScrollTrigger Demo</h1>
        <p>Scroll down to see animations trigger.</p>
      </div>

      <section className="st-section">
        <div className="st-box color-1">Section 1</div>
      </section>
      <section className="st-section">
        <div className="st-box color-2">Section 2</div>
      </section>
      <section className="st-section">
        <div className="st-box color-3">Section 3</div>
      </section>
      <section className="st-section">
        <div className="st-box color-4">Section 4</div>
      </section>
       <div className="st-footer">
        <p>End of content.</p>
      </div>
    </div>
  );
}

export default ScrollTriggerDemo;