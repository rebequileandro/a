import "./Tapbar.scss";

import { NavLink } from "react-router-dom";
import React from "react";
import activitiesIcon from "../../../assets/icons/icon_activities.svg";
import drinksIcon from "../../../assets/icons/icon_drinks_tapbar.svg";
import homeIcon from "../../../assets/icons/icon_home.svg";
import selectedActivitiesIcon from "../../../assets/icons/Selected-Icons/selected_activities.svg";
import selectedDrinksIcon from "../../../assets/icons/Selected-Icons/selected_drinks.svg";
import selectedHomeIcon from "../../../assets/icons/Selected-Icons/selected_home.svg";
import selectedSettingsIcon from "../../../assets/icons/Selected-Icons/selected_settings.svg";
import settingsIcon from "../../../assets/icons/icon_settings.svg";

export default function Tapbar({ active }) {
  return (
    <nav className="tabbar-space">
      <div className="tabbar">
        <NavLink to="/">
          <img
            src={active === "home" ? selectedHomeIcon : homeIcon}
            alt="Home"
          />
        </NavLink>
        <NavLink to="/marketplace">
          <img
            src={active === "marketplace" ? selectedDrinksIcon : drinksIcon}
            alt="Marketplace"
          />
        </NavLink>
        <NavLink to="/mis-actividades">
          <img
            src={
              active === "activities" ? selectedActivitiesIcon : activitiesIcon
            }
            alt="Actividades"
          />
        </NavLink>
        <NavLink to="/ajustes">
          <img
            src={active === "settings" ? selectedSettingsIcon : settingsIcon}
            alt="Configuración"
          />
        </NavLink>
      </div>
    </nav>
  );
}
