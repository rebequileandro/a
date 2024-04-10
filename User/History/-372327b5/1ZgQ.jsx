import React from 'react'
import './HeaderModules.scss'
export const HeaderModules = ({name}) => {
  return (
    <div className='header-modules-container'>
        <div className='text-container'>
            {name?.map(title => (
                <h3>{title}</h3>
            ))}
        </div>
    </div>
  )
}
