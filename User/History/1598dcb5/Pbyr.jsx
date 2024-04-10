import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { HeaderOrganizer } from '../../Header/HeaderOrganizer'
import { ProductCardsOrganizer } from '../ProductsCardsOrganizer/ProductCardsOrganizer'
import plus from '../../../../assets/icons/Organizer/plus.svg'
import './DetailsCategories.scss'
import { selectDrinks } from '../../../../redux/store/slices/Organizer'
import { SelectDrink } from '../AddDrink/SelectDrink/SelectDrink'
export const DetailsCategories = ({categoryType}) => {
  const dispatch = useDispatch()
  const getDetails = useSelector(state => state.organizer.details)
  const getAllDrinks = useSelector(state => state.organizer.drinks)
  const getAllBottles = useSelector(state => state.organizer.bottles)
  const getAllPacks = useSelector(state => state.organizer.packs)
  const [isOpen,setIsOpen] = useState(false)
  const [details, setDetails] = useState([])
  const { id } = useParams()
  useEffect(() => {
    if(categoryType === 'drink'){
      setDetails(getAllDrinks) 
      dispatch(selectDrinks(getAllDrinks))
    } 
    if(categoryType === 'bottle'){
      setDetails(getAllBottles) 
      dispatch(selectDrinks(getAllBottles))
    }
    if(categoryType === 'packs') {
      setDetails(getAllPacks)
      dispatch(selectDrinks(getAllPacks))
    }
    
  }, [categoryType])
  const handleOnClick = () => {

  }
  return (
    <div className='container-details-categories'>
        <HeaderOrganizer 
          notification={true} backbutton={-1} 
          party={getDetails.length ? getDetails[0].nameParty + ' ' + getDetails[0].addressParty : null}
          />
        <div className='container-drinks'>
          {details?.map(e => {
            if(JSON.parse(e.activeDrink) === true)
            return <ProductCardsOrganizer 
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
          })
          }
          <div className='new-drink-container'>
            <div className='new-drink' onClick={() => handleOnClick()}>
                <img src={plus} alt="mas tragos"/>
                <p>Añadir bebidas</p>
            </div>
          </div>
        </div>
        {isOpen && 
        <SelectDrink
        />

        }
    </div>
  )
}
