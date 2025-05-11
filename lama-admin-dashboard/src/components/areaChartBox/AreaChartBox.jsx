import React from "react";
import "./areachartbox.css";
import {
  ResponsiveContainer,
  AreaChart,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
} from "recharts";
import { areaChartBoxData } from "../../data/data";

const AreaChartBox = () => {
  const data = areaChartBoxData;
  return (
    <div className="areaChartBoxWrap">
      <h2>Revenue Analytics</h2>
      <div className="areaChart">
        <ResponsiveContainer width="99%" height={350}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
