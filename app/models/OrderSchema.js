
const mongoose = require('mongoose');

// Order Schema
// Tracks purchases made by users
const orderSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Content' }],
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
