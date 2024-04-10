import React, { useRef, useState } from 'react'
import './CalendarPicker.scss'
import arrow from '../../assets/icons/icon_arrow-white.svg'
import { Calendar} from "react-multi-date-picker"
import { useDispatch } from 'react-redux';


const CalendarPicker = ({setIsOpen, onClick, setCurrentDate, currentDate}) => {
    const dispatch = useDispatch()
    const date = new Date()
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        setStartDate(dates[0])
        setEndDate(dates[1])
      };
    const calendarRef = useRef();
    const weekDays = ["D", "L", "M", "M", "J", "V", "S"]
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Octubre", "Noviembre", "Diciembre"]
    function update(key, value) {
      let date = calendarRef.current.date;
      
      calendarRef.current.set(key, date[key] + value);
    }
    const handleClick = () => {
      if(startDate.day && startDate.month.number && startDate.year){
        setCurrentDate(startDate.day+'/'+(startDate.month?.number)+'/'+startDate.year)
          onClick(`${startDate.year}-${("0" + startDate.month?.number).toString().slice(-2)}-${("0" + startDate.day).toString().slice(-2)}`,
          endDate ? `${endDate.year}-${("0" + endDate.month?.number).toString().slice(-2)}-${("0" + endDate.day).toString().slice(-2)}` :
          `${startDate.year}-${("0" + startDate.month?.number).toString().slice(-2)}-${("0" + (startDate.day + 1)).toString().slice(-2)}`
        )
      }
      else{
        setCurrentDate(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
      }
      setIsOpen(false)
    }
    console.log(endDate)
  return (
    <div className='calendar-overlay'>
      <div className='calendar-container'>
        <h1>selecciona fechas</h1>
        <div className='calendar-wrapper'>
        <button className='next left' onClick={() => update("month", -1)}>
          <img src={arrow} alt="siguiente"/>
        </button>
          <Calendar
              weekDays={weekDays}
              months={months}
              value={startDate}
              onChange={onChange}
              ref={calendarRef}
              buttons={false} 
              format="MM/DD/YY"
              range
          />
          <button className='next' onClick={() => update("month", 1)}>
            <img src={arrow} alt="siguiente"/>
          </button>
        </div>
        <button className='accept' onClick={() => handleClick()}>Aceptar</button>
      </div>
  </div>
  )
}

export default CalendarPicker