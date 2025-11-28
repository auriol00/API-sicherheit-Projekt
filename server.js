require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const coursesRoutes = require('./routes/courses');
const gradesRoutes = require('./routes/grades');
const usersRoutes = require('./routes/users');

const app = express();

// Fix for Render: MUST come before routes
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/login', authRoutes);
app.use('/courses', coursesRoutes);
app.use('/grades', gradesRoutes);
app.use('/users', usersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Campus API running on port ${port}`);
});
