import "./HeaderOrganizer.scss";

import { BackButton } from "../../../components/BackButton/BackButton";
import React from "react";
import { getCurrentUser } from "../../../redux/store/slices/user";
import notificationsIcon from "../../../assets/icons/notification.svg";
import { useSelector } from "react-redux";

export const HeaderOrganizer = ({organizer, notification, backbutton, party}) => {
  const currentUser = useSelector(getCurrentUser);
  
  return (
    <div className='header-oranizer-container'>
        <div className={'back-and-notifications'}>
           {backbutton && <BackButton route={backbutton}/>}
           {notification && <img src={notificationsIcon} alt="notifications"/>}
        </div>
        <h1>WeDrink</h1>
        {organizer && <p>Bienvenido, {organizer}</p>}
        {party && <p>{party}</p>}
    </div>
  );
};
