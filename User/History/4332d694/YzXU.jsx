import React from 'react'
import './CalendarButton.scss'
import calendatIcon from '../../assets/icons/Organizer/icon_calendar.svg'
const CalendarButton = ({onClick, date}) => {
  return (
    <button className="calendar-container" onClick={() => onClick()}>
        <img src={calendar} alt="calendario" />
        {date}
    </button>
  )
}

export default CalendarButton