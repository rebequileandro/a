import React from 'react'
import './HeaderModules.scss'
export const HeaderModules = ({name}) => {
  return (
    <div className='header-modules-container'>
        {name?.map(title => (
            <h2>{title}</h2>
        ))}
    </div>
  )
}
