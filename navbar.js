import React from "react";
import { NavLink } from "react-router-dom";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        exact
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/CafePlz"
      >
        CafePlz
      </NavLink>
      <NavLink
        activeClassName="navbar_link--active"
        className="navbar_link"
        to="/Resume"
      >
        Resume
      </NavLink>
    </nav>
  );
};

export default Navbar;
