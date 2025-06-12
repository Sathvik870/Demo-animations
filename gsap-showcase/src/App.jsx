import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DraggableDemo from './pages/DraggableDemo';
import ScrollTriggerDemo from './pages/ScrollTriggerDemo';
import MotionPathDemo from './pages/MotionPathDemo';
import TextPluginDemo from './pages/TextPluginDemo';
import EasesDemo from './pages/EasesDemo';
import ObserverDemo from './pages/ObserverDemo';
import ScrollToDemo from './pages/ScrollToDemo'; // We will create this file
import FlipDemo from './pages/FlipDemo';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="draggable" element={<DraggableDemo />} />
          <Route path="scrolltrigger" element={<ScrollTriggerDemo />} />
          <Route path="scrollto" element={<ScrollToDemo />} />
          <Route path="motionpath" element={<MotionPathDemo />} />
          <Route path="text" element={<TextPluginDemo />} />
          <Route path="eases" element={<EasesDemo />} />
          <Route path="observer" element={<ObserverDemo />} />
          <Route path="flip" element={<FlipDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;