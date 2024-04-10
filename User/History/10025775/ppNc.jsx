import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import './CalendarPicker.scss'

export const CalendarPicker = ({setIsOpen}) => {
  const gettable = useSelector(state => state.table)
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  console.log(startDate.toJSON())
  console.log(gettable[0].date)
  return (
    <div className='container-calendar-picker'>
      <button className='isClosed'onClick={()=> setIsOpen(false)}>x</button>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        className='picker'
        selectsRange
        inline
      />
    </div>
  );
}
