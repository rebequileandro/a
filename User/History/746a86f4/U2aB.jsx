import React from 'react'
import { BackButton } from '../BackButton/BackButton'
import { GradientText } from '../Gradient-Text-Redirect/GradientText'
import './Header.scss'
import { getCurrentUser } from "../../redux/store/slices/user";
import notificationsIcon from "../../assets/icons/notification.svg"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Header = ({welcome, notification, backbutton, party, route}) => {
    const currentUser = useSelector(getCurrentUser);
    const navigate = useNavigate()
  return (
    <div className='header-oranizer-container'>
    <div className="header-container">
      <div className='header'>
          {backbutton ? <BackButton route={backbutton}/>
          : <div className="anchor"/>}
          <h1>WeDrink</h1>
         {notification ? <img className="notifications" src={notificationsIcon} alt="notifications"/>
          : <div className="anchor"/>}
      </div>
      {welcome &&
        <div className="organizer">
          <p>Bienvenido, {currentUser?.name ? currentUser.name : welcome}</p>
        </div>}
      {party && 
        <div className="party">
          <p>{party}</p>
          <div className="change">
            <GradientText text={'cambiar'} redirect={() => navigate(route)}/>
          </div>
        </div>}
    </div>
  </div>
  )
}
