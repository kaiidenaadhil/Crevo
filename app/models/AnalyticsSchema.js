
const mongoose = require('mongoose');

// Analytics Schema
// Tracks user behavior, sales trends, and content popularity
const analyticsSchema = new mongoose.Schema({
  content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
  views: { type: Number, default: 0 },
  purchases: { type: Number, default: 0 },
  ratings: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Analytics', analyticsSchema);
