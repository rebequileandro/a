import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../../components/card/Card'

export const Promotions = () => {
  const getCart = useSelector((state) => state.prueba.prueba)

  return (
    <div className='promotions'>
      {
        getCart?.map(e =>(
          <Card 
            key={e.id}
            name={e.name} 
            price={e.price} 
            oldPrice={'1000,00'}
            image={e.image}
            />
            
        ))
      }
    </div>
  )
}
