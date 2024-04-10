import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../Card/Card'
import { GradientText } from '../Gradient-Text-Redirect/GradientText'
import './Categories.scss'
export const Categories = ({title, category, setCategoryType, route}) => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    setCategoryType(category[0].typeDrink)
    navigate(route)
  }

  return (
    <div className='categories-container'>
    <div className='header'>
          <h2>{title}</h2>
          <div className='see-more'>
            <GradientText text={'Ver Todos'} redirect={() => handleOnClick()}/>
          </div>
        </div>
    <div className='container'>
      <div className='products-container'>
        <div className='products'>
            {category?.map(e => {
             if(JSON.parse(e.activeDrink) === true)
             return <div key={e.nameDrink} className='product-card'>
                <Card 
                  add={true}
                  image={e.imageDrink} 
                  name={e.nameDrink} 
                  oldPrice={e.priceDrink}
                  discount={e.discountDrink}
                  status={e.activeDrink}
                  price={e.finalPriceDrink}
                  type={e.typeDrink}
                  id={e.nameDrink}
                  />
              </div>  
           })}
        </div>
      </div>
    </div>
  </div>
  )
}

