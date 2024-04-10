import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { HeaderOrganizer } from '../../Header/HeaderOrganizer'
import './DetailsCategories.scss'
export const DetailsCategories = ({categoryType}) => {

  const getDetails = useSelector(state => state.organizer.details)
  const getAllDrinks = useSelector(state => state.organizer.drinks)
  const getAllBottles = useSelector(state => state.organizer.bottles)
  const getAllPacks = useSelector(state => state.organizer.packs)
  const [details, setDetails] = useState([])

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
    </div>
  )
}
