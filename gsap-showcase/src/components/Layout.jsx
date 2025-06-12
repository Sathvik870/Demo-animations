import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/draggable', label: 'Draggable & Inertia' },
  { path: '/scrolltrigger', label: 'ScrollTrigger' },
  { path: '/scrollto', label: 'ScrollToPlugin' },
  { path: '/flip', label: 'Flip' }, 
  { path: '/motionpath', label: 'MotionPathPlugin' },
  { path: '/text', label: 'TextPlugin' },
  { path: '/eases', label: 'Eases' },
  { path: '/observer', label: 'Observer' },
];

function Layout() {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <h2>GSAP Demos</h2>
        <ul>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;