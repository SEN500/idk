/**
 * server/index.js
 * Minimal Express server with basic security middleware and placeholder routes.
 * Expand this file with auth, DB, and Socket.IO in next steps.
 */

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Basic security and parsing
app.use(helmet());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(morgan('dev'));

// Basic rate limiter for public endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 200 requests per windowMs
});
app.use('/api/', apiLimiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * Placeholder auth route group
 * Expand with real authentication (email + Google OAuth) and JWT/session handling.
 */
app.post('/api/auth/register', (req, res) => {
  // TODO: validate, hash password, create user in DB
  res.status(501).json({ message: 'Register endpoint not implemented yet' });
});
app.post('/api/auth/login', (req, res) => {
  // TODO: verify credentials, issue JWT/cookie
  res.status(501).json({ message: 'Login endpoint not implemented yet' });
});

/**
 * Placeholder posts endpoints
 * We will add real DB-backed CRUD for posts, likes, comments.
 */
app.get('/api/posts', (req, res) => {
  // TODO: fetch feed (with pagination, filters, privacy)
  res.json({ posts: [], message: 'No posts yet — implement DB next' });
});

app.post('/api/posts', (req, res) => {
  // TODO: create post, validate media uploads
  res.status(501).json({ message: 'Create post endpoint not implemented yet' });
});

// Serve static files (if deploying frontend from same server)
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');
  app.use(express.static(clientBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  // small privacy-conscious startup log
  console.log(`ConnectHub server listening on port ${PORT}`);
});
