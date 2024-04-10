//cart section
import './Cart.scss'
import React, { useEffect, useState } from 'react'
import { CartProduct } from './CartProducts'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/store/slices/storeProducts'
import { BackButton } from '../../components/BackButton/BackButton'
import { GradientText } from '../../components/Gradient-Text-Redirect/GradientText'
import { GradientGreenBar } from '../../components/Gradient-Green-Bar/GradientGreenBar'
import { Categories } from '../../components/Categories/Categories'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header'

export const Cart = ({setCategoryType}) => {

    const getPromotions = useSelector(state => state.store.promotions)
    
    //estas variables luego se tomaran de un estado        
    const party = 'Kika'
    const navigate = useNavigate()
    
    const getCart = useSelector((state) => state.store.cart)
 
  
  return (
    <div className='cart-container'>
            <Header/>
            <div className='cart-container-products'>
                {getCart?.map(e => (
                    <CartProduct
                        key={e.nameDrink}
                        id={e.nameDrink}
                        name={e.nameDrink}
                        price={e.finalPriceDrink * e.amount}
                        amount={e.amount}
                        image={e.imageDrink}
                        type={e.typeDrink}
                        />
                        ))}
            </div>
        <div className='cart-more-drinks'>
            <GradientText text={'¿Te gustaria agregar otra bebida?'} redirect={() => navigate('/marketplace')}/>
        </div>
        <div className='cart-promotions'>
            {getPromotions.length ? <Categories title={'Promociones'} category={getPromotions} setCategoryType={setCategoryType}/> : null}
        </div>
        <GradientGreenBar 
            action={'pay'} 
        />
    </div>
  )
}
