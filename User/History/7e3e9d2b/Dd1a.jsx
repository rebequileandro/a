import React from 'react'
import { Header } from '../../../../components/Header/Header'
import { TabbarOrganizer } from '../../Tabbar/TabbarOrganizer'
import row from '../../../../assets/buttons/arrow-right.svg'
import '../OrganizerSettings.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Premises = () => {
    const allParty = useSelector(state => state.organizer.myParty)
    const navigate = useNavigate()
  return (
    <div className='organizer-settings-container'>
    <Header 
        backbutton={() => navigate(-1)}
        notification={true}
        OrganizerParty={{party: 'ajustes', path: 'mis locales'}}
        />
    <hr/>
    <div className='row-container'>
        <h2>mis locales</h2>
        <img src={row} alt="flecha" />
    </div>
    <hr/>
    <TabbarOrganizer active={'settings'}/>
</div>
  )
}

export default Premises
