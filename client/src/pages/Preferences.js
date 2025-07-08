// === frontend/src/pages/Preferences.js ===
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/Preferences.css';

function Preferences() {
  const navigate = useNavigate();
  const [prefs, setPrefs] = useState({
    safety: 5,
    affordability: 5,
    social: 5,
    greenSpaces: 5
  });

  const handleChange = (e) => {
    setPrefs({ ...prefs, [e.target.name]: parseInt(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const payload = JSON.parse(atob(token.split('.')[1]));
    await axios.post('http://localhost:5001/api/match/submit', { userId: payload.id, ...prefs });
    const res = await axios.post('http://localhost:5001/api/match/result', prefs);
    localStorage.setItem('results', JSON.stringify(res.data));
    navigate('/results');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Rate Your Preferences (1 = Low, 10 = High)</h2>

      <label>Safety (How secure should the area be?)</label>
      <input type="number" name="safety" value={prefs.safety} min="1" max="10" onChange={handleChange} required />

      <label>Affordability (How budget-friendly should it be?)</label>
      <input type="number" name="affordability" value={prefs.affordability} min="1" max="10" onChange={handleChange} required />

      <label>Social Life (Do you enjoy events, nightlife, community?)</label>
      <input type="number" name="social" value={prefs.social} min="1" max="10" onChange={handleChange} required />

      <label>Green Spaces (Parks, gardens, open spaces?)</label>
      <input type="number" name="greenSpaces" value={prefs.greenSpaces} min="1" max="10" onChange={handleChange} required />

      <button type="submit">Find My Neighborhood</button>
    </form>
  );
}

export default Preferences;
