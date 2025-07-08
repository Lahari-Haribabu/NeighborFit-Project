# NeighborFit 

NeighborFitis a full-stack web application that helps users find neighborhoods that best fit their lifestyle preferences — including safety, affordability, social life, and green spaces.

# Project Structure
NeighborFitt/
├── server/backend/ # Node.js + Express + MongoDB API
│ ├── models/ # Mongoose schemas (User, Preference)
│ ├── routes/ # Auth & Matching routes
│ └── server.js # Entry point for backend server
├── client/frontend/ # React application
│ ├── public/
│ ├── src/
│ │ ├── pages/ # React pages: Home, Login, Register, Preferences, Results
│ │ ├── # Navbar component
│ │ ├── App.js
│ │ ├── index.js
│ │ └── style/# CSS pages: App.css,Home.css,Navbar.css,Preferences.css,Results.css # Main styling with dark mode support
├── neighborhoodData.json # Mock data for neighborhood scoring



# Features

- JWT Authentication
- User preferences submission
- Lifestyle-based matching algorithm
- Results with ranked neighborhood matches
- Dark mode toggle
- Styled UI with CSS variables and responsive layout
- Full MERN Stack: MongoDB, Express, React, Node.js

---

# Installation

# Backend Setup
```bash
cd backend
npm install
node server.js
http://localhost:5001

# Frontend Setup
cd frontend
npm install
npm start
http://localhost:3000

# Matching Algorithm
Each neighborhood is scored based on how closely it matches the user’s input preferences. The algorithm uses the sum of absolute differences between each preference and neighborhood attribute:


score = |user.safety - n.safety| +
        |user.affordability - n.affordability| +
        |user.social - n.social| +
        |user.greenSpaces - n.greenSpaces|

Displays the top 3 neighborhood matches

Tech Stack
Frontend: React, React Router, Axios

Backend: Node.js, Express.js

Database: MongoDB + Mongoose

Authentication: JWT + bcrypt

Styling: CSS Modules + Theme Variables


