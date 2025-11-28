const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('../data/users');
const { secret } = require('../config/jwt');

const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) return res.status(401).json({ error: 'Invalid login' });

  const token = jwt.sign(
    { id: user.id, role: user.role, name: user.name },
    secret,
    { expiresIn: '2h' }
  );

  res.json({ token, role: user.role });
});

module.exports = router;
