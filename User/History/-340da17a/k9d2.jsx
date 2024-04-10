import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    dispatch(getDrinks(id)).then(() => setIsLoading(false))
  }, [dispatch, getDrinks, id])

  const getAllDrinks = useSelector(state => state.organizer.drinks)
  const getAllBottles = useSelector(state => state.organizer.bottles)
  const getAllPacks = useSelector(state => state.organizer.packs)
  const getAllAdditional = useSelector(state => state.organizer.additional)
  const getDetails = useSelector(state => state.organizer.details)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleSubmit = () => {
    if(!getAllDrinks.length && !getAllBottles.length && !getAllPacks.length && !getAllAdditional.length) {
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
  let OrganizerParty = { 
    party: getDetails.length ? getDetails[0].nameParty : null,
    path: 'menu'
  }
  return (
    <>
      {isOpen && <TypeOfDrink setIsOpen={setIsOpen} id={id}/>}
      <div className='container-organizer-menu'>
          <Header 
            notification={true} 
            backbutton={() => navigate(-1)} 
            OrganizerParty={OrganizerParty}
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
              {getAllAdditional.length ? 
                <Categories 
                  setCategoryType={setCategoryType} 
                  title={'sin alcohol'}
                  id={id} 
                  category={getAllAdditional}/> 
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
