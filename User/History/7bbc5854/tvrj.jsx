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
      <ul className="menu-navigation__items-container">
        {options.map((option) => (
          <li key={option.name} className="menu-navigation__item">
            <NavLink to={option.path}>{option.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
