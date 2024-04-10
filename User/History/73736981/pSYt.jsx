import React from "react";
import "./Sidebar.scss";
import WeDrink from "../../assets/shooza.svg";
import inicio from "../../assets/Sidebar/icon_inicio.svg";
import history from "../../assets/Sidebar/icon_history.svg";
import party from "../../assets/Sidebar/icon_party.svg";
import profile from "../../assets/Sidebar/icon_profile.svg";
import drink from "../../assets/Sidebar/icon_drink.svg";
import selectedDrink from "../../assets/Sidebar/selected/selected_drink.svg";
import selectedParty from "../../assets/Sidebar/selected/selected_party.svg";
import selectedInicio from "../../assets/Sidebar/selected/selected_inicio.svg";
import selectedHistory from "../../assets/Sidebar/selected/selected_history.svg";
import selectedProfile from "../../assets/Sidebar/selected/selected_profile.svg";
import { useNavigate } from "react-router";

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  return (
    <nav className="sidebar-space">
      <div className="sidebar-container">
        <img
          className="logo"
          src={WeDrink}
          alt="logo"
          onClick={() => window.location.reload()}
        />
        <div className="navigation-container">
          <button
            className="navigation-container__btn"
            onClick={() => navigate("/")}
          >
            <img
              src={active === "home" ? selectedInicio : inicio}
              alt="inicio"
            />
            {active === "home" ? <span>inicio</span> : "inicio"}
          </button>

          <button
            className="navigation-container__btn"
            onClick={() => navigate("/party")}
          >
            <img
              src={active === "party" ? selectedParty : party}
              className="party-img"
              alt="party"
            />
            {active === "party" ? <span>party</span> : "party"}
          </button>
          <button
            className="navigation-container__btn"
            onClick={() => navigate("/bebidas")}
          >
            <img src={active === "drink" ? selectedDrink : drink} alt="drink" />
            {active === "drink" ? <span>bebidas</span> : "bebidas"}
          </button>
          <button
            className="navigation-container__btn"
            onClick={() => navigate("/historial")}
          >
            <img
              src={active === "history" ? selectedHistory : history}
              alt="historial"
            />
            {active === "history" ? <span>historial</span> : "historial"}
          </button>
          <button
            className="navigation-container__btn"
            onClick={() => navigate("/perfil")}
          >
            <img
              src={active === "profile" ? selectedProfile : profile}
              alt="perfil"
            />
            {active === "profile" ? <span>mi cuenta</span> : "mi cuenta"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
