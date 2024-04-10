import React from "react";
import "./navbar.scss";
import logo from "../../assets/logo-1.svg";
export const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="bizarrap" />
    </nav>
  );
};
