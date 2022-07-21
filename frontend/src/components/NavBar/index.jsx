import React from "react";
import { NavLink } from "react-router-dom";
import logo from "@assets/images/logoMons.png";
import SNavBar from "./style";

function Navbar() {
  return (
    <SNavBar className="navigation">
      <ul>
        <NavLink to="/" className="logo">
          <img src={logo} alt="" />
        </NavLink>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/news"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>News</li>
        </NavLink>
        <NavLink
          to="/club"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Club</li>
        </NavLink>
        <NavLink
          to="/planning"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Planning</li>
        </NavLink>
        <NavLink
          to="/connexion"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Connexion</li>
        </NavLink>
        {/* <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>à propos</li>
        </NavLink> */}
      </ul>
    </SNavBar>
  );
}

export default Navbar;
