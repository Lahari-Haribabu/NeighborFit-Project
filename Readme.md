# NeighborFit

**NeighborFit** is a full-stack web application that helps users find neighborhoods that best fit their lifestyle preferences — including **safety, affordability, social life, and green spaces**.

This project was built as part of a two-week assignment focused on **problem analysis, research, algorithmic thinking, and systems design** under real-world constraints.

## 🚀 Features

- User authentication with JWT
- User lifestyle preference submission
- Matching algorithm to recommend neighborhoods
- Results ranked by how well they fit user preferences
- Dark mode toggle for better UX
- Responsive, styled UI with CSS variables
- Full MERN stack implementation

## 🧠 Problem Solved

Neighborhood-lifestyle matching is a complex problem due to diverse user needs, inconsistent data, and lack of accessible tools.  
**NeighborFit** provides a systematic, data-driven approach to recommend the most suitable neighborhoods for users based on their input preferences.

## 🗂️ Project Structure

```
NeighborFit/
├── server/                # Backend: Node.js + Express + MongoDB API
│   ├── models/            # Mongoose schemas (User, Preference)
│   ├── routes/            # Auth & Matching routes
│   └── server.js          # Entry point for backend server
├── client/                # Frontend: React application
│   ├── public/
│   └── src/
│       ├── pages/         # React pages: Home, Login, Register, Preferences, Results
│       ├── components/    # Navbar and reusable components
│       ├── App.js
│       ├── index.js
│       └── styles/        # CSS: App.css, Home.css, Navbar.css, Preferences.css, Results.css
├── neighborhoodData.json  # Mock data for neighborhood scoring
```

## 🖥️ Installation & Setup

### Backend Setup

```bash
cd server
npm install
node server.js
```

Server runs at: [http://localhost:5001](http://localhost:5001)

### Frontend Setup

```bash
cd client
npm install
npm start
```

Frontend runs at: [http://localhost:3000](http://localhost:3000)

## 📊 Matching Algorithm

Each neighborhood is scored based on how closely it matches the user’s preferences.

The score is calculated as:

```
score = |user.safety - n.safety| 
      + |user.affordability - n.affordability|
      + |user.social - n.social| 
      + |user.greenSpaces - n.greenSpaces|
```

Neighborhoods are then ranked by lowest score, and the **top 3 matches** are displayed to the user.

## 🧰 Tech Stack

| Layer        | Technology                   |
| ------------ | ---------------------------- |
| **Frontend** | React, React Router, Axios   |
| **Backend**  | Node.js, Express.js          |
| **Database** | MongoDB + Mongoose           |
| **Auth**     | JWT + bcrypt                 |
| **Styling**  | CSS Modules, Theme Variables |

## 📄 Documentation

The repository includes documentation of:

- Problem definition and hypothesis formation
- Research methodology and findings
- Algorithm design rationale and trade-offs
- Data challenges and solutions
- Testing approach and validation results
- Analysis of limitations and proposed future improvements

## 🌟 Deliverables

✅ Functional full-stack application  
✅ Matching algorithm implementation  
✅ Data processing pipeline  
✅ Source code with documentation  
✅ Deployed application (link: *add your deployed link here if available*)

## 📚 Reflection

- Identified key gaps in existing neighborhood-finding tools.
- Addressed real-world data inconsistencies through creative solutions.
- Balanced trade-offs between accuracy, scalability, and project constraints.
- Proposed ideas for improving data coverage and algorithm sophistication in the future.
