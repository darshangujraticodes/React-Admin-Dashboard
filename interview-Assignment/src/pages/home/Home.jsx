import React from "react";
import "./home.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts";
import { LINE_CHART_DATA } from "../../data/chartsData";
import GraphBox from "../../components/graphBox/GraphBox";
import { HOME_LINE_CHART } from "../../data/data";
import PieCocentricChart from "../../components/pieConcentric/PieCocentricChart";
import DoctorTableList from "../../components/doctorList/DoctorTableList";

const Home = () => {
  const data = LINE_CHART_DATA;
  return (
    <div className="home">
      <h1 className="pageTitle">
        Dashboard <span className="greenText">/ Analytics and Reports</span>
      </h1>
      <div className="linGraphSection">
        <div className="boxGrapWrap">
          {HOME_LINE_CHART.map((item) => (
            <GraphBox
              key={item.title}
              title={item.title}
              totalValue={item.value}
              percentVal={item.percentageVal}
              chartData={item.chartData}
            />
          ))}
        </div>
      </div>
      <div className="secondGraphSection row">
        <div className="cashflowSection">
          <div className="upperTitle">
            <h3 className="boxTitle"> Cashflow </h3>

            <select className="selectBtn" name="" id="">
              <option value="12-months">Last 12 Months</option>
              <option value="6-months">Last 6 Months</option>
              <option value="2-months">Last 2 Months</option>
              <option value="1-months">Last 1 Months</option>
            </select>
          </div>

          <div className="upperTitle">
            <p>
              Total <span className="cashflowValue">44,10,840</span>
            </p>

            <div className="graphChartTitleWrap itemCenter">
              <p className="greenCircleDot"></p>
              <p>Income</p>
            </div>
          </div>

          <div className="cashflowGraphWrap">
            <ResponsiveContainer width="99%" height={400}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#6FC2A0"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="expenseSection">
          <div>
            <PieCocentricChart />
          </div>
        </div>
      </div>
      <div className="doctorListSection">
        <DoctorTableList />
      </div>
    </div>
  );
};

export default Home;
