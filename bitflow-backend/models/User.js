const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,

  balance: {
    type: Number,
    default: 0
  },

  role: {
    type: String,
    default: "user"
  },

  activePlans: [
    {
      planId: String,
      amount: Number,
      profit: Number,
      startDate: Date
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);