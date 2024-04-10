import React from "react";
import "./profile.scss";
import { currentUser } from "@/store/slice/user.slice";
import { useSelector } from "react-redux";
import { Badge } from "../SVG";

const Profile = () => {
  //   const user = useSelector(currentUser);
  const user = {
    fullName: "Josue I Lacruz V.",
  };

  return (
    <div className="profile">
      <div>
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
      <img
        src={user?.photo ?? "/assets/Profile/profile-picture.png"}
        alt="profile"
        width={116}
        height={110}
      />
    </div>
  );
};

export default Profile;
