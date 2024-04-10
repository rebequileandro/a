import React from 'react'
import './ToggleSwitch.scss'
export const ToggleSwitch = ({text, size = "default", checked, disabled, onChange, onstyle="btn-success", offstyle="btn-danger" }) => { 
    let displayStyle = checked ? onstyle : offstyle;
  return (
    <>
    <label className='switch-container'>
      <div className={`${size} switch-wrapper`}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={e => onChange(e)}
        />
        <div className={`${displayStyle} switch`}>
          <div className="switch-handle" />
        </div>
      </div>
      <span className="switch-label">{'hola'}</span>
    </label>
  </>
  )
}
