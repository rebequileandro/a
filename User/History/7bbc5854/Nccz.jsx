import React from "react";
import "./menu.scss";
const Menu = () => {
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
    <nav>
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
