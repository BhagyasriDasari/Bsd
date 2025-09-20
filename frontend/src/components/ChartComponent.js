import React from "react";
import ReactECharts from "echarts-for-react";

const ChartComponent = ({ data, xKey, yKey, title }) => {
  const options = {
    title: { text: title },
    tooltip: {},
    xAxis: {
      type: "category",
      data: data.map((item) => item[xKey]),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.map((item) => item[yKey]),
        type: "line",
        smooth: true,
      },
    ],
  };

  return <ReactECharts option={options} style={{ height: "400px" }} />;
};

export default ChartComponent;
