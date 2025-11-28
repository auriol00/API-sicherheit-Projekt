require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const coursesRoutes = require('./routes/courses');
const gradesRoutes = require('./routes/grades');
const usersRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', authRoutes);
app.use('/courses', coursesRoutes);
app.use('/grades', gradesRoutes);
app.use('/users', usersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Campus API running on port ${port}`);
});
