import React from "react";
import { Link } from "react-router";
import "./chartbox.css";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import { LINE_CHART_DATA } from "../../data/chartsData";

const ChartBox = ({
  color,
  icon,
  title,
  number,
  dataKey,
  percentage,
  chartData,
}) => {
  return (
    <div className="chartBoxWrap">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt={title} />
          <span>{title}</span>
        </div>
        <h2>{number}</h2>
        <Link to="">View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 30, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartText">
          <span
            className="percentage"
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
