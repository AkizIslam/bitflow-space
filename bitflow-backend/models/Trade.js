const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({

userId:String,

amount:Number,

profit:Number,

status:{
type:String,
default:"running"
},

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Trade",TradeSchema)