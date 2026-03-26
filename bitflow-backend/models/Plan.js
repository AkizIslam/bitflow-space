const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  name: String,
  percentage: Number,
  min: Number,
  max: Number,
  duration: Number
});

module.exports = mongoose.model("Plan", PlanSchema);