const express = require("express");
const router = express.Router();
const { getRevenue } = require("../controllers/analyticsController");

router.get("/revenue", getRevenue);

module.exports = router;
