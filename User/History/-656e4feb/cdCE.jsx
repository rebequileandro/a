import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../Card/Card'
import { Header } from '../Header/Header'
import './SectionDetails.scss'

export const SectionDetails = ({categoryType}) => {
  const [details, setDetails] = useState([])
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const getDinks = useSelector(state => state.store.drinks)
  const getBottles = useSelector(state => state.store.bottles)
  const getPromotions = useSelector(state => state.store.promotions)
  useEffect(() => {
    if(categoryType === 'drink') {
      setDetails(getDinks)
      setTitle('tragos') 
    } 
    if(categoryType === 'bottle') {
      setDetails(getBottles) 
      setTitle('botellas')
    } 
    if(categoryType === 'promotions') {
      setDetails(getPromotions)
      setTitle('promociones')
    }
  }, [categoryType])
  return (
    <>
      <div className='container-details-categories'>
        <Header
          party={'bresh'}
          notification={true}
          backbutton={() => navigate(-1)}/>
          <div className='section'>
            <h2>{title}</h2>
          </div>
          <div className='container-drinks'>
            {details?.map(e => {
              if(JSON.parse(e.activeDrink) === true)
              return <Card
                key={e.nameDrink} 
                add={true}
                image={e.imageDrink} 
                name={e.nameDrink} 
                oldPrice={e.priceDrink.toString() === e.finalPriceDrink.toString() ? false : e.priceDrink}
                discount={e.discountDrink}
                status={e.activeDrink}
                price={e.finalPriceDrink}
                type={e.typeDrink}
                amount={e.amount}
                id={e.nameDrink}/>
                })
            }
          </div>
      </div>
    </>
  )
}
