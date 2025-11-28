const express = require('express');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', auth, (req, res) => {
  res.json([
    { id: 1, name: 'Cloud Computing' },
    { id: 2, name: 'IT Security' }
  ]);
});

module.exports = router;
