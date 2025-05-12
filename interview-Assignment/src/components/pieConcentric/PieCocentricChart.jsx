import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import "./piechart.css";
import { pieConcentricData } from "../../data/data";

const PieCocentricChart = () => {
  const data = pieConcentricData;
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="expenses-card">
      <div className="upperTitle">
        <h3 className="boxTitle"> Expense </h3>
        <select className="selectBtn" name="" id="">
          <option value="12-months">Last 12 Months</option>
          <option value="6-months">Last 6 Months</option>
          <option value="2-months">Last 2 Months</option>
          <option value="1-months">Last 1 Months</option>
        </select>
      </div>

      <div className="chart-container">
        <div className="center-label">₹{total.toLocaleString("en-IN")}</div>

        <ResponsiveContainer width="90%" height={300}>
          <PieChart>
            <Tooltip
              formatter={(value, name) => [
                `₹${value.toLocaleString("en-IN")}`,
                name,
              ]}
            />

            {data.map((entry, index) => (
              <Pie
                key={index}
                data={[entry]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={80 + index * 15}
                outerRadius={85 + index * 15}
                startAngle={90}
                endAngle={-270}
              >
                <Tooltip />
                <Cell fill={entry.color} />
              </Pie>
            ))}
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <p>
              <span
                className="color-dot"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.name}</span>
            </p>

            <p>
              ₹
              <span className="pieChartAmount">
                {item.value.toLocaleString("en-IN")}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCocentricChart;
