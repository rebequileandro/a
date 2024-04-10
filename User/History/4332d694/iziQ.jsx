import React from 'react'
import './CalendarButton.scss'
import calendatIcon from '../../assets/icons/Organizer/icon_calendar.svg'
const CalendarButton = ({onClick, date, style}) => {
  return (
    <div className="calendar-container" onClick={() => onClick()} style={style}>
        <img src={calendatIcon} alt="calendario" />
        <span>{date}</span>
    </div>
  )
}

export default CalendarButton