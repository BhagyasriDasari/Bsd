const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

// Reports
router.get("/", reportController.getReports);

module.exports = router;
