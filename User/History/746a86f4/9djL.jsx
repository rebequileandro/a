import React from 'react'
import './Header.scss'
export const Header = ({organizer, notification, backbutton, party}) => {
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
      {organizer &&
        <div className="organizer">
          <p>Bienvenido, {currentUser?.name ? currentUser.name : organizer}</p>
        </div>}
      {party && 
        <div className="party">
          <p>{party}</p>
          <div className="change">
            <GradientText text={'cambiar'} redirect={() => navigate(-1)}/>
          </div>
        </div>}
    </div>
  </div>
  )
}
