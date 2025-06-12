// src/App.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import VideoPage from './components/VideoPage';
import defaultImage from './images/withouthover.png';
import hoverImage from './images/withhover.png';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef();
  const { scene } = useGLTF('/car.glb');

  useEffect(() => {
    if (!scene) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: ".three-d-section", 
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          animation: gsap.to(scene.rotation, {
            y: Math.PI * 2,
            ease: "none",
          }),
        });
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.killAll();
    };
  }, [scene]);

  const hoverBackgroundStyle = {
    backgroundImage: `url(${isHovered ? hoverImage : defaultImage})`,
  };

  return (
    <>
      <div className="three-d-section" ref={containerRef}>
        <div className="canvas-container1">
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
            <Stage environment="city" intensity={0.6} adjustCamera={false}>
              {/* --- THIS IS THE ONLY LINE THAT WAS CHANGED --- */}
              <primitive object={scene} scale={0.8} position={[-2.4, 0, 0]} />
            </Stage>
          </Canvas>
        </div>
        
        <div className="content-container1">
        </div>
      </div>

      <div
        className="hover-section"
        style={hoverBackgroundStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h1>Our philosophy</h1>
          <p>At Delta Dubai, we deliver more than vehicles-we craft bespoke experiences.</p>
          <p>From dramatic supercar unveilings to romantic or exotic surprises, every detail</p>
          <p>is tailored to your vision With our white-glove service, precision </p>
          <p>and personalization define every moment</p>
        </div>
      </div>

      <VideoPage />
    </>
  );
}

export default App;