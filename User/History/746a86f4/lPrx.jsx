import React from 'react'
import './Header.scss'
import { getCurrentUser } from "../../redux/store/slices/user";
import notificationsIcon from "../../assets/icons/notification.svg"
import { useSelector } from "react-redux";
import back from '../../assets/buttons/arrow-circle-left.svg'
import downArrow from '../../assets/icons/down-arrow.svg'

export const Header = ({welcome, notification, backbutton, party, OrganizerParty, title}) => {
    const currentUser = useSelector(getCurrentUser);
  return (
    <div className='header-container'>
        <div className="header-container">
            <div className='header'>
                {backbutton ?
                    <button onClick={() => backbutton()}>
                        <img src={back} alt='atras'/>
                    </button>
                : <div className="anchor"/>}
                <h1>WeDrink</h1>
                {notification ?
                    <button>
                        <img className="notifications" src={notificationsIcon} alt="notifications"/>
                    </button>
                : <div className="anchor"/>}
            </div>
            {welcome &&
            <div className="organizer">
            <p>Bienvenido, {currentUser?.name}</p>
            </div>}
            {OrganizerParty && 
            <div className="organizer-party-container">
            <h2 className='organizer-party'>{OrganizerParty?.party}</h2>
            <h2>{OrganizerParty.party ? ">" : null}</h2>
            <h2>{OrganizerParty?.path}</h2>
            </div>}
            {title && 
            <div className='title'>
                <h2>{title}</h2>
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
