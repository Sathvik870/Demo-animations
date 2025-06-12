import { useState, useRef } from 'react';
import { flushSync } from 'react-dom'; // <-- 1. IMPORT flushSync
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import './FlipDemo.css';

gsap.registerPlugin(Flip);

// Helper function to shuffle an array
const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

const initialItems = [
  { id: 1, category: 'a', color: '#ff6347', number: 1 },
  { id: 2, category: 'b', color: '#4682b4', number: 2 },
  { id: 3, category: 'a', color: '#ff6347', number: 3 },
  { id: 4, category: 'b', color: '#4682b4', number: 4 },
  { id: 5, category: 'a', color: '#ff6347', number: 5 },
  { id: 6, category: 'b', color: '#4682b4', number: 6 },
  { id: 7, category: 'a', color: '#ff6347', number: 7 },
  { id: 8, category: 'b', color: '#4682b4', number: 8 },
];

function FlipDemo() {
  const container = useRef();
  const [items, setItems] = useState(initialItems);
  const { contextSafe } = useGSAP({ scope: container });

  const doFlip = (newState) => {
    // Get the state of the elements BEFORE the DOM change
    const state = Flip.getState(container.current.children);

    // 2. USE flushSync to force React to update the DOM synchronously
    flushSync(() => {
      setItems(newState);
    });

    // 3. NOW, after the DOM is updated, run the Flip animation.
    Flip.from(state, {
      duration: 0.7,
      scale: true,
      ease: 'power1.inOut',
      stagger: 0.08,
      absolute: true,
    });
  };

  // The rest of the component handlers are now correct because they call the fixed doFlip function
  const handleShuffle = contextSafe(() => {
    doFlip(shuffle([...items]));
  });

  const handleFilter = contextSafe((category) => {
    const filtered = initialItems.filter(item => item.category === category);
    doFlip(filtered);
  });
  
  const handleReset = contextSafe(() => {
    doFlip(initialItems);
  });

  return (
    <div className="page-container">
      <h1>Flip Plugin Demo</h1>
      <p className="description">
        Flip is for smoothly animating state changes. Click the buttons to shuffle or filter the boxes. GSAP records the original position, changes the DOM, and then animates the elements from their old position to the new one.
      </p>

      <div className="controls">
        <button onClick={handleShuffle}>Shuffle</button>
        <button onClick={() => handleFilter('a')}>Filter Category A</button>
        <button onClick={() => handleFilter('b')}>Filter Category B</button>
        <button onClick={handleReset}>Show All</button>
      </div>
      
      <div ref={container} className="demo-area grid-container">
        {items.map((item) => (
          <div
            key={item.id}
            className={`box flip-box category-${item.category}`}
            style={{ backgroundColor: item.color }}
            data-flip-id={item.id}
          >
            {item.number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlipDemo;