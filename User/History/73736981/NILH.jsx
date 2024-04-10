import React from 'react'
import './Sidebar.scss'
import WeDrink from '../../assets/wedrink.svg'
import inicio from '../../assets/Sidebar/icon_inicio.svg'
import history from '../../assets/Sidebar/icon_history.svg'
import profile from '../../assets/Sidebar/icon_profile.svg'
const Sidebar = ({active}) => {
  return (
    <div className='sidebar-container'>
      <img className='logo' src={WeDrink} alt="logo"/>
      <div className='navigation-container'>
        <button>
          <img src={inicio} alt="inicio"/>
        </button>
        <button>
            <img src={history} alt="historial" />
        </button>
        <button>
          <img src={profile} alt="perfil" />
        </button>
      </div>
    </div>
  )
}

export default Sidebar