
const mongoose = require('mongoose');

// Tag Schema
// Helps in categorizing and searching content
const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Tag', tagSchema);
