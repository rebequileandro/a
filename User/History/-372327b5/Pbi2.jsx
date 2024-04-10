import React from 'react'
import './HeaderModules.scss'
export const HeaderModules = ({name, image}) => {
  return (
    <div className='header-modules-container'>
        <div className='text-container'>
            {name?.map(title => (
                <div className='item'>
                    <h3>{title}</h3>
                    {image && <img src={image} alt='arrow'/>}
                </div>
            ))}
        </div>
    </div>
  )
}
