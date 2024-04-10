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
      <h3 className="heading-primary heading-primary--main">
        Dr. {user?.fullName}
      </h3>
      <div>
        <Badge active key={1} id={1} />
        <Badge key={2} />
        <Badge key={3} />
        <Badge key={4} />
      </div>
    </div>
  );
};

export default Profile;
