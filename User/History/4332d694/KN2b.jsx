import React from 'react'
import './CalendarButton.scss'
import calendatIcon from '../../assets/icons/Organizer/icon_calendar.svg'
const CalendarButton = ({onClick, date}) => {
  return (
    <div className="calendar-container" onClick={() => onClick()}>
        <img src={calendatIcon} alt="calendario" />
        {date}
    </div>
  )
}

export default CalendarButton