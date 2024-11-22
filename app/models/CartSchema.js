
const mongoose = require('mongoose');

// Cart Schema
// Allows users to manage items they plan to purchase
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cart', cartSchema);
