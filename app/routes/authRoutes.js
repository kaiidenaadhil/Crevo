const express = require('express');
const { register, login, forgotPassword, resetPassword } = require('../controllers/authController');
const { protect, restrictTo } = require('../middlewares/authMiddleware');
const router = express.Router();

// Register a new user
router.post('/register', register);

// Login a user
router.post('/login', login);

// Forgot password (request reset)
router.post('/forgot-password', forgotPassword);

// Reset password using the reset token
router.post('/reset-password', resetPassword);

// Example: Role-protected route
router.get('/admin-only', protect, restrictTo('admin'), (req, res) => {
  res.status(200).json({ message: 'Welcome Admin!' });
});

module.exports = router;
