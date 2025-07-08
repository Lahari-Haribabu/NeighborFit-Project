// === backend/models/Preference.js ===
const mongoose = require("mongoose");

const PreferenceSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  safety: Number,
  affordability: Number,
  social: Number,
  greenSpaces: Number
});

module.exports = mongoose.model("Preference", PreferenceSchema);