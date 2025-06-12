import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { MotionPathHelper } from 'gsap/MotionPathHelper'; 

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

function MotionPathDemo() {
  const container = useRef();
  const follower = useRef();
  const path = useRef();
  const tl = useRef();

  useGSAP(() => {
    tl.current = gsap.to(follower.current, {
      motionPath: {
        path: path.current,
        align: path.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Uncomment to see the helper (Club GSAP plugin)
    // MotionPathHelper.create(follower.current, {
    //   path: path.current,
    //   align: path.current,
    //   alignOrigin: [0.5, 0.5],
    //   autoRotate: true
    // });
    
  }, { scope: container });

  return (
    <div className="page-container" ref={container}>
      <h1>MotionPath Plugin</h1>
      <p className="description">
        This plugin animates any element along an SVG path. The <code>autoRotate</code> property keeps the element oriented to the path's direction. The green box is a DOM element, not part of the SVG.
      </p>
      <div className="controls">
        <button onClick={() => tl.current.play()}>Play</button>
        <button onClick={() => tl.current.pause()}>Pause</button>
        <button onClick={() => tl.current.reverse()}>Reverse</button>
      </div>
      <div className="demo-area" style={{ padding: '0' }}>
        <div ref={follower} className="box" style={{ position: 'absolute', width: '50px', height: '50px' }}></div>
        <svg width="100%" height="100%" viewBox="0 0 600 400">
          <path
            ref={path}
            d="M50,350 C150,50 350,50 550,350"
            fill="none"
            stroke="#555"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

export default MotionPathDemo;