const Sales = require("../models/sales");

// Example: total revenue between dates
exports.getRevenue = async (req, res) => {
  const { startDate, endDate } = req.query;
  if (!startDate || !endDate)
    return res.status(400).json({ error: "startDate and endDate are required" });

  try {
    const result = await Sales.aggregate([
      { $match: { reportDate: { $gte: new Date(startDate), $lte: new Date(endDate) } } },
      { $group: { _id: null, totalRevenue: { $sum: "$totalRevenue" } } },
    ]);
    res.json(result[0] || { totalRevenue: 0 });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
