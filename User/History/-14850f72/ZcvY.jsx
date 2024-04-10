import React from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import './OrganizerSettings.scss'
export const OrganizerSettings = () => {
  return (
    <div>
        <Header OrganizerParty={{party: 'ajustes'}}/>
        <TabbarOrganizer active={'settings'}/>
    </div>
  )
}
