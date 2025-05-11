import React from "react";
import "./home.css";
import TopDealBox from "../../components/topDeals/TopDealBox";
import ChartBox from "../../components/lineChartBox/ChartBox";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data/data";

import BarChartBox from "../../components/barChartBox/BarChartBox";
import { barChartBoxVisit, barChartBoxRevenue } from "../../data/data";
import AreaChartBox from "../../components/areaChartBox/AreaChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopDealBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <AreaChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
