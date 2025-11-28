const express = require('express');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

const router = express.Router();

router.delete('/:id', auth, role('admin'), (req, res) => {
  res.json({ status: `User ${req.params.id} deleted` });
});

module.exports = router;
