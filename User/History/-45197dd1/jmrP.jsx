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
        <h2>menu</h2>
        <img src={arrowRight} alt="flecha"/>
      </div>
      <hr/>
      <div className='row-container'/>
      <div className='row-container'>
        <h2>staff:</h2>
      </div>
      <hr/>
      <div className='row-container'>
        <p>barmans</p>
        <img src={arrowRight} alt="flecha"/>
      </div>
      <hr/>
      <div className='row-container'>
        <p>cajeros</p>
        <img src={arrowRight} alt="flecha"/>
      </div>
      <hr/>
      <div className='row-container'/>
      <hr/>
      <div className='row-container'>
        <h2>caja</h2>
        <img src={arrowRight} alt="flecha"/>
      </div>
      <hr/>
      <div className='row-container'>
        <h2>mis actividades</h2>
        <img src={arrowRight} alt="flecha"/>
      </div>
      <hr/>

      <TabbarOrganizer active={'settings'}/>
    </div>
  )
}
