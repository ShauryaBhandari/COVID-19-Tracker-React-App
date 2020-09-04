import React from "react";
import "./Header.css";
const Header = () => {
  const image = require("../../../src/header.svg");
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        <img src={image} alt="logo" className="logo" />
      </a>
    </nav>
  );
};

export default Header;
