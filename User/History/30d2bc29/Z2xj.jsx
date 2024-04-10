import "./HeaderOrganizer.scss";

import { BackButton } from "../../../components/BackButton/BackButton";
import React from "react";
import { getCurrentUser } from "../../../redux/store/slices/user";
import notificationsIcon from "../../../assets/icons/notification.svg";
import { useSelector } from "react-redux";

export const HeaderOrganizer = ({ organizer, notification, backbutton }) => {
  const currentUser = useSelector(getCurrentUser);

<<<<<<< HEAD
export const HeaderOrganizer = ({organizer, notification, backbutton, party}) => {
  return (
    <div className='header-oranizer-container'>
        <div className={backbutton ? 'back-and-notifications' : 'notifications' }>
           {backbutton && <BackButton route={backbutton}/>}
           {notification && <img src={notificationsIcon} alt="notifications"/>}
        </div>
        <h1>WeDrink</h1>
        {organizer && <p>Bienvenido, {currentUser.name}</p>}
        {party && <p>{party}</p>}
=======
  return (
    <div className="header-oranizer-container">
      <div className={backbutton ? "back-and-notifications" : "notifications"}>
        {backbutton && <BackButton route={backbutton} />}
        {notification && <img src={notificationsIcon} alt="notifications" />}
      </div>
      <h1>WeDrink</h1>
      <p>Bienvenido, {currentUser.name}</p>
>>>>>>> dev-goni
    </div>
  );
};
