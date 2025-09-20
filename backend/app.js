const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const analyticsRoutes = require("./routes/analytics");
const reportRoutes = require("./routes/report");

const app = express();

// Connect MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/analytics", analyticsRoutes);
app.use("/api/report", reportRoutes);

module.exports = app;
