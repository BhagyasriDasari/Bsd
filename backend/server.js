// server.js (top of file)
require("dotenv").config(); // <-- load .env first
const express = require("express");
const connectDB = require("./config/db");

// optional debug
console.log("DEBUG: MONGO_URI =", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

// connect DB
connectDB();

// your routes...
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
