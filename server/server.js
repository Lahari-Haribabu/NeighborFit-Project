// === backend/server.js ===
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const matchRoutes = require("./routes/match");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/neighborfit");

app.use("/api/auth", authRoutes);
app.use("/api/match", matchRoutes);

app.get("/", (req, res) => {
  res.send("NeighborFit backend is running");
});

app.listen(5001, () => console.log("Server running on port 5001"));
