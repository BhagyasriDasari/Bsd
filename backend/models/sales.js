const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }, // make sure this exists
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  amount: Number, // total revenue per sale
  region: String,
  reportDate: Date
});

module.exports = mongoose.model('Sales', salesSchema);
