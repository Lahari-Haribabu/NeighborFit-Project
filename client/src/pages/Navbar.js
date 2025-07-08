// === frontend/src/components/Navbar.js ===
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'; // (optional: move styles here)

function Navbar() {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  };

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.jpg" alt="Logo" className="logo-image" />
        <h2 className="logo-text">NeighborFit</h2>
      </div>

      <div className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/register">Register</Link>
        <Link className="nav-link" to="/preferences">Preferences</Link>
        <Link className="nav-link" to="/results">Results</Link>
        <button className="toggle-button" onClick={toggleDarkMode}>🌙</button>
      </div>
    </nav>
  );
}

export default Navbar;
