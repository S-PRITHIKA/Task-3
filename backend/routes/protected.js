const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const authorizeRole = require('../middleware/authorize');

router.get('/user-profile', verifyToken, (req, res) => {
  res.json({ message: "User profile accessed", user: req.user });
});


router.get('/admin-dashboard', verifyToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: "Welcome Admin! Access granted." });
});

router.get('/manage-content', verifyToken, authorizeRole('admin', 'moderator'), (req, res) => {
  res.json({ message: "Access granted to admin/moderator" });
});

module.exports = router;
