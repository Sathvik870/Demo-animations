import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// GSAP AND PLUGINS REGISTRATION
import { gsap } from "gsap";

// --- FREE PLUGINS ONLY ---
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Observer } from "gsap/Observer";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

// Register all FREE plugins.
gsap.registerPlugin(
  Draggable, EaselPlugin, InertiaPlugin, MotionPathPlugin, Observer,
  PixiPlugin, ScrollToPlugin, ScrollTrigger, TextPlugin, CustomEase,
  RoughEase, ExpoScaleEase, SlowMo
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);