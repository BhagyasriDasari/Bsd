const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  customer: String,    // customer name
  product: String,     // product sold
  amount: Number,      // sale amount
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Customer", CustomerSchema);
