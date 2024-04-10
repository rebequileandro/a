import React, { useState } from 'react'
import './SelectDrink.scss'
import search from '../../../../../assets/icons/Organizer/search.svg'
import { SelectDrinkCard } from './SelectDrinkCard'
export const SelectDrink = ({selected, setSelected}) => {
    const [input, setinput] = useState('')
    let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className='popup-select-drink'>
        <h1>Añadir {selected}</h1>
        <p>selecciona {selected === 'botella' ? 'las' : 'los'} {selected} disponibles en tu menu</p>
        <div className='search-container'>
          <input className='search' type="search"  value={input} onChange={(e) => setinput(e.target.value)}/>
          <img src={search} alt="buscar" />
        </div>
        <div className='container-select-cards'>
          {arr.map(() => <SelectDrinkCard/>)}
        </div>
        <button className='save'>Aceptar</button>
        <button className='cancel' onClick={() => setSelected(false)}>Cancelar</button>
    </div>
  )
}
