import React from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import row from '../../../assets/buttons/arrow-right.svg'
import './OrganizerSettings.scss'
export const OrganizerSettings = () => {
  return (
    <div className='organizer-settings-container'>
        <Header OrganizerParty={{party: 'ajustes'}}/>
        <hr/>
        <div className='row-container'>
            <h2>mis locales</h2>
            <img src={row} alt="flecha" />
        </div>
        <hr/>
        <div className='row-container'>
            <h2>mi cuenta</h2>
            <img src={row} alt="flecha" />

        </div>
        <hr/>
        <TabbarOrganizer active={'settings'}/>
    </div>
  )
}
