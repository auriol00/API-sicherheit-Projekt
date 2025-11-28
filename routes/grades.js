const express = require('express');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/', auth, (req, res) => {
  res.json([{ course: 'Cloud Computing', grade: 1.7 }]);
});

router.post('/', auth, role('teacher'), (req, res) => {
  res.json({ status: 'Grade saved successfully' });
});

module.exports = router;
