import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { HeaderOrganizer } from '../../Header/HeaderOrganizer'
import { ProductCardsOrganizer } from '../ProductsCardsOrganizer/ProductCardsOrganizer'
import plus from '../../../../assets/icons/Organizer/plus.svg'
import './DetailsCategories.scss'
export const DetailsCategories = ({categoryType}) => {

  const getDetails = useSelector(state => state.organizer.details)
  const getAllDrinks = useSelector(state => state.organizer.drinks)
  const getAllBottles = useSelector(state => state.organizer.bottles)
  const getAllPacks = useSelector(state => state.organizer.packs)
  const [details, setDetails] = useState([])
  const { id } = useParams()
  useEffect(() => {
    categoryType === 'drink' && setDetails(getAllDrinks) 
    categoryType === 'bottle' && setDetails(getAllBottles) 
    categoryType === 'packs' && setDetails(getAllPacks)
  }, [categoryType])
  
  return (
    <div className='container-details-categories'>
        <HeaderOrganizer 
          notification={true} backbutton={-1} 
          party={getDetails.length ? getDetails[0].nameParty + ' ' + getDetails[0].addressParty : null}
          />
        <div className='container-drinks'>
          {details?.map(e => (
            <ProductCardsOrganizer 
              key={e.nameDrink}
              edit={true} 
              image={e.imageDrink} 
              name={e.nameDrink} 
              oldPrice={e.priceDrink}
              discount={e.discountDrink}
              status={e.activeDrink}
              price={e.finalPriceDrink}
              type={e.typeDrink}
              id={id}
              />
          ))
          }
          <div className='new-drink-container'>
            <div className='new-drink' onClick={() => handleSubmit()}>
                <img src={plus} alt="mas tragos"/>
                <p>Añadir bebidas</p>
            </div>
          </div>
        </div>
    </div>
  )
}
