import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderOrganizer } from '../Header/HeaderOrganizer'
import './OrganizerMenu.scss'
import plus from '../../../assets/icons/Organizer/plus.svg'
import { TypeOfDrink } from './AddDrink/TypeOfDrink/TypeOfDrink'
import { useNavigate, useParams } from 'react-router-dom'
import { getbyId, getDrinks, sendDrinks } from '../../../redux/store/slices/Organizer'
import { Categories } from './Categories/Categories'
import { allDrinks } from './drinks/drinks'
import { TabbarOrganizer } from '../Tabbar/TabbarOrganizer'
import { Header } from '../../../components/Header/Header'


export const OrganizerMenu = ({setCategoryType}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(getbyId(id))
    dispatch(getDrinks(id))
  }, [dispatch, getDrinks, id])

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
    <>
      {isOpen && <TypeOfDrink setIsOpen={setIsOpen}/>}
      <div className='container-organizer-menu'>
          <Header 
            notification={true} 
            backbutton={() => navigate(-1)} 
            OrganizerParty={getDetails.length ? getDetails[0].nameParty + ' ' + getDetails[0].addressParty : null}
            />
            <div className='menu'>
              {getAllDrinks.length ? 
                <Categories
                  setCategoryType={setCategoryType} 
                  title={'Tragos'} 
                  id={id}
                  category={getAllDrinks}/> 
                  : null}
              {getAllBottles.length ? 
                <Categories
                  setCategoryType={setCategoryType} 
                  title={'Botellas'} 
                  id={id}
                  category={getAllBottles}/> 
                  : null}
              {getAllPacks.length ? 
                <Categories 
                  setCategoryType={setCategoryType} 
                  title={'Packs'}
                  id={id} 
                  category={getAllPacks}/> 
                  : null}
            </div>
            <div className='new-drink-container'>
              <div className='new-drink' onClick={() => handleSubmit()}>
                  <img src={plus} alt="mas tragos"/>
                  <p>Añadir bebidas</p>
              </div>
            </div>
         </div>
        <TabbarOrganizer active={'party'}/>
    </>
  )
}
