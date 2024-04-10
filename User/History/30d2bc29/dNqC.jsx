import "./HeaderOrganizer.scss";

import { BackButton } from "../../../components/BackButton/BackButton";
import React from "react";
import { getCurrentUser } from "../../../redux/store/slices/user";
import notificationsIcon from "../../../assets/icons/notification.svg";
import { useSelector } from "react-redux";
import { GradientText } from "../../../components/Gradient-Text-Redirect/GradientText";

export const HeaderOrganizer = ({organizer, notification, backbutton, party}) => {
  const currentUser = useSelector(getCurrentUser);
  
  return (
    <div className='header-oranizer-container'>
        <div className='header'>
            {backbutton ? <BackButton route={backbutton}/>
            : <div className="anchor"/>}
            <h1>WeDrink</h1>
           {notification ? <img className="notifications" src={notificationsIcon} alt="notifications"/>
            : <div className="anchor"/>}
        </div>
        {organizer &&
          <div className="organizer">
            <p>Bienvenido, {organizer}</p>
          </div>}
        {party && 
          <div className="party">
            <p>{party}</p>
            <GradientText text={'cambiar'}/>
          </div>}
    </div>
  );
};
