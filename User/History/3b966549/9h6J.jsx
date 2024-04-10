import "./TabbarOrganizer.scss";

import React from "react";
import home from "../../../assets/icons/icon_home.svg";
import activities from "../../../assets/icons/icon_activities.svg";
import selectedHome from "../../../assets/icons/Selected-Icons/selected_home.svg";
import selectedActivities from "../../../assets/icons/Selected-Icons/selected_activities.svg";
import selectedSettings from "../../../assets/icons/Selected-Icons/selected_settings.svg";
import selectedStatistics from "../../../assets/icons/Selected-Icons/selected_statistics.svg";
import settings from "../../../assets/icons/icon_settings.svg";
import statistics from "../../../assets/icons/icon_statistic.svg";
import { useNavigate } from "react-router-dom";

export const TabbarOrganizer = ({ active }) => {
  const navigate = useNavigate();

  return (
    <div className="tabbar-container">
      <button onClick={() => navigate("/")}>
        <img src={active === "home" ? selectedHome : home} alt="home" />
      </button>
      <button onClick={() => navigate("/actividades")}>
        <img src={active === "activities" ? selectedActivities : activities} alt="drinks" />
      </button>
      <button onClick={() => navigate("/estadisticas")}>
        <img
          src={active === "statistics" ? selectedStatistics : statistics}
          alt="statistics"
        />
      </button>
      <button onClick={() => navigate("/ajustes")}>
        <img
          src={active === "settings" ? selectedSettings : settings}
          alt="settings"
        />
      </button>
    </div>
  );
};
