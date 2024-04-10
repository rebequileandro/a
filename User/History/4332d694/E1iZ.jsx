import React from 'react'
import './CalendarButton.scss'
import calendatIcon from '../../assets/icons/Organizer/icon_calendar.svg'
const CalendarButton = ({onClick, date}) => {
  return (
    <div className="calendar-container" onClick={() => onClick()} style={{width: "100%"}}>
        <img src={calendatIcon} alt="calendario" />
        <span>{date}</span>
    </div>
  )
}

export default CalendarButton