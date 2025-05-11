import React from "react";
import "./barchartbox.css";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const BarChartBox = ({ title, color, dataKey, chartData }) => {
  return (
    <div className="barChartBoxWrap">
      <h2>{title}</h2>
      <div className="barChart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#262626",
                borderRadius: "8px",
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
