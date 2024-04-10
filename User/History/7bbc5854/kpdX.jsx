import React from "react";
import "./menu.scss";
import { NavLink } from "react-router-dom";
import ROUTES from "@/models/routes.models";
const Menu = ({ isOpen, setIsOpen }) => {
  const options = [
    {
      name: "Mi Cuenta",
      path: "",
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
            onClick={() => setIsOpen(false)}
          >
            <NavLink to={option.path ?? null} className="menu-navigation__link">
              {option.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
