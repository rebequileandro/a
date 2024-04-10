import React, { useState } from 'react'
import './TabbarOrganizer.scss'
import home from '../../../assets/icons/icon_home.svg'
import settings from '../../../assets/icons/icon_settings.svg'
import drinks from '../../../assets/icons/drinks.svg'
import statistics from '../../../assets/icons/icon_statistic.svg'
import selectedHome from '../../../assets/icons/Selected-Icons/selected_home.svg'
import selectedSettings from '../../../assets/icons/Selected-Icons/selected_settings.svg'
import selectedDrinks from '../../../assets/icons/Selected-Icons/selected_drink.svg'
import selectedStatistics from '../../../assets/icons/Selected-Icons/selected_statistics.svg'
import { useNavigate } from 'react-router-dom'

export const TabbarOrganizer = ({ active }) => {
    const navigate = useNavigate()

  return (
    <div className='tabbar-container'>
        <button onClick={() =>  navigate('/')}>
            <img src={active === 'home'? selectedHome : home} alt="home"/>
        </button>
        <button onClick={() =>  navigate('/myParty')}>
            <img src={active === 'drinks' ? selectedDrinks : drinks} alt="drinks"/>
        </button>
        <button>
            <img src={active === 'statistics' ? selectedStatistics : statistics} alt="statistics"/>
        </button>
        <button>
            <img src={active === 'settings' ? selectedSettings : settings} alt="settings"/>
        </button>
    </div>
  )
}
