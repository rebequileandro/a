import React from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../../Organizer/Tabbar/TabbarOrganizer'
import arrowRight from '../../../assets/buttons/arrow-right.svg'
import './UnitManagerSettings.scss'
export const UnitManagerSettings = () => {
  const OrganizerParty={
    party: 'ajustes'
  }
  return (
    <div className='unit-manager-settings-container'>
      <Header OrganizerParty={OrganizerParty}/> 
      <hr/>
      <div className='row-container'>
        <h2>Menu</h2>
        <img src={arrowRight} alt="flecha"/>
      </div>
      <hr/>

      <TabbarOrganizer active={'settings'}/>
    </div>
  )
}
