
const express = require("express");
const fs = require("fs");
const path = require("path");
const Preference = require("../models/Preference");
const router = express.Router();

router.post("/submit", async (req, res) => {
  const { userId, safety, affordability, social, greenSpaces } = req.body;
  await Preference.findOneAndUpdate(
    { userId },
    { safety, affordability, social, greenSpaces },
    { upsert: true }
  );
  res.send("Preferences saved");
});

router.post("/result", async (req, res) => {
  const { safety, affordability, social, greenSpaces } = req.body;
  const data = fs.readFileSync(path.join(__dirname, "../../neighborhoodData.json"));
  const neighborhoods = JSON.parse(data);
  const scored = neighborhoods.map((n) => {
    const score =
      Math.abs(safety - n.safety) +
      Math.abs(affordability - n.affordability) +
      Math.abs(social - n.social) +
      Math.abs(greenSpaces - n.greenSpaces);
    return { ...n, score };
  });
  res.json(scored.sort((a, b) => a.score - b.score).slice(0, 3));
});

module.exports = router;