import React from "react";
import "./settings.scss";
import { Profile } from "@/components";
import { useSelector } from "react-redux";
import { currentUser } from "@/store/slice/user.slice";
const Settings = () => {
  const user = useSelector(currentUser);

  return (
    <div className="settings container-primary">
      <Profile />
    </div>
  );
};

export default Settings;
