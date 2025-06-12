import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { RoughEase, ExpoScaleEase, SlowMo } from 'gsap/EasePack';
import { CustomEase } from 'gsap/CustomEase';
import { CustomBounce } from 'gsap/CustomBounce'; // Assuming local file
import { CustomWiggle } from 'gsap/CustomWiggle'; // Assuming local file
import './EasesDemo.css';

gsap.registerPlugin(RoughEase, ExpoScaleEase, SlowMo, CustomEase, CustomBounce, CustomWiggle);

// Define custom eases once
CustomEase.create("custom", "M0,0 C0.126,0.382 0.2,1.064 0.2,1.064 0.2,1.064 0.322,0.67 0.5,0.67 0.678,0.67 0.834,1 1,1");
CustomBounce.create("myBounce", {strength:0.6, squash:3});
CustomWiggle.create("myWiggle", {wiggles: 10, type: "easeOut"});

function EasesDemo() {
  const container = useRef();
  const box = useRef();

  const animateWithEase = (ease) => {
    gsap.fromTo(box.current, 
      { x: 0 }, 
      { x: 500, duration: 2, ease: ease, overwrite: 'auto' }
    );
  };
  
  const eases = [
    { name: 'Power2 (Standard)', value: 'power2.inOut' },
    { name: 'SlowMo', value: 'slow(0.7, 0.7, false)' },
    { name: 'RoughEase', value: 'rough({ template: none.out, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})' },
    { name: 'ExpoScaleEase', value: 'expoScale(10, 1, power2.inOut)' },
    { name: 'CustomEase', value: 'custom' },
    { name: 'CustomBounce', value: 'myBounce' },
    { name: 'CustomWiggle', value: 'myWiggle' },
  ];

  return (
    <div className="page-container" ref={container}>
      <h1>Eases Showcase</h1>
      <p className="description">
        Easing controls the rate of change in an animation. Click the buttons below to see how different eases affect the same animation.
      </p>
      <div className="controls ease-controls">
        {eases.map(ease => (
          <button key={ease.name} onClick={() => animateWithEase(ease.value)}>
            {ease.name}
          </button>
        ))}
      </div>
      <div className="demo-area ease-demo-area">
        <div ref={box} className="box"></div>
      </div>
    </div>
  );
}

export default EasesDemo;