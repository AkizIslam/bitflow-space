const express = require("express");
const router = express.Router();

const Deposit = require("../models/Deposit");
const User = require("../models/User");


// Create Deposit
router.post("/create", async (req, res) => {
  try {
    const { userId, amount, crypto, txid } = req.body;

    const deposit = new Deposit({
      userId,
      amount,
      crypto,
      txid,
      status: "pending"
    });

    await deposit.save();

    res.json({ message: "Deposit Submitted" });

  } catch (error) {
    res.status(500).json(error);
  }
});


// Step 2 — Get Pending Deposits (Admin)

router.get("/pending", async (req, res) => {
  try {

    const deposits = await Deposit.find({ status: "pending" })
    .populate("userId", "email balance");

    res.json(deposits);

  } catch (error) {
    res.status(500).json(error);
  }
});


// Approve Deposit (Admin)

router.post("/approve/:id", async (req, res) => {
  try {

    const deposit = await Deposit.findById(req.params.id);

    deposit.status = "approved";
    await deposit.save();

    const user = await User.findById(deposit.userId);

    user.balance += deposit.amount;

    await user.save();

    res.json({ message: "Deposit Approved" });

  } catch (error) {
    res.status(500).json(error);
  }
});


// Reject Deposit

router.post("/reject/:id", async (req, res) => {
  try {

    const deposit = await Deposit.findById(req.params.id);

    deposit.status = "rejected";

    await deposit.save();

    res.json({ message: "Deposit Rejected" });

  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;