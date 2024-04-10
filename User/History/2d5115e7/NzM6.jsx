import React from 'react'
import { GradientText } from '../../../../components/Gradient-Text-Redirect/GradientText'
import { ProductCardsOrganizer } from '../ProductsCardsOrganizer/ProductCardsOrganizer'
import './Categories.scss'
export const Categories = ({title, categorie}) => {
  return (
    <div className='categories-container'>
    <div className='header'>
          <h2>{title}</h2>
          <div className='see-more'>
            <GradientText text={'Ver Todos'}/>
          </div>
        </div>
    <div className='container'>
      <div className='products-container'>
        <div className='products'>
            {categorie?.map(e => {
              if(JSON.parse(e.activeDrink) === true)
             return <div key={e.nameDrink} className='product-card'>
                <ProductCardsOrganizer 
                  edit={true} 
                  image={e.imageDrink} 
                  name={e.nameDrink} 
                  oldPrice={e.priceDrink}
                  discount={e.discountDrink}
                  status={e.activeDrink}
                  price={e.finalPriceDrink}
                  type={e.typeDrink}
                  />
              </div>  
           })}
        </div>
      </div>
    </div>
  </div>
  )
}

