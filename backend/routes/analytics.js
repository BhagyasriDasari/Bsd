const express = require("express");
const router = express.Router();
const { getAnalytics, getRevenueOverTime } = require("../controllers/analyticsController");

// Metrics
router.get("/metrics", getAnalytics);

// Revenue over time
router.get("/daily-revenue", getRevenueOverTime);

module.exports = router;
