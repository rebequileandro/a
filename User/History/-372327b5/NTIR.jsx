import React from 'react'
import './HeaderModules.scss'
export const HeaderModules = ({head}) => {
  return (
    <div className='header-modules-container'>
        <div className='text-container'>
            {head?.name?.map(title => (
                <div className='item'>
                    <h3>{title}</h3>
                    {head?.image && <img src={head?.image} alt='arrow'/>}
                </div>
            ))}
        </div>
    </div>
  )
}
