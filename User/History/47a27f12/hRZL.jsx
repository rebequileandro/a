import React, { useState } from 'react'
import { ProductCardsOrganizer } from '../../ProductsCardsOrganizer/ProductCardsOrganizer'
import './TypeOfDrink.scss'
import drink from '../../../../../assets/icons/Organizer/drink.svg'
import bottle from '../../../../../assets/icons/Organizer/bottle.svg'
import pack from '../../../../../assets/icons/Organizer/pack.svg'
export const TypeOfDrink = ({setIsOpen}) => {
  const [selected, setSelected] = useState(false)
  const handleClick = (e, value) => {
    e.prevetDefault()
  }
  return (
    <div className='overlay-type-of-drink'>
        <div className='popup'>
            <div>
                <h2>elige el tipo de producto</h2>
                <p>Selecciona las categorias disponibles</p>
            </div>
            <div className='type-of-products'>
                <div onClick={(e) => handleClick(e, 'drink')}>
                  <ProductCardsOrganizer image={drink} name={'tragos'}/>
                </div>
                <div onClick={(e) => handleClick(e, 'bottle')}>
                  <ProductCardsOrganizer image={bottle} name={'botellas'}/>
                </div>
                <div onClick={(e) => handleClick(e, 'pack')}>
                  <ProductCardsOrganizer image={pack} name={'packs'}/>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)}>Cancelar</button>
        </div>
    </div>
  )
}
