
const mongoose = require('mongoose');

// Coupon Schema
// Manages discounts or promotional codes
const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discountType: { type: String, enum: ['percentage', 'flat'], required: true },
  discountValue: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Coupon', couponSchema);
