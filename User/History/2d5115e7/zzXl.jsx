import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GradientText } from '../../../../components/Gradient-Text-Redirect/GradientText'
import { ProductCardsOrganizer } from '../ProductsCardsOrganizer/ProductCardsOrganizer'
import './Categories.scss'
export const Categories = ({title, category, id, setCategoryType}) => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    setCategoryType(category[0].typeDrink)
    navigate(`/menu/${id}/details`)
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
                <ProductCardsOrganizer 
                  edit={true} 
                  image={e.imageDrink} 
                  name={e.nameDrink} 
                  oldPrice={e.priceDrink === e.finalPriceDrink ? false : e.priceDrink}
                  discount={e.discountDrink}
                  status={e.activeDrink}
                  price={e.finalPriceDrink}
                  type={e.typeDrink}
                  id={id}
                  />
              </div>  
           })}
        </div>
      </div>
    </div>
  </div>
  )
}

