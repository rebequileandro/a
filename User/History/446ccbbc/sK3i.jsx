import React, { useState } from 'react'
import './SelectDrink.scss'
import search from '../../../../../assets/icons/Organizer/search.svg'
export const SelectDrink = ({selected}) => {
    const [input, setinput] = useState('')
  return (
    <div className='popup-select-drink'>
        <h1>Añadir {selected}</h1>
        <p>selecciona {selected === 'botella' ? 'las' : 'los'} {selected} disponibles en tu menu</p>
        <input className='search' type="search"  value={input} onChange={(e) => setinput(e.target.value)}>
            <img src={search} alt="buscar" />        
        </input>
    </div>
  )
}
