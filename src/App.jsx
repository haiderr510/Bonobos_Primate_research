import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Research from './Research';
import Conservation from './Conservation';
import PoliticsImpact from './PoliticsImpact';
import References from './References';
import './App.css';

function Navigation() {
  const location = useLocation();

  const navStyle = {
    backgroundColor: 'rgba(52, 58, 64, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '1rem 2rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const brandStyle = {
    color: 'white !important',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: '700',
    opacity: '1'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? '#667eea !important' : 'white !important',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    fontWeight: location.pathname === path ? '600' : '400',
    backgroundColor: location.pathname === path ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
    opacity: '1'
  });

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={brandStyle}>
          🐒 Bonobo Conservation
        </Link>
        <div style={navLinksStyle}>
          <Link to="/" style={getLinkStyle('/')}>
            Home
          </Link>
          <Link to="/research" style={getLinkStyle('/research')}>
            Research
          </Link>
          <Link to="/conservation" style={getLinkStyle('/conservation')}>
            Conservation
          </Link>
          <Link to="/politics-impact" style={getLinkStyle('/politics-impact')}>
            Politics & Impact
          </Link>
          <Link to="/references" style={getLinkStyle('/references')}>
            References
          </Link>
          <Link to="/about" style={getLinkStyle('/about')}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/conservation" element={<Conservation />} />
          <Route path="/politics-impact" element={<PoliticsImpact />} />
          <Route path="/references" element={<References />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;