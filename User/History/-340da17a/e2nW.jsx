import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderOrganizer } from '../Header/HeaderOrganizer'
import './OrganizerMenu.scss'
import plus from '../../../assets/icons/Organizer/plus.svg'
import { TypeOfDrink } from './AddDrink/TypeOfDrink/TypeOfDrink'
import { useParams } from 'react-router-dom'
import { getbyId, getDrinks, sendDrinks } from '../../../redux/store/slices/Organizer'
import { Categories } from './Categories/Categories'
import { allDrinks } from './drinks/drinks'



export const OrganizerMenu = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getbyId(id))
    dispatch(getDrinks(id))
  }, [dispatch])

  const getAllDrinks = useSelector(state => state.organizer.drinks)
  const getAllBottles = useSelector(state => state.organizer.bottles)
  const getAllPacks = useSelector(state => state.organizer.packs)
  const getDetails = useSelector(state => state.organizer.details)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = () => {
    if(!getAllDrinks.length && !getAllBottles.length && !getAllPacks.length) {
      let addIdParty = allDrinks.drinkParty.map(e => {
        e.idParty = id
        return e
      })
      dispatch(sendDrinks(id, {
        nameParty: getDetails[0]?.nameParty,
        idParty: id,
        drinkParty: addIdParty
      }))
      setTimeout(() => {
        setIsOpen(true)
      }, 1000);
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div className='container-organizer-menu'>
        <HeaderOrganizer 
          notification={true} backbutton={'/organizer'} 
          party={getDetails.length ? getDetails[0].nameParty + ' ' + getDetails[0].addressParty : null}/>
          {getAllDrinks.length ? <Categories title={'Tragos'} categorie={getAllDrinks}/> : null}
          {getAllBottles.length ? <Categories title={'Botellas'} categorie={getAllBottles}/> : null}
          {getAllPacks.length ? <Categories title={'Packs'} categorie={getAllPacks}/> : null}

          <div className='new-drink-container'>
            <div className='new-drink' onClick={() => handleSubmit()}>
                <img src={plus} alt="mas tragos"/>
                <p>Añadir bebidas</p>
            </div>
          </div>
        {isOpen && <TypeOfDrink setIsOpen={setIsOpen}/>}
    </div>
  )
}
