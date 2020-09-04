import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import "./Chart.css";
const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    };
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Line.defaults.global.defaultFontColor = "red";

  const lineChart =
    dailyData[0] !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),

          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#89ff00",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "#00bcd4",
              backgroundColor: "rgba(255,255,255,0.6)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;
  return <div className="container my-4 chart">{lineChart}</div>;
};

export default Chart;
