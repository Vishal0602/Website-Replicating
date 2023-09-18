import React from "react";
import "./Header.css";
import {  BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
//import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <div className="xircls">
      <h1>XIRCLS</h1>
      </div>
      <p>
      <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
            </li>
            </ul>
      </nav>
      </p>
    </header>
  );
};

export default Header;