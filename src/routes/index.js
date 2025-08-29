const express = require('express');
const router = express.Router();
const { verifyToken, verifyAdmin } = require('../middlewares/auth');

// Test ping route (requires admin authentication)
router.get('/ping', verifyToken, verifyAdmin, (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;
