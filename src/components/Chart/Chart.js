import React, { useState, useEffect } from "react";
import { dailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import "./Chart.css";
const Chart = () => {
  const [dailyData, setdailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await dailyData();
      setdailyData(dailyData);
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData(({ date }) => date),
        datasets: [{}, {}],
      }}
    />
  ) : null;
  return <div></div>;
};

export default Chart;
