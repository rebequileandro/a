import React, { useEffect } from 'react'
import { Header } from '../../../components/global/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import row from '../../../assets/buttons/arrow-right.svg'
import './OrganizerSettings.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const OrganizerSettings = () => {
    const navigate = useNavigate()
    const currentUser = useSelector((state) => state.user);
    
  return (
    <div className='organizer-settings-container'>
        <Header OrganizerParty={{party: 'ajustes'}}/>
        <hr/>
        {currentUser.rol === "unitManager" ?
        <div 
          className='row-container'
          onClick={() => navigate('/mi-unidad')}>
          <h2>mi unidad</h2>
          <img src={row} alt="flecha" />
        </div>
        :
        <div 
            className='row-container'
            onClick={() => navigate('/settings/clubs')}>
            <h2>mis locales</h2>
            <img src={row} alt="flecha" />
        </div>}
        <hr/>
        <div 
        className='row-container'
        onClick={() => navigate("/settings/account")}
        >
            <h2>ajustes de cuenta</h2>
            <img src={row} alt="flecha" />
        </div>
        <hr/>
       
        <TabbarOrganizer active={'settings'}/>
    </div>
  )
}
export default OrganizerSettings;