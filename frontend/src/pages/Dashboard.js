import React, { useEffect, useState } from "react";
import { getMetrics, getRevenueOverTime } from "../services/api";
import MetricsCard from "../components/MetricsCard";
import ChartComponent from "../components/ChartComponent";

function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [revenueData, setRevenueData] = useState([]);

  const [startDate, setStartDate] = useState("2025-09-01");
  const [endDate, setEndDate] = useState("2025-09-30");

  const fetchData = async () => {
    try {
      const metricsRes = await getMetrics();
      setMetrics(metricsRes.data);

      const revenueRes = await getRevenueOverTime(startDate, endDate);
      setRevenueData(
        revenueRes.data.map((item) => ({
          day: item._id,
          revenue: item.total,
        }))
      );
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Dashboard</h2>

      {metrics && (
        <div style={{ display: "flex" }}>
          <MetricsCard title="Revenue" value={`$${metrics.revenue}`} />
          <MetricsCard title="Users" value={metrics.users} />
          <MetricsCard title="Orders" value={metrics.orders} />
        </div>
      )}

      <h3>Revenue Over Time</h3>
      <ChartComponent
        data={revenueData}
        xKey="day"
        yKey="revenue"
        title="Revenue Growth"
      />
    </div>
  );
}

export default Dashboard;
