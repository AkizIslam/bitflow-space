const mongoose = require("mongoose");

const CryptoSchema = new mongoose.Schema({
  name: String,
  address: String
});

module.exports = mongoose.model("Crypto", CryptoSchema);