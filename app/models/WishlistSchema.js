
const mongoose = require('mongoose');

// Wishlist Schema
// Users can save content they want to buy later
const wishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Content' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
