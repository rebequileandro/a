import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { HeaderOrganizer } from '../../Header/HeaderOrganizer'
import { ProductCardsOrganizer } from '../ProductsCardsOrganizer/ProductCardsOrganizer'
import plus from '../../../../assets/icons/Organizer/plus.svg'
import './DetailsCategories.scss'
import { catchStatus, selectDrinks } from '../../../../redux/store/slices/Organizer'
import { SelectDrink } from '../AddDrink/SelectDrink/SelectDrink'
import { StatusPopUp } from '../../../../components/StatusPopUp/StatusPopUp'
import { Card } from '../Card/Card'
export const DetailsCategories = ({categoryType}) => {
  const dispatch = useDispatch()
  const getDetails = useSelector(state => state.organizer.details)
  const getAllDrinks = useSelector(state => state.organizer.drinks)
  const getAllBottles = useSelector(state => state.organizer.bottles)
  const getAllPacks = useSelector(state => state.organizer.packs)
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
          <HeaderOrganizer 
            notification={true} backbutton={-1} 
            party={getDetails.length ? getDetails[0].nameParty + ' ' + getDetails[0].addressParty : null}
            />
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
