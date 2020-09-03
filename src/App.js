import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountrySelector from "./components/CountrySelector/CountrySelector";
import "./App.css";
import { fetchData } from "./api/index";

export default class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(data);
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1 className="text-center ok">COVID-19 Tracker</h1>
        <div className="container">
          <Cards data={data} />
        </div>
      </div>
    );
  }
}
