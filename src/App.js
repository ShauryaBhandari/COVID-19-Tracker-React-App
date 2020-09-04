import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountrySelector from "./components/CountrySelector/CountrySelector";
import "./App.css";
import { fetchData } from "./api/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(data);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    // console.log(country);
    // console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div>
        <Header />
        <h1 className="text-center py-4">COVID-19 Tracker</h1>
        <div className="container">
          <Cards data={data} />
          <CountrySelector handleCountryChange={this.handleCountryChange} />
          <Chart className="chart" data={data} country={country} />
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
