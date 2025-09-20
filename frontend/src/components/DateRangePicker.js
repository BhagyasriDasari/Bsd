import React from "react";

function DateRangePicker({ startDate, endDate, onStartChange, onEndChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        Start Date:{" "}
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartChange(e.target.value)}
        />
      </label>

      <label style={{ marginLeft: "1rem" }}>
        End Date:{" "}
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default DateRangePicker;
