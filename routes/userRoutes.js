const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// @desc    User dashboard - any logged in user
// @route   GET /api/user/dashboard
// @access  Private
router.get('/dashboard', protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: `Welcome to your dashboard, ${req.user.name}!`,
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  });
});

module.exports = router;
