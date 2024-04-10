//cart section
import React from 'react'
import './cart.scss'


export const CartProduct = () => {
 const arr = [1, 2, 3 ,4 ]

 
  return (
    <div>
      <div>
        <div>
          {
            arr?.map(e => (
              <div id={e} className='cart-product'>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
