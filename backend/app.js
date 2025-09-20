// backend/app.js
const express = require("express");
const connectDB = require("./config/db");

connectDB(); // connect to MongoDB

const app = express();

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

module.exports = app; // export the app
