// src/components/CarModel.jsx

import React from 'react';
import { useGLTF } from '@react-three/drei';

// This component uses forwardRef so GSAP can target the model from App.jsx
export const CarModel = React.forwardRef((props, ref) => {
  // Your car.glb is in the /public folder, so the path '/car.glb' is correct.
  const { scene } = useGLTF('/car.glb'); 
  
  // 'scene' contains the entire model. We attach the ref to it.
  return <primitive object={scene} ref={ref} {...props} />;
});

// Preload the model for a faster initial render
useGLTF.preload('/car.glb');