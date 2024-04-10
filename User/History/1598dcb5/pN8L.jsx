import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderOrganizer } from '../../Header/HeaderOrganizer'
import './DetailsCategories.scss'
export const DetailsCategories = ({}) => {
  const getDetails = useSelector(state => state.organizer.details)

  return (
    <div className='container-details-categories'>
        <HeaderOrganizer 
          notification={true} backbutton={-1} 
          party={getDetails.length ? getDetails[0].nameParty + ' ' + getDetails[0].addressParty : null}
          />
    </div>
  )
}
