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
    <div className='promotions'>
      <div className='promotions-products-container'>
        <div className='products'>
          {
            categorie?.map(e =>(
              <div className='product-card'>
                <ProductCardsOrganizer edit={true}/>
              </div>  
            ))
          }
        </div>
      </div>
    </div>
  </div>
  )
}

