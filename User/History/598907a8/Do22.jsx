import React from "react";
import "./settings.scss";
import { Profile, Mdcx } from "@/components";
import { useSelector } from "react-redux";
import { currentUser } from "@/store/slice/user.slice";
import { Logout } from "@/components/SVG";
const Settings = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const settingsOptions = [
    {
      title: "Mi cuenta",
      path: "/settings/account",
    },
    {
      title: "Me gustas",
      path: "/settings/likes",
    },
    {
      title: "Mi casos",
      path: "/settings/cases",
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
      <div>
        {settingsOptions.map((option) => {
          return (
            <div className="settings__option">
              <a href={option.path}>{option.title}</a>
            </div>
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
