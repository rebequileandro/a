import React from 'react'
import { useSelector } from 'react-redux'
import './CategoriesDetails.scss'
export const CategoriesDetails = () => {
  const getDetails = useSelector(state => state.organizer.details)

  return (
    <div className='container-categories-details'>
        <HeaderOrganizer 
          notification={true} backbutton={'/organizer'} 
          party={getDetails.length ? getDetails[0].nameParty + ' ' + getDetails[0].addressParty : null}
          />
    </div>
  )
}
