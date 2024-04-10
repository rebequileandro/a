import React from 'react'
import './Sidebar.scss'
import WeDrink from '../../assets/wedrink.svg'
import inicio from '../../assets/Sidebar/icon_inicio.svg'
import history from '../../assets/Sidebar/icon_history.svg'
import profile from '../../assets/Sidebar/icon_profile.svg'
import selectedInicio from '../../assets/Sidebar/selected/selected_inicio.svg'
import selectedHistory from '../../assets/Sidebar/selected/selected_history.svg'
import selectedProfile from '../../assets/Sidebar/selected/selected_profile.svg'
const Sidebar = ({active}) => {
  return (
    <div className='sidebar-container'>
      <img className='logo' src={WeDrink} alt="logo"/>
      <div className='navigation-container'>
        <button>
          <img src={active === 'inicio' ? selectedInicio : inicio} alt="inicio"/>
        </button>
        <button>
            <img src={active === 'shistory' ? selectedHistory : history} alt="historial" />
        </button>
        <button>
          <img src={active === 'profile' ? selectedProfile : profile} alt="perfil" />
        </button>
      </div>
    </div>
  )
}

export default Sidebar