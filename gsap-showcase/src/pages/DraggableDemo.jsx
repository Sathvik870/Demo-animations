import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

function DraggableDemo() {
  const container = useRef();
  const dragTarget = useRef();

  useGSAP(() => {
    // Draggable.create() returns an array, so we grab the first one
    const draggableInstance = Draggable.create(dragTarget.current, {
      type: "x,y",
      bounds: container.current,
      inertia: true,
      onClick: function() {
        console.log("clicked");
      },
      onDragEnd: function() {
        console.log("drag ended");
      }
    })[0];
    
    // Cleanup if needed (useGSAP handles most of this)
    return () => {
      draggableInstance.kill();
    }
  }, { scope: container });

  return (
    <div className="page-container" ref={container}>
      <h1>Draggable & Inertia Plugin</h1>
      <p className="description">
        Click and drag the box. The <code>InertiaPlugin</code> is active by default with Draggable, allowing the box to glide to a stop based on momentum. The box is constrained within the gray demo area.
      </p>
      <div className="demo-area">
        <div className="box" ref={dragTarget}>Drag Me</div>
      </div>
    </div>
  );
}

export default DraggableDemo;