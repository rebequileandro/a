import React from "react";
import "./profile.scss";
import { currentUser } from "@/store/slice/user.slice";
import { useSelector } from "react-redux";

const Profile = () => {
  //   const user = useSelector(currentUser);
  const user = {
    fullName: "John Doe",
  };

  return (
    <div className="profile">
      <h3 className="heading-primary heading-primary--main">
        Dr. {user?.fullName}
      </h3>
    </div>
  );
};

export default Profile;
