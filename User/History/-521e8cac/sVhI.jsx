import React, { useRef } from 'react'
import './ToggleSwitch.scss'
export const ToggleSwitch = ({text, size = "default", checked, disabled, onChange, onstyle="btn-success", offstyle="btn-danger" }) => { 
    let displayStyle = checked ? onstyle : offstyle;
    const checkboxRef = useRef()
  return (
      <div className='switch-container' >
        <div className={`${size} switch-wrapper`}  
             onClick={(e)=> {
            e.preventDefault();
            checkboxRef.current.click()}}>
            <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={e => onChange(e)}
            ref={checkboxRef}
            style={{ position: 'absolute', top: '10%'}}
            />
            <div className={`${displayStyle} switch`}>
            <div className="switch-handle" />
            </div>
        </div>
      </div>
  )
}
