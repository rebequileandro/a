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
        <div className='header'>
           {backbutton && <BackButton route={backbutton}/>}
            <h1>WeDrink</h1>
           {notification && <img className="notifications" src={notificationsIcon} alt="notifications"/>}
        </div>
        {organizer && <p>Bienvenido, {organizer}</p>}
        {party && <p>{party}</p>}
    </div>
  );
};
