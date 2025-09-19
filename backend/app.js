const express = require("express");
const cors = require("cors");
const analyticsRoutes = require("./routes/analytics");
const reportRoutes = require("./routes/report");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/analytics", analyticsRoutes);
app.use("/api/reports", reportRoutes);

module.exports = app;
