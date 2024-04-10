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
  return (
    <div className="settings container-primary">
      <Profile />
      <div className="settings__mdcx">
        <h3 className="heading-tertiary heading-tertiary--main settings__mdcx-title">
          Mis MDCx:
        </h3>
        <Mdcx />
      </div>
      <button className="settings__logout highlighted" onClick={logout}>
        <Logout />
        Cerrar sesión
      </button>
    </div>
  );
};

export default Settings;
