import React from "react";
import "./profile.scss";
import { currentUser } from "@/store/slice/user.slice";
import { useSelector } from "react-redux";
import { Badge } from "../SVG";

const Profile = () => {
  //   const user = useSelector(currentUser);
  const user = {
    fullName: "John Doe",
  };

  return (
    <div className="profile">
      <h3 className="heading-secondary heading-secondary--main">
        Dr. {user?.fullName}
      </h3>
      <div className="profile__badges">
        <Badge active />
        <Badge />
        <Badge />
        <Badge />
      </div>
    </div>
  );
};

export default Profile;
