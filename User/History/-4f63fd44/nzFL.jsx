import "./TabbarOrganizer.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import home from "../../../assets/icons/icon_home.svg";
import activities from "../../../assets/icons/icon_activities.svg";
import selectedHome from "../../../assets/icons/Selected-Icons/selected_home.svg";
import selectedActivities from "../../../assets/icons/Selected-Icons/selected_activities.svg";
import selectedSettings from "../../../assets/icons/Selected-Icons/selected_settings.svg";
import selectedStatistics from "../../../assets/icons/Selected-Icons/selected_statistics.svg";
import selectedDink from '../../../assets/icons/Selected-Icons/selected_drinks.svg'
import settings from "../../../assets/icons/icon_settings.svg";
import statistics from "../../../assets/icons/icon_statistic.svg";
import drinks from '../../../assets/icons/icon_drinks_tapbar.svg'

export const TabbarOrganizer = ({ active }) => {
  const currentUser = useSelector((state) => state.user);
  return (
    <nav className="tabbar-container">
      <NavLink 
        className={(navigation) => navigation.isActive ? "active_home" : null}
        to="/">
        <img src={home} alt="home"/>
      </NavLink>
      <NavLink to={`${currentUser.rol === "unitManager" ? '/inventario/' + currentUser.idParty : "/actividades"}`}>
        <img src={ currentUser.rol === "unitManager" ? (active === "drinks" ? selectedDink : drinks)
          : active === "activities" ? selectedActivities : activities} alt="drinks" />
      </NavLink>
      <NavLink to="/estadisticas">
        <img
          src={active === "statistics" ? selectedStatistics : statistics}
          alt="statistics"
        />
      </NavLink>
      <NavLink to="/ajustes">
        <img
          src={active === "settings" ? selectedSettings : settings}
          alt="settings"
        />
      </NavLink>
    </nav>
  );
};
