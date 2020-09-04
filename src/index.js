import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js";
Chart.plugins.unregister(ChartDataLabels);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load
