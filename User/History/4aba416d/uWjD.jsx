import React from 'react'
import './CheckBox.scss'
export const CheckBox = ({id}) => {
  const checked = (e) => {
    
    console.log(e.target.checked)
  }
  return (
    <div className='container-checkbox'>
        <input className='checkbox' type="checkbox" onChange={(e) => checked(e)}/>
    </div>
  )
}
