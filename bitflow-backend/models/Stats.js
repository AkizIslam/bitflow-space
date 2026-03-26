const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  totalTrades: Number,
  totalProfit: Number,
  totalVolume: Number
});

module.exports = mongoose.model("Stats", StatsSchema);