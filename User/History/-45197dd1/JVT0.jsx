import React from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../../Organizer/Tabbar/TabbarOrganizer'
import arrowRight from '../../../assets/buttons/arrow-right.svg'
import './UnitManagerSettings.scss'
import { useNavigate, useParams } from 'react-router-dom'
export const UnitManagerSettings = ({ id }) => {
  const OrganizerParty={
    party: 'ajustes'
  }
  
  const navigate = useNavigate()
  return (
    <div className='unit-manager-settings-container'>
      <Header OrganizerParty={OrganizerParty}/> 
      <hr/>
      <div className='row-container'
        onClick={() => navigate(`/menu/${id}`)}>
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
