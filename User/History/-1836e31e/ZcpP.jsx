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
import arrow from '../../../assets/icons/icon_arrow-white.svg'
export const OrganizerActivities = () => {
  const [isOpen, setIsOpen] = useState(false)
  const date = new Date()
  const [currentDate, setCurrentDate] = useState(date.toLocaleDateString('en-GB'))
  const getUser = useSelector(state => state.user)
  const getActivities = useSelector(state => state.organizer.activities)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllActivities({idOrganizerPayment: "62a26c01b2898af683d159d8"}))
  }, [])
  return (
    <>
    {isOpen &&
      <CalendarPicker setCurrentDate={setCurrentDate} setIsOpen={setIsOpen}/>
    }
    <div className='organizer-activities-container'>
      <Header OrganizerParty={{party: "mis actividades"}}/>
      <div className='filters-container'>
        <div className='filters'>
          <div>
            <div className='header-select'>
              <select>
                <option>inventario</option>
                <option>caja</option>
                <option>3</option>
              </select>
              <img className='arrow-down select-arrow' src={arrow} alt="mas" />
            </div>
            <button className='calendar' onClick={() => setIsOpen(true)}>
              <img src={calendar} alt="fechas"/>
              <span>{currentDate}</span>
              <img className='arrow-down' src={arrow} alt="mas" />
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
