const mongoose = require("mongoose");

const WithdrawSchema = new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

amount:Number,

crypto:String,

address:String,

status:{
type:String,
default:"pending"
},

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Withdraw",WithdrawSchema);