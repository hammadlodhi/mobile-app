import React from "react";
import "./Navbar.css";
import { logo, signal } from "<@>/util/images";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar__links navbar__left">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#wholesale">Wholesale</a>
          </li>
        </ul>

        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
          <img src={signal} alt="Signal" />
        </div>

        <ul className="navbar__links navbar__right">
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#how-it-works">How it Works</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
