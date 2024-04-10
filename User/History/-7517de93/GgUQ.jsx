import React, { useState } from 'react'
import './Filters.scss'
export const Filters = () => {
  const [sort, setSort] = useState('')
  const handleChange = (e) => {
    e.preventDefault()
    setSort(e.target.value)
  }
  return (
    <div className='filters-container'>
      <div className='container'>
        <div class="custom-radio">
          <label>a a z</label>
          <input name="question" value="a-z" type="radio"/>
        </div>
        <div class="custom-radio">
          <input name="question" value="z-a" type="radio"/>
        </div>
        <div class="custom-radio">
          <input name="question" value="max" type="radio"/>
        </div>
        <div class="custom-radio">
          <input name="question" value="min" type="radio"/>
        </div>
        <div class="custom-radio">
          <input name="question" value="1" type="radio"/>
        </div>
      </div>
    </div>
  )
}
