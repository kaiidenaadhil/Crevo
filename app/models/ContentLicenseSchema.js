
const mongoose = require('mongoose');

// Content License Schema
// Manages licenses attached to purchased content
const contentLicenseSchema = new mongoose.Schema({
  content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  licenseType: { type: String, required: true },
  expirationDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ContentLicense', contentLicenseSchema);
