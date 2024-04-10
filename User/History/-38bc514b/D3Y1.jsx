import React from 'react'
import'./HeaderBarman.scss'
import settings from '../../assets/icons/settings.svg'
export const HeaderBarman = () => {
  return (
    <div className='container-header-barman'>
        <div className=''>
            <h1>WeDrink</h1>
            <img src={settings}/>
        </div>
    </div>
  )
}
