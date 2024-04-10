import React from "react";
import "./settings.scss";
import { Profile, Mdcx } from "@/components";
import { useSelector } from "react-redux";
import { currentUser } from "@/store/slice/user.slice";
const Settings = () => {
  return (
    <div className="settings container-primary">
      <Profile />
      <h3>Mis MDCx:</h3>
      <Mdcx />
    </div>
  );
};

export default Settings;
