import React from 'react'
import './SelectDrink.scss'
export const SelectDrink = ({selected}) => {
  return (
    <div className='popup-select-drink'>
        <h1>Añadir {selected}</h1>
        <p>selecciona {selected === 'botella' ? 'las' : 'los'} {selected} disponibles en tu menu</p>
        <input type="search" />
    </div>
  )
}
