// === frontend/src/App.js ===
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Preferences from './pages/Preferences';
import Results from './pages/Results';
import Navbar from './pages/Navbar'; // ✅ Import Navbar
import './style/App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Display Navbar on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
