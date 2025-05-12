import React from "react";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import { LINE_CHART_DATA } from "../../data/chartsData";

const GraphBox = ({ title, totalValue, percentVal, chartData }) => {
  //   const data = LINE_CHART_DATA;

  return (
    <div className="graphBox Box1">
      <div className="leftGraphBoxContent">
        <h2 className="graphBoxTitle">{title}</h2>

        <p className="graphBoxVal">
          <span className="graphValue">{totalValue}</span>
          <span className="graphPercentVal">
            <span className={percentVal > 0 ? "greenText" : "redText"}>
              {percentVal}
            </span>{" "}
            {percentVal > 0 ? (
              <img src="up-arrow.png" alt="" />
            ) : (
              <img src="down-arrow.png" alt="" />
            )}
          </span>
        </p>
      </div>
      <div className="rightGraphBoxContent">
        <div className="moreMenuIconWrap">
          <img src="more.png" className="moreMenuIcon" alt="" />
        </div>
        <div className="graphChartWrap">
          <ResponsiveContainer width="90%" height={80}>
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 30, y: 50 }}
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#6FC2A0"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GraphBox;
