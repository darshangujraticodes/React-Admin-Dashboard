import React from "react";
import "./piechartbox.css";
import { pieChartBoxData } from "../../data/data";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const PieChartBox = () => {
  const data = pieChartBoxData;

  return (
    <div className="pieChartBoxWrap">
      <h2>Lead Source</h2>
      <div className="pieChart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "8px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="optionsWrap">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div
                style={{ backgroundColor: item.color }}
                className="dot"
              ></div>
              <span>{item.name}</span>
            </div>
            <span className="optionValue">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
