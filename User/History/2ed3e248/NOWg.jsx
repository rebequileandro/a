import React from "react";
import "./profile.scss";
import { currentUser } from "@/store/slice/user.slice";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector(currentUser);

  return (
    <div className="profile">
      <h3>{user?.email}</h3>
    </div>
  );
};

export default Profile;
