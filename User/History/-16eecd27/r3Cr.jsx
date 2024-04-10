import React, { useState } from 'react'
import './Dates.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export const Dates = ({edit, state}) => {
  const [startDate, setStartDate] = useState(new Date());
  let dateformat = startDate.toLocaleDateString()
  console.log()
  return (
    <div>
      {
     !edit ? <h3>{dateformat}</h3> 
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
