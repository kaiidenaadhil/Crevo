const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const i18n = require('./config/i18n');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes'); // Import authentication routes

const app = express();
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(i18n.init);

// Routes
app.use('/api/auth', authRoutes); // Add authentication routes
// app.use('/api/content', require('./routes/contentRoutes')); // Retain other routes if necessary

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
