import React from 'react'
import'./HeaderBarman.scss'
import settings from '../../assets/icons/settings.svg'
export const HeaderBarman = ({name}) => {
  return (
    <div className='container-header-barman'>
        <div className='header'>
            <h1>WeDrink</h1>
            <img src={settings}/>
        </div>
        <p>Bienvenido{ name}</p>
    </div>
  )
}
