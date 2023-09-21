import React from "react";
import "./Header.css";
import {  BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import { Link } from "react-router-dom";

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
                <Link to="/Home">Home</Link>
                <Link to ="/About">About</Link>
               
            </li>
            </ul>
      </nav>
      </p>
    </header>
  );
};

export default Header;