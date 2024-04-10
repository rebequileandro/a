import React from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../../Organizer/Tabbar/TabbarOrganizer'
import './UnitManagerSettings.scss'
export const UnitManagerSettings = () => {
  return (
    <div className='unit-manager-settings-container'>
      <Header/>



      <TabbarOrganizer active={'settings'}/>
    </div>
  )
}
