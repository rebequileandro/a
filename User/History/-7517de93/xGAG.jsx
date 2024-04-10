import React, { useState } from 'react'
import './Filters.scss'
export const Filters = () => {
  const [sort, setSort] = useState('')
  const handleChange = (e) => {
    e.preventDefault()
    setSort(e.target.value)
  }
  console.log(sort)
  return (
    <div className='filters-container'>
      <div className='container'>
        <div className="custom-radio">
          <label>a a z</label>
          <input name="question" value="a-z" type="radio" onClick={(e) => handleChange(e)}/>
        </div>
        <div className="custom-radio">
          <input name="question" value="z-a" type="radio" onClick={(e) => handleChange(e)}/>
        </div>
        <div className="custom-radio">
          <input name="question" value="max" type="radio" onClick={(e) => handleChange(e)}/>
        </div>
        <div className="custom-radio">
          <input name="question" value="min" type="radio" onClick={(e) => handleChange(e)}/>
        </div>
        <div className="custom-radio">
          <input name="question" value="1" type="radio" onClick={(e) => handleChange(e)}/>
        </div>
      </div>
    </div>
  )
}
