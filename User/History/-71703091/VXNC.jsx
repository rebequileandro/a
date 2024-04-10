import React from 'react'
import './CartGradientGreen.scss'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from '../../../assets/icons/icon_cart.svg';

const CartGradientGreen = ({isAmount}) => {
  const navigate = useNavigate();
  const getCart = useSelector((state) => state.store.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //get the sum of the entire cart
    const getTotal = () => {
      let sumTotal = 0;
      getCart?.map((e) => (sumTotal += e.amount));
      setTotal(sumTotal);
    };
    return getTotal();
  }, [getCart]);

  const handleClick = () =>{
    navigate("/carrito")
  }

  return (
    <div onClick={() => handleClick()} className='cart-icon-container'>
       <div className='amount-container'>
          {isAmount && getCart.length !== 0 ? (
            <div className="total-amount">{total}</div>
          ) : null}
        </div>
        <img src={CartIcon} alt="" className='cart'/>
    </div>
  )
}

export default CartGradientGreen