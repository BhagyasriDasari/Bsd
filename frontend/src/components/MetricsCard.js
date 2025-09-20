import React from "react";

const MetricsCard = ({ title, value }) => (
  <div style={{
    padding: "20px",
    margin: "10px",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    minWidth: "150px",
    textAlign: "center",
  }}>
    <h4>{title}</h4>
    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
  </div>
);

export default MetricsCard;
