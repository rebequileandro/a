import React from 'react'
import { ProductCardsOrganizer } from '../ProductsCardsOrganizer/ProductCardsOrganizer'
import './AddDrink.scss'
export const TypeOfDrink = ({setIsOpen}) => {
  return (
    <div className='overlay-type-of-drink'onClick={() => setIsOpen(false)}>
        <div className='popup'>
            <h2>elige el tipo de producto</h2>
            <p>Selecciona las categorias disponibles</p>
            <div>
                <ProductCardsOrganizer/>
                <ProductCardsOrganizer/>
                <ProductCardsOrganizer/>
            </div>
        </div>
    </div>
  )
}
