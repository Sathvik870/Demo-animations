import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

function ObserverDemo() {
  const container = useRef();
  const box = useRef();
  const [lastEvent, setLastEvent] = useState('None');
  
  useGSAP(() => {
    const observer = Observer.create({
      target: container.current, // The element to observe
      type: "wheel,touch,pointer", // Types of events to listen for
      onUp: () => {
        setLastEvent('onUp');
        gsap.to(box.current, { rotate: '+=90', duration: 0.5, backgroundColor: '#3b82f6' });
      },
      onDown: () => {
        setLastEvent('onDown');
        gsap.to(box.current, { rotate: '-=90', duration: 0.5, backgroundColor: '#ef4444' });
      },
      onLeft: () => {
        setLastEvent('onLeft');
        gsap.to(box.current, { x: '-=50', duration: 0.3, backgroundColor: '#eab308' });
      },
      onRight: () => {
        setLastEvent('onRight');
        gsap.to(box.current, { x: '+=50', duration: 0.3, backgroundColor: '#22c55e' });
      },
      // Lock the axis to prevent diagonal scrolls from firing both up/down and left/right
      tolerance: 10,
      preventDefault: true,
    });

    return () => observer.kill(); // Cleanup
  }, []);

  return (
    <div className="page-container">
      <h1>Observer Plugin</h1>
      <p className="description">
        Observer detects scroll, touch, and pointer events. In the gray area below, try scrolling with your mouse wheel (up/down) or clicking and dragging (left/right) to trigger animations.
      </p>
      <h3>Last Event Triggered: <span style={{color: '#4ade80'}}>{lastEvent}</span></h3>
      <div ref={container} className="demo-area">
        <div ref={box} className="box">Observe</div>
      </div>
    </div>
  );
}

export default ObserverDemo;