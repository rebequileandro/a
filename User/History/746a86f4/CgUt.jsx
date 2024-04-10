import React from 'react'
import { BackButton } from '../BackButton/BackButton'
import { GradientText } from '../Gradient-Text-Redirect/GradientText'
import './Header.scss'
import { getCurrentUser } from "../../redux/store/slices/user";
import notificationsIcon from "../../assets/icons/notification.svg"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import back from '../../assets/buttons/arrow-circle-left.svg'
import downArrow from '../../assets/icons/down-arrow.svg'

export const Header = ({welcome, notification, backbutton, party, route, OrganizerParty}) => {
    const currentUser = useSelector(getCurrentUser);
    const navigate = useNavigate()
  return (
    <div className='header-oranizer-container'>
    <div className="header-container">
      <div className='header'>
          {backbutton ? <BackButton route={backbutton}/>
          : <div className="anchor"/>}
          <h1>WeDrink</h1>
         {notification ?
            <img className="notifications" src={notificationsIcon} alt="notifications"/>
          : <div className="anchor"/>}
      </div>
        {welcome &&
        <div className="organizer">
          <p>Bienvenido, {currentUser?.name ? currentUser.name : welcome}</p>
        </div>}
        {OrganizerParty && 
        <div className="organizer-party">
          <p>{OrganizerParty}</p>
          <div className="change">
            <GradientText text={'cambiar'} redirect={() => navigate(route)}/>
          </div>
        </div>}
        {party && 
        <div className='party'>
            <h1>{party}</h1>
            <button>
                <img src={downArrow} alt="cambiar" />
            </button>
        </div>}
    </div>
  </div>
  )
}
