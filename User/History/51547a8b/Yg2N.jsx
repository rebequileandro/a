//cart section
import React from 'react'
import './cart.scss'


export const CartProduct = () => {
 const arr = [1, 2, 3 ,4 ]

 
  return (
    <div>
      <div>
        <button>{'<'}</button>
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
        <span className='cart-more-drinks'>te gustaria agregar otra bebida</span>
      </div>
    </div>
  )
}
