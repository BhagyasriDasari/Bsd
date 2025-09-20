const express = require("express");
const connectDB = require("./config/db"); // your DB connection
const Customer = require("./models/customer"); // require the model

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Your new root route
app.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Use other routes
app.use("/api/analytics", require("./routes/analytics"));
app.use("/api/reports", require("./routes/report"));

// Export app (if server.js starts it)
module.exports = app;
