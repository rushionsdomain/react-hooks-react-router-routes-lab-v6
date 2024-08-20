// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/actors" activeClassName="active">
        Actors
      </NavLink>
      <NavLink to="/directors" activeClassName="active">
        Directors
      </NavLink>
    </nav>
  );
};

export default NavBar;
