const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
  totalRevenue: Number,
  reportDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Sales", salesSchema);
