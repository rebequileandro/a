
import React, { useEffect, useState } from 'react'
import { Header } from '../../../components/Header/Header'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import download from '../../../assets/icons/Organizer/download.svg'
import calendar from '../../../assets/icons/Organizer/icon_calendar.svg'
import './CashRegister.scss'
import InputDiv from '../../../components/InputDiv/InputDiv'
import { useDispatch, useSelector } from 'react-redux'
import { getCash } from '../../../redux/store/slices/Organizer'
import Item from './Item/Item'
import CalendarPicker from '../../../components/CalendarPicker/CalendarPicker'
import arrow from '../../../assets/icons/icon_arrow-white.svg'
import { useNavigate, useParams } from 'react-router-dom'

const CashRegister = () => {
  const { id } = useParams()
  const date = new Date()
  const getUser = useSelector(state => state.user)
  const getCashRegister = useSelector(state => state.organizer.cash)
  const getDetail = useSelector(state => state.organizer.details[0])
  const [currentDate, setCurrentDate] = useState(date.toLocaleDateString('en-GB'))
  const [isOpen, setIsOpen] = useState(false)
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getCash({idParty: id}))
    .then(() => {
      getCashRegister.forEach(e =>{
        setTotal(total + parseInt(e.total))
      })
    })
  }, [])
  return (
    <>
    {isOpen &&
      <CalendarPicker setCurrentDate={setCurrentDate} setIsOpen={setIsOpen}/>
    }
    <div className='organizer-activities-container'>
      <Header 
        backbutton={() => navigate(`/mis-locales/${id}`)}
        OrganizerParty={{party: "ajustes", path:`${getDetail?.nameParty} > Caja`}}/>
      <div className='filters-container'>
        <div className='filters'>
          <div className='filter-row'>
            <button className='dowload'>
              <img src={download} alt="descargar" />
              Descargar PDF
            </button>
            <button className='calendar' onClick={() => setIsOpen(true)}>
              <img src={calendar} alt="fechas"/>
              <span>{currentDate}</span>
              <img className='arrow-down' src={arrow} alt="mas" />
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
        {getCashRegister?.map((e, i) => {
            return <Item key={i} data={e}/>
        })}
      </div>
      <div className='total'>
        <p>Total</p>
        <p>${total}</p>
      </div>
    </div>
    </>
  )
}

export default CashRegister