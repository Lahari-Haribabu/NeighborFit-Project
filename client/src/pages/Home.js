// === frontend/src/pages/Home.js ===
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1>🏡 Discover Your Ideal Neighborhood</h1>

        <p className="tagline">
          NeighborFit helps you find communities that match your values—whether it's safety, affordability,
          social vibes, or nature access.
        </p>

        <div className="feature-section">
          <p>Personalized lifestyle matching</p>
          <p>Real-world neighborhood data</p>
          <p>Instant top-3 suggestions</p>
        </div>

        <div className="home-buttons">
          <Link className="home-link" to="/login">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
