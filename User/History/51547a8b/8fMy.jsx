//cart section
import React from 'react'
import './cart.scss'


export const Cart = () => {
 const arr = [1, 2, 3 ,4 ]

 
  return (
    <div className='cart-container'>
      <div>
        <h1>Carrito</h1>
        <div>
          {
            arr?.map(e => (
              <div id={e} className='cart-product'>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <p className='cart-more-drinks'>te gustaria agregar otra bebida</p>
      </div>
    </div>
  )
}
