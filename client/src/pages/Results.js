// === frontend/src/pages/Results.js ===
import React from 'react';
import '../style/Results.css';

function Results() {
  const results = JSON.parse(localStorage.getItem('results') || '[]');

  return (
    <div className="results-container">
      <h2>Your Best Neighborhood Matches</h2>
      <ul className="results-list">
        {results.map((n, i) => (
          <li key={i} className="result-card">
            <h3>{n.name}</h3>
            <p>Match Score: <strong>{n.score}</strong></p>
            <p className="score-tip">
              {n.score <= 4 && "Excellent match!"}
              {n.score > 4 && n.score <= 7 && "Good match — slight differences."}
              {n.score > 7 && "Low match — consider changing preferences."}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
