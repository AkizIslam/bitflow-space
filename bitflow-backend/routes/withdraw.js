const express = require("express");
const router = express.Router();

const Withdraw = require("../models/Withdraw");
const User = require("../models/User");


// Create Withdraw

router.post("/create", async (req, res) => {

try {

const { userId, amount, crypto, address } = req.body;

const withdraw = new Withdraw({

userId,
amount,
crypto,
address,
status:"pending"

});

await withdraw.save();

res.json({message:"Withdraw Requested"});

}catch(error){

res.status(500).json(error);

}

});


// Get Pending Withdraw (Admin)

router.get("/pending", async (req,res)=>{

try{

const withdraws = await Withdraw.find({status:"pending"})
.populate("userId","email balance")

res.json(withdraws)

}catch(error){

res.status(500).json(error)

}

})


// Step 3 — Approve Withdraw

router.post("/approve/:id", async (req,res)=>{

try{

const withdraw = await Withdraw.findById(req.params.id)

withdraw.status="approved"

await withdraw.save()

const user = await User.findById(withdraw.userId)

user.balance -= withdraw.amount

await user.save()

res.json({message:"Withdraw Approved"})

}catch(error){

res.status(500).json(error)

}

})


// Step 4 — Reject Withdraw

router.post("/reject/:id", async (req,res)=>{

try{

const withdraw = await Withdraw.findById(req.params.id)

withdraw.status="rejected"

await withdraw.save()

res.json({message:"Withdraw Rejected"})

}catch(error){

res.status(500).json(error)

}

})


module.exports = router;