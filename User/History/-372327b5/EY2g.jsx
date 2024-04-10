import React from 'react'
import './HeaderModules.scss'
export const HeaderModules = ({name}) => {
  return (
    <div className='header-modules-container'>
        <h1>{name}</h1>
    </div>
  )
}
