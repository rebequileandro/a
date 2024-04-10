import React from 'react'
import './HeaderModules.scss'
export const HeaderModules = ({name}) => {
  return (
    <div className='header-modules-container'>
        <div>
            {name?.map(title => (
                <h3>{title}</h3>
            ))}
        </div>
    </div>
  )
}
