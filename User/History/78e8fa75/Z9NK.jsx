import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../../components/card/Card'

export const Promotions = () => {
  const getProducts = useSelector((state) => state.store.producs)
  console.log(getProducts)
  return (
    <div className='promotions'>
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
  )
}
