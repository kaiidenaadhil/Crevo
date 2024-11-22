
const mongoose = require('mongoose');

// Audit Log Schema
// Tracks changes and actions on the platform for security and debugging
const auditLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: { type: String, required: true },
  details: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AuditLog', auditLogSchema);
