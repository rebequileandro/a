import React from 'react'
import './Sidebar.scss'
import WeDrink from '../../assets/wedrink.svg'
import inicio from '../../assets/Sidebar/icon_inicio.svg'
import history from '../../assets/Sidebar/icon_history.svg'
import profile from '../../assets/Sidebar/icon_profile.svg'
const Sidebar = ({active}) => {
  return (
    <div className='sidebar-container'>
      <img src={WeDrink} alt="logo"/>
      <div className='navigation-container'>

      </div>
    </div>
  )
}

export default Sidebar