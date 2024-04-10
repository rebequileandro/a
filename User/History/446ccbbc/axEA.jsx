import React, { useState } from 'react'
import './SelectDrink.scss'
import search from '../../../../../assets/icons/Organizer/search.svg'
import InputDiv from '../../../../../components/InputDiv/InputDiv'
export const SelectDrink = ({selected}) => {
    const [input, setinput] = useState('')
  return (
    <div className='popup-select-drink'>
        <h1>Añadir {selected}</h1>
        <p>selecciona {selected === 'botella' ? 'las' : 'los'} {selected} disponibles en tu menu</p>
        <div className='search-container'>
          <InputDiv/>
          <img src={search} alt="buscar" />
        </div>
    </div>
  )
}
