import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/analytics",
});

export const getMetrics = () => API.get("/metrics");
export const getRevenueOverTime = (startDate, endDate) =>
  API.get("/daily-revenue", { params: { startDate, endDate } });
