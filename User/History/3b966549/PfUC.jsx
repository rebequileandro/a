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

export const TabbarOrganizer = () => {
    const [icons, setIcons] = useState({
        home: home,
        drinks: drinks,
        statistics: statistics,
        settings: settings
    })
    
    
    const handleClick = (type) => {
    
    }
  return (
    <div className='tabbar-container'>
        <button>
            <img src={icons.home} alt="home"/>
        </button>
        <button>
            <img src={icons.drinks} alt="drinks"/>
        </button>
        <button>
            <img src={icons.statistics} alt="statistics"/>
        </button>
        <button>
            <img src={icons.settings} alt="settings"/>
        </button>
    </div>
  )
}
