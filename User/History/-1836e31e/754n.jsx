import React, { useEffect, useState } from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import download from '../../../assets/icons/Organizer/download.svg'
import './OrganizerActivities.scss'
import InputDiv from '../../../components/InputDiv/InputDiv'
import { useDispatch, useSelector } from 'react-redux'
import { getAllActivities } from '../../../redux/store/slices/Organizer'
import Item from './Item/Item'
import CalendarPicker from '../../../components/CalendarPicker/CalendarPicker'
import arrow from '../../../assets/icons/icon_arrow-white.svg'
import CalendarButton from '../../../components/CalendarButton/CalendarButton'
export const OrganizerActivities = () => {
  const [isOpen, setIsOpen] = useState(false)
  const date = new Date()
  const [currentDate, setCurrentDate] = useState(date.toLocaleDateString('en-GB'))
  const getUser = useSelector(state => state.user)
  const getActivities = useSelector(state => state.organizer.activities)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllActivities({idOrganizerPayment: getUser.id}))
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
          <div className='filter-row'>
            <div className='select-wrapper'>
              <select>
                <option>inventario</option>
                <option>caja</option>
                <option>3</option>
              </select>
            </div>
            <CalendarButton date={currentDate} onClick={() => setIsOpen(true)}/>
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
