//cart section
import './Cart.scss'
import React, { useEffect, useState } from 'react'
import { CartProduct } from './CartProducts'
import { Promotions } from '../../components/Promotions/Promotions'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/store/slices/storeProducts'
import { BackButton } from '../../components/BackButton/BackButton'
import { GradientText } from '../../components/Gradient-Text-Redirect/GradientText'
import testImage from '../../assets/buttons/test-image.svg'
import { GradientGreenBar } from '../../components/Gradient-Green-Bar/GradientGreenBar'
import { Categories } from '../../components/Categories/Categories'

export const Cart = () => {

    //despues se elimina
    const arr = [
        {
          idParty: '629a77f4f9e1a51b23698943',
          imageDrink: '/static/media/campari.2956d948d43a8f196a58aceaa5e70344.svg',
          typeDrink: 'drink',
          nameDrink: 'campari',
          priceDrink: '1600',
          discountDrink: '10',
          finalPriceDrink: '1440',
          activeDrink: 'false',
          statusDrink: 'true'
        },
        {
          idParty: '629a77f4f9e1a51b23698943',
          imageDrink: '/static/media/fernet.e55b2c257e7588c0313db7281c5db45d.svg',
          typeDrink: 'drink',
          nameDrink: 'fernet',
          priceDrink: '120',
          discountDrink: '10',
          finalPriceDrink: '108',
          activeDrink: 'false',
          statusDrink: 'true'
        },
        {
          idParty: '629a77f4f9e1a51b23698943',
          imageDrink: '/static/media/aperol.4e7a3c6afd1b48fd9dbdf718717aa6d8.svg',
          typeDrink: 'drink',
          nameDrink: 'aperol',
          priceDrink: '120',
          discountDrink: '10',
          finalPriceDrink: '108',
          activeDrink: 'true',
          statusDrink: 'true'
        },
        {
          idParty: '629a77f4f9e1a51b23698943',
          imageDrink: '/static/media/cuba libre.89aa6dd61ad3c8ec19fbe5ee3ae29abf.svg',
          typeDrink: 'drink',
          nameDrink: 'cuba libre',
          priceDrink: '120',
          discountDrink: '10',
          finalPriceDrink: '110',
          activeDrink: 'true',
          statusDrink: 'true'
        },
        {
          idParty: '629a77f4f9e1a51b23698943',
          imageDrink: '/static/media/mojito.cfff1a6f66ce3c221c135e6a4d83cc01.svg',
          typeDrink: 'drink',
          nameDrink: 'mojito',
          priceDrink: '120',
          discountDrink: '10',
          finalPriceDrink: '108',
          activeDrink: 'true',
          statusDrink: 'true'
        },
        {
          idParty: '629a77f4f9e1a51b23698943',
          imageDrink: '/static/media/wiskola.212cd69e19545c55f7f000f245b0ddc4.svg',
          typeDrink: 'drink',
          nameDrink: 'wiskola',
          priceDrink: '120',
          discountDrink: '10',
          finalPriceDrink: '110',
          activeDrink: 'true',
          statusDrink: 'true'
        }
      ]
    //estas variables luego se tomaran de un estado        
    const party = 'Kika'
    
    
    const getCart = useSelector((state) => state.store.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts(arr))
    }, [dispatch])
    

  return (
    <div className='cart-container'>
            <div className='cart-header'>
                <BackButton route={'back'}/>
                <h1>Carrito</h1>
                <h2 className='party'>{party}</h2>
            </div>
            <div className='cart-container-products'>
                {getCart?.map(e => (
                    <CartProduct
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        price={e.price * e.amount}
                        amount={e.amount}
                        image={e.image}
                        />
                        ))}
            </div>
        <div className='cart-more-drinks'>
            <GradientText text={'¿Te gustaria agregar otra bebida?'}/>
        </div>
        <div className='cart-promotions'>
            <Categories title={'Promociones'} category id setCategoryType route/>
        </div>
    <GradientGreenBar 
        action={'pay'} 
    />
    </div>
  )
}
