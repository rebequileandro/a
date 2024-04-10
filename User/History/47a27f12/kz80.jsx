import React from 'react'
import { ProductCardsOrganizer } from '../ProductsCardsOrganizer/ProductCardsOrganizer'
import './AddDrink.scss'
export const TypeOfDrink = ({setIsOpen}) => {
  return (
    <div className='overlay-type-of-drink'onClick={() => setIsOpen(false)}>
        <div className='popup'>
            <div>
                <h2>elige el tipo de producto</h2>
                <p>Selecciona las categorias disponibles</p>
            </div>
            <div className='type-of-products'>
                <ProductCardsOrganizer/>
                <ProductCardsOrganizer/>
                <ProductCardsOrganizer/>
            </div>
            <button>Cancelar</button>
        </div>
    </div>
  )
}
