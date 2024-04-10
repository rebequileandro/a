import React from "react";
import "./settings.scss";
import { Profile, Mdcx } from "@/components";
import { useSelector } from "react-redux";
import { currentUser } from "@/store/slice/user.slice";
import { Logout } from "@/components/SVG";
import { Link } from "react-router-dom";
const Settings = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const settingsOptions = [
    {
      title: "Mi cuenta",
      path: "#",
    },
    {
      title: "Me gustas",
      path: "#",
    },
    {
      title: "Mi casos",
      path: "#",
    },
  ];
  return (
    <div className="settings container-primary">
      <Profile />
      <div className="settings__mdcx">
        <h3 className="heading-tertiary heading-tertiary--main settings__mdcx-title">
          Mis MDCx:
        </h3>
        <Mdcx />
      </div>
      <div className="settings__options-container">
        {settingsOptions.map((option) => {
          return (
            <Link
              className="settings__option settings__option--disabled"
              to={option.path}
            >
              <span className="highlighted">{option.title}</span>
            </Link>
          );
        })}
      </div>
      <button className="settings__logout highlighted" onClick={logout}>
        <Logout />
        Cerrar sesión
      </button>
    </div>
  );
};

export default Settings;
