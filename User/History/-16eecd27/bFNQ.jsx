import React, { useState } from 'react'
import './Dates.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const Dates = ({state}) => {
  const [startDate, setStartDate] = useState(new Date("2021-05-23"));
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {
     !isOpen ? 
     <div onClick={() => setIsOpen(true)}>
       <span>{startDate.toLocaleDateString()}</span> 
     </div>
      :
      <div onContextMenu={(e) => {
        e.preventDefault()
        setIsOpen(false)
        }}>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      </div>
      }
    </div>
  )
}
