import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "@components/DropDown";
import Button from "@components/Button";
import logo from "@assets/images/logoMons.png";
import { navItems } from "@assets/NavItems.jsx";
import SNavBar from "./style";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <SNavBar className="navbar">
      <ul className="nav-items">
        <li>
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
        </li>
        {navItems.map((item) => {
          if (item.title === "Club") {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link to={item.path}>{item.title}</Link>
                {dropdown && <Dropdown />}
              </li>
            );
          }
          return (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <Button />
    </SNavBar>
  );
}

export default Navbar;
