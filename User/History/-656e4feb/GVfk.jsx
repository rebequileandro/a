import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card'

export const DetailsCategories = ({categoryType}) => {
  const [details, setDetails] = useState([])
  const getDinks = useSelector(state => state.store.drinks)
  const getBottles = useSelector(state => state.store.bottles)
  const getPromotions = useSelector(state => state.store.promotions)
  useEffect(() => {
    if(categoryType === 'drink') {
      setDetails(getDinks) 
    } 
    if(categoryType === 'bottle') {
      setDetails(getBottles) 
    }
    if(categoryType === 'promotions') {
      setDetails(getPromotions)
    }

  }, [categoryType])
  return (
    <>
      <div className='container-details-categories'>
          <h2>{title}</h2>
          <div className='container-drinks'>
            {details?.map(e => {
              if(JSON.parse(e.activeDrink) === true)
              return <Card 
                        key={e.nameDrink}
                        image={e.imageDrink} 
                        name={e.nameDrink} 
                        oldPrice={e.priceDrink}
                        discount={e.discountDrink}
                        status={e.activeDrink}
                        price={e.finalPriceDrink}
                        type={e.typeDrink}
                        id={e.nameDrink}/>
            })
            }
          </div>
      </div>
    </>
  )
}
