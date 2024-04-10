import React from "react";
import "./menu.scss";
import { NavLink } from "react-router-dom";
import ROUTES from "@/models/routes.models";
const Menu = ({ isOpen, setIsOpen }) => {
  const options = [
    {
      name: "Mi Cuenta",
      path: ROUTES.SETTINGS,
    },
    {
      name: "Casos Clínicos",
      path: "",
    },
    {
      name: "Foro",
      path: "",
    },
    {
      name: "Simulador",
      path: ROUTES.CLINICAL_SIMULATOR,
    },
  ];
  return (
    <nav className={`menu-navigation ${isOpen ? "menu-navigation--open" : ""}`}>
      <ul className="menu-navigation__items-container">
        {options.map((option) => (
          <li
            key={option.name}
            className="menu-navigation__item"
            onClick={() => (option.path ? setIsOpen(false) : null)}
          >
            <NavLink
              to={option.path ? option.path : "#"}
              className={`menu-navigation__link ${
                option.path ? "" : "menu-navigation__link--disabled"
              }`}
            >
              {option.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
