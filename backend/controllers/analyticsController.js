const Customer = require("../models/customer");

const getAnalytics = async (req, res) => {
  try {
    const sales = await Customer.find({ amount: { $exists: true } });

    const totalRevenue = sales.reduce((sum, sale) => sum + (sale.amount || 0), 0);
    const totalOrders = sales.length;
    const uniqueUsers = [...new Set(sales.map((sale) => sale.customer).filter(Boolean))].length;

    res.json({
      revenue: totalRevenue,
      orders: totalOrders,
      users: uniqueUsers,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

const getRevenueOverTime = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const dailyRevenue = await Customer.aggregate([
      {
        $match: {
          amount: { $exists: true },
          date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          total: { $sum: "$amount" },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json(dailyRevenue);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getAnalytics, getRevenueOverTime };
