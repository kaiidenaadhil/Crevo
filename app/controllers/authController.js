const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT Token
const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register a user
exports.register = async (req, res) => {
  try {
    const { name, username, email, password, role } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ message: 'Email already exists.' });
    }

    const user = await User.create({ name, username, email, password, role });
    const token = generateToken(user._id, user.role);

    res.status(201).json({ message: 'User registered.', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login a user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = generateToken(user._id, user.role);
    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    // Generate reset token for password reset
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    // Update resetToken and resetTokenExpiry in the database
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes expiration time
    await user.save();

    console.log(`Password Reset Token: ${resetToken}`); // Replace with email service to send the token to user

    res.status(200).json({ message: 'Password reset email sent.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;

    // Verify the reset token
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);

    // Find the user by ID and check if the token matches and is not expired
    const user = await User.findOne({
      _id: decoded.id,
      resetToken,
      resetTokenExpiry: { $gt: Date.now() }  // Check if the token has expired
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token.' });
    }

    // Hash the new password using bcrypt
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password and clear resetToken and resetTokenExpiry
    user.password = hashedPassword;
    user.resetToken = undefined;  // Clear the reset token after use
    user.resetTokenExpiry = undefined;  // Clear the expiry time
    await user.save();

    res.status(200).json({ message: 'Password has been reset successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
