import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchDataRange } from '../redux/Actions';
import './CalendarPicker.scss'

export const CalendarPicker = ({setIsOpen}) => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if(start && end) {
      dispatch(searchDataRange({startDate: start, endDate: end}))
    }
  };
  //console.log(startDate.toJSON())

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
