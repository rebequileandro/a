//cart section
import './cart.scss'
import React, { useEffect } from 'react'
import { CartProduct } from './CartProducts'
import { Promotions } from './Promotions'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducto } from '../../redux/store/slices/prueba'
import { BackButton } from '../../components/backButton/BackButton'
import { GradientText } from '../../components/gradient-text-redirect/GradientText'
import testImage from '../../assets/Buttons/test-image.svg'

export const Cart = () => {

    //despues se elimina
    const arr = [{id: 1, 
                 name: 'campari', 
                 price: '1000' ,
                 amount: 1,
                 image: testImage
                },
                {id: 2, 
                name: 'campari', 
                price: '1500' ,
                amount: 2,
                image: testImage
                },
                {id: 3, 
                name: 'campari', 
                price: '000' ,
                amount: 1,
                image: testImage
                },
                {id: 4, 
                name: 'campari', 
                price: '700' ,
                amount: 1,
                image: testImage
                },
                {id: 5, 
                name: 'campari', 
                price: '000' ,
                amount: 1,
                image: testImage
                }
             ]
    //estas variables luego se tomaran de un estado        
    const party = 'Kika'
    
    
    const getCart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducto(arr))
    }, [dispatch])
    

  return (
    <div className='cart-container'>
        <div>
            <BackButton route={'back'}/>
            <h1>Carrito</h1>
            <h2 className='party'>{party}</h2>
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
        </div>
        <div className='cart-more-drinks'>
            <GradientText text={'Te gustaria agregar otra bebida'}/>
        </div>
        <div className='cart-promotions'>
            <div className='promotions-section'>
                <h2>Promociones</h2>
                <GradientText text={'Ver todos'}/>
            </div>
            <Promotions/>
        </div>
    </div>
  )
}
