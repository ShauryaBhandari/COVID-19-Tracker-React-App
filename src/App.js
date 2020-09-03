import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountrySelector from "./components/CountrySelector/CountrySelector";
import "./App.css";
import { fetchData } from "./api/index";

export default class App extends Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }
  render() {
    return (
      <div>
        <h1 className="text-center ok">Hello</h1>
      </div>
    );
  }
}
