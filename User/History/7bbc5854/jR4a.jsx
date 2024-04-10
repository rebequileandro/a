import React from "react";
import "./menu.scss";
import { NavLink } from "react-router-dom";
const Menu = ({ isOpen }) => {
  const options = [
    {
      name: "Mi Cuenta",
      path: "/",
    },
    {
      name: "Casos Clínicos",
      path: "/",
    },
    {
      name: "Foro",
      path: "/",
    },
    {
      name: "Simulador",
      path: "/",
    },
  ];
  return (
    <nav className={`menu-navigation ${isOpen ? "menu-navigation--open" : ""}`}>
      <ul>
        {options.map((option) => (
          <li key={option.name}>
            <NavLink to={option.path}>{option.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
