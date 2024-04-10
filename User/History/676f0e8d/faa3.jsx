import React, { useRef, useState } from 'react'
import './ToggleSwitch.scss'
export const ToggleSwitch = ({size = "default", disabled}) => { 
  
  const checkboxRef = useRef()
  const [toggle, setToggle] = useState(false)
  const handleToggleSwitch = (e) => {
    setToggle(e.target.checked)
  }
  let displayStyle = toggle ? "btn-success" : "btn-danger";
  return (
      <button className='switch-container' >
        <div className={`${size} switch-wrapper`}  
             onClick={(e)=> {
            e.preventDefault();
            checkboxRef.current.click()}}>
            <input
            type="checkbox"
            checked={toggle}
            disabled={disabled}
            onChange={e => handleToggleSwitch(e)}
            ref={checkboxRef}
            style={{display: 'none'}}
            />
            <div className={`${displayStyle} switch`}>
                <div className="switch-handle" />
            </div>
        </div>
      </button>
  )
}