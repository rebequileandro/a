import React from 'react'
import { GradientText } from '../../../../components/Gradient-Text-Redirect/GradientText'
import { ProductCardsOrganizer } from '../ProductsCardsOrganizer/ProductCardsOrganizer'

export const Categories = ({title, categorie}) => {
  return (
    <div className='promotion-container'>
    <div className='promotions-header'>
          <h2>{title}</h2>
          <div className='more'>
            <GradientText text={'Ver Todos'}/>
          </div>
        </div>
    <div className='promotions'>
      <div className='promotions-products-container'>
        <div className='products'>
          {
            categorie?.map(e =>(
              <div className='product-card'>
                <ProductCardsOrganizer/>
              </div>  
            ))
          }
        </div>
      </div>
    </div>
  </div>
  )
}
