import React from 'react'

export const ProductCardsOrganizer = ({image, name, price, oldPrice, id}) => {
  return (
    <div className='card'>
      <div className='tranparent-gradient'>
          <img src={image} alt="drink"/>
      </div>
      <div className='pink-gradient'>
          <h1>{name}</h1>
          <div className='prices'>
              {
              oldPrice && <h2 className='old-price'>${oldPrice}</h2>
              }
              <h2>${price}</h2>
          </div>
          <button 
              className='addTocart' 
              onClick={()=> dispatch(addToCart({ id }))}>
              añadir al carrito
          </button>
      </div>
  </div>
  )
}
