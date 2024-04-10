import React, { useEffect, useState } from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import download from '../../../assets/icons/Organizer/download.svg'
import calendar from '../../../assets/icons/Organizer/icon_calendar.svg'
import './OrganizerActivities.scss'
import InputDiv from '../../../components/InputDiv/InputDiv'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities } from '../../../redux/store/slices/Organizer'
import Item from './Item/Item'
import CalendarPicker from '../../../components/CalendarPicker/CalendarPicker'

export const OrganizerActivities = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [today, setToday] = useState(new Date().getFullYear()+'/'+(new Date().getMonth()+1)+'/'+new Date().getDate())
  const getUser = useSelector(state => state.user)
  const getActivities = useSelector(state => state.organizer.activities)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllActivities({idOrganizerPayment: "62a26c01b2898af683d159d8"}))
  }, [])
  return (
    <>
    {isOpen &&
      <CalendarPicker setIsOpen={setIsOpen}/>
    }
    <div className='organizer-activities-container'>
      <Header OrganizerParty={{party: "mis actividades"}}/>
      <div className='filters-container'>
        <div className='filters'>
          <div>
            <select>
              <option>inventario</option>
              <option>caja</option>
              <option>3</option>
            </select>
            <button className='calendar' onClick={() => setIsOpen(true)}>
              <img src={calendar} alt="fechas"/>
              <span>{today}</span>
            </button>
            <button className='dowload'>
              <img src={download} alt="descargar" />
            </button>
          </div>
            <InputDiv inputProps={{
              type: "search",
              name: "search",
              placeholder: "Buscar"
            }}/>
        </div>
      </div>
      <div className='data-container'>
        {getActivities?.map((e, i) => {
            return <Item key={i} data={e}/>
        })}
      </div>
      <TabbarOrganizer active={'activities'}/>
    </div>
    </>
  )
}
