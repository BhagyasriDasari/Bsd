import React, { useEffect, useState } from "react";
import { getTopProducts, getTopCustomers } from "../services/api";
import DateRangePicker from "../components/DateRangePicker";

function Reports() {
  const [startDate, setStartDate] = useState("2023-01-01");
  const [endDate, setEndDate] = useState("2023-12-31");

  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  const fetchData = async () => {
    try {
      const productsRes = await getTopProducts(startDate, endDate);
      setProducts(productsRes.data);

      const customersRes = await getTopCustomers(startDate, endDate);
      setCustomers(customersRes.data);
    } catch (err) {
      console.error("❌ Error fetching reports:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  return (
    <div>
      <h2>📋 Reports</h2>

      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartChange={setStartDate}
        onEndChange={setEndDate}
      />

      <h3>Top Products</h3>
      <ul>
        {products.map((p, idx) => (
          <li key={idx}>
            {p.product} - {p.totalSales} sold
          </li>
        ))}
      </ul>

      <h3>Top Customers</h3>
      <ul>
        {customers.map((c, idx) => (
          <li key={idx}>
            {c.name} ({c.email}) - ${c.totalSpent}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;
