import React, { useEffect } from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../../Organizer/Tabbar/TabbarOrganizer'
import arrowRight from '../../../assets/buttons/arrow-right.svg'
import './UnitManagerSettings.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getbyId } from '../../../redux/store/slices/Organizer'
export const UnitManagerSettings = ({ id = '62b05a6edbbd83abb6e489be'}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getbyId(id))
  }, [])
  
  const OrganizerParty={
    party: 'ajustes'
  }
  
  const navigate = useNavigate()
  return (
    <div className='unit-manager-settings-container'>
      <Header OrganizerParty={OrganizerParty}/> 
      <hr/>
      <div 
        className='row-container'
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
      <div 
        className='row-container'
        onClick={() => navigate(`/settings/barmans`)}>
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
