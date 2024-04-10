//product card
import React, { useEffect, useState } from 'react';
import './Card.scss';
import { addToCart } from '../../redux/store/slices/storeProducts';
import { useDispatch, useSelector } from 'react-redux';
import Edit from '../../assets/buttons/edit.svg'
import less from '../../assets/buttons/card_less.svg'
import plus from '../../assets/buttons/card_plus.svg'
import trash from '../../assets/buttons/card_trash.svg'
export const Card = ({image, name, price, oldPrice, id, edit, add, setIsEdit, amount}) => {
    const dispatch = useDispatch()
    const [exists, setExists] = useState([])
    const getCart = useSelector(state => state.store.cart)
    useEffect(() => {
      let cartFilter = getCart.filter(e => e.nameDrink === name)
      setExists(cartFilter)
    }, [getCart])
    
  return (
    <div className='product-card-container'>
      <div className='tranparent-gradient'>
        {edit && 
        <button onClick={()=> setIsEdit(true)}  className='edit' >
            <img src={Edit} alt='edit'/>
        </button>}
            <img className='image' src={image} alt="drink"/>
      </div>
      <div className='pink-gradient'>
          <h1>{name}</h1>
          {price && 
          <div className='prices'>
              {oldPrice && 
              <h2 className='old-price'>${oldPrice}</h2>}
              <h2>${price}</h2>
          </div>}
        {add &&
          exists.length ?
          <div className='addTocart'>
            <button onClick={() => dispatch(removeFromCart(id))}>
              {amount === 1 ? 
              <img src={trash} alt="eliminar"/>
              :
              <img src={less} alt="menos" />}
            </button>
            <h1>{amount}</h1>
            <button  onClick={()=> dispatch(addToCart({ id }))}>
              <img src={plus} alt="mas" />
            </button>
          </div> 
          :
          <button 
            className='addTocart' 
            onClick={()=> dispatch(addToCart({ id }))}>
            añadir al carrito
          </button>}
      </div>
    </div>
  )
}
