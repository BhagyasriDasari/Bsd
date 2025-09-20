const Sales = require("../models/sales");

exports.getReports = async (req, res) => {
  try {
    const reports = await Sales.find()
      .populate("customerId", "name email region")
      .populate("productId", "name category price")
      .limit(20);

    res.json(reports);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
