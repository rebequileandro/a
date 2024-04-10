import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card'
import { GradientText } from '../gradient-text-redirect/GradientText'
import './promotions.scss'

export const Promotions = () => {
  const getProducts = useSelector((state) => state.store.products)

  return (
    <div className='promotion-container'>
      <div className='promotions-header'>
            <h2>Promociones</h2>
            <div className='more'>
              <GradientText text={'Ver Todos'}/>
            </div>
          </div>
      <div className='promotions'>
        <div className='promotions-products-container'>
          <div className='products'>
            {
              getProducts?.map(e =>(
                <Card 
                  key={e.id}
                  id={e.id}
                  name={e.name} 
                  price={e.price} 
                  oldPrice={'1000,00'}
                  image={e.image}
                  />
                  
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
