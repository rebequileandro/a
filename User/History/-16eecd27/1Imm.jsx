import React, { useState } from 'react'
import './Dates.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const Dates = ({state}) => {
  const [startDate, setStartDate] = useState(new Date("2021-05-23"));
  const [isOpen, setIsOpen] = useState(false);

  let formatDate = startDate.toLocaleDateString()
  return (
    <div>
      {
     !isOpen ? <h3>{formatDate}</h3> 
      :
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      }
    </div>
  )
}
