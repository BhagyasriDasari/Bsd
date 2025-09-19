const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy API routes
app.get("/api/metrics", (req, res) => {
  res.json([
    { id: 1, name: "Revenue", value: "$120,000" },
    { id: 2, name: "Users", value: "3,500" },
    { id: 3, name: "Orders", value: "780" },
  ]);
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ]);
});

// NEW: Dummy report API for charts
app.get("/api/report", (req, res) => {
  res.json({
    revenueTimeseries: [
      { label: "Jan", revenue: 4000 },
      { label: "Feb", revenue: 3200 },
      { label: "Mar", revenue: 5000 },
      { label: "Apr", revenue: 2500 },
      { label: "May", revenue: 4500 },
    ],
    regionStats: [
      { region: "North", sales: 12000 },
      { region: "South", sales: 8000 },
      { region: "East", sales: 9500 },
      { region: "West", sales: 7000 },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
