const mongoose = require("mongoose");

const DepositSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  crypto: String,
  txid: String,

  status: {
    type: String,
    default: "pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Deposit", DepositSchema);