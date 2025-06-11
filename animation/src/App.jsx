// src/App.jsx (THE FINAL WORKING CODE)
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
gsap.registerPlugin(ScrollTrigger);
export default function App() {
  const containerRef = useRef();
  const { scene } = useGLTF('/car.glb');
  useEffect(() => {
    if (!scene) {
      return;
    }
    scene.rotation.y = Math.PI / 2;
    console.log("SUCCESS: The 3D scene is loaded, now setting up the animation.", scene);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".content-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        animation: gsap.to(scene.rotation, {
          y: -Math.PI / 2,
          ease: "none",
        }),
        markers: true,
      });
    }, containerRef);

    return () => ctx.revert();

  }, [scene]);

  return (
    <div className="app-container" ref={containerRef}>
      <div className="canvas-container">
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <Stage environment="city" intensity={0.6} adjustCamera={false}>
            <primitive object={scene} scale={1} rotation-y={Math.PI / 2} />
          </Stage>
        </Canvas>
      </div>

      <div className="content-container">
        <section className="page-section" id="home">
          <h1>The Journey Begins</h1>
          <p>Scroll down to rotate the car.</p>
        </section>
        <section className="page-section" id="about">
          <h1>A New Perspective</h1>
          <p>The rotation is complete.</p>
        </section>
      </div>
    </div>
  );
}