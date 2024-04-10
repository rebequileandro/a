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
      <div>
        <img src={arrowRight} alt="flecha"/>
      </div>


      <TabbarOrganizer active={'settings'}/>
    </div>
  )
}
