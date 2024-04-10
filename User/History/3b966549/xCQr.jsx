import React from 'react'
import './TabbarOrganizer.scss'
import home from '../../../assets/icons/icon_home.svg'
import settings from '../../../assets/icons/icon_settings.svg'
import drinks from '../../../assets/icons/drinks.svg'
import statistics from '../../../assets/icons/icon_statistic.svg'
export const TabbarOrganizer = () => {
  return (
    <div className='tabbar-container'>
        <button>
            <img src={home} alt=""/>
        </button>
        <button>
            <img src={drinks} alt=""/>
        </button>
        <button>
            <img src={statistics} alt=""/>
        </button>
        <button>
            <img src={settings} alt=""/>
        </button>
    </div>
  )
}
