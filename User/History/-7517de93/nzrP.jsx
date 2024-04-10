import React, { useState } from 'react'
import './Filters.scss'
export const Filters = () => {
  const [sort, setSort] = useState('')
  const handleChange = (e) => {
    setSort(e.target.value)
  }
  return (
    <div className='filters-container'>
      <div className='container'>
        <p>SORT BY:</p>
        <div className="custom-radio">
          <label>a a z</label>
          <input name="question" value="a-z" type="radio" onChange={(e) => handleChange(e)}/>
        </div>
        <div className="custom-radio">
          <input name="question" value="z-a" type="radio" onChange={(e) => handleChange(e)}/>
        </div>
        <div className="custom-radio">
          <input name="question" value="max" type="radio" onChange={(e) => handleChange(e)}/>
        </div>
        <div className="custom-radio">
          <input name="question" value="min" type="radio" onChange={(e) => handleChange(e)}/>
        </div>
        <div className="custom-radio">
          <input name="question" value="1" type="radio" onChange={(e) => handleChange(e)}/>
        </div>
      </div>
    </div>
  )
}
