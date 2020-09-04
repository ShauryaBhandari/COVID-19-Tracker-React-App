import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api/index";
import "./Countryselector.css";
const CountrySelector = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  // console.log(fetchedCountries);
  return (
    <div className="container">
      <select
        className="custom-select custom-select-md form-control"
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option selected value={""}>
          Choose Country
        </option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
