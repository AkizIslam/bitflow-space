const mongoose = require("mongoose")

const ReferralSchema = new mongoose.Schema({

referrer:String,
user:String,

bonus:{
type:Number,
default:5
},

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Referral",ReferralSchema)