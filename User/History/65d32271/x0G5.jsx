import React, { useState } from 'react'
import { ProductCardsOrganizer } from '../../ProductsCardsOrganizer/ProductCardsOrganizer'
import './TypeOfDrink.scss'
import drink from '../../../../../assets/icons/Organizer/drink.svg'
import bottle from '../../../../../assets/icons/Organizer/bottle.svg'
import pack from '../../../../../assets/icons/Organizer/pack.svg'
import { SelectDrink } from '../SelectDrink/SelectDrink'
import { StatusPopUp } from '../../../../../components/StatusPopUp/StatusPopUp'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectDrinks } from '../../../../../redux/store/slices/Organizer'
import { allDrinks } from '../../drinks/drinks'



export const TypeOfDrink = ({setIsOpen}) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(false)
  const [status, setStatus] = useState(false)
  const [isOpenStatusPopup, setIsOpenStatusPopup] = useState(false)
  const getAllDrinks = useSelector(state => state.organizer.myDrinks[0]?.drinkParty)
  
  const handleClick = (value) => {
      let addIdParty = allDrinks.drinkParty.map(e => {
        e.idParty = id
        return e
      })
      if(value === 'tragos') {
        let drinks1 = getAllDrinks.filter(e => e.typeDrink === "drink")
        let drinks2 = addIdParty.filter(e => e.typeDrink === "drink")
        dispatch(selectDrinks(drinks1 ? drinks1 : drinks2)) 
      } 
      if(value === 'botellas') {
        var bottles1 = getAllDrinks.filter(e => e.typeDrink === "bottle")
        var bottles2 = addIdParty.filter(e => e.typeDrink === "bottle")
        console.log(bottles2)
        if(bottles1){
          dispatch(selectDrinks(bottles1)) 
        } else {
          dispatch(selectDrinks(bottles2)) 
        }
      }
      // if(value === 'packs') {
      //   let packs1 = allDrinks.drinkParty.filter(e => e.typeDrink === "packs")
      //   let packs2 = allDrinks.drinkParty.filter(e => e.typeDrink === "packs")
      //   dispatch(selectDrinks(packs1 ? packs1 : packs2)) 
      // }
      setTimeout(() => {
        setSelected(value)
      }, 1500);
  }
  return (
    <div className='overlay-type-of-drink'>
      {!status && !selected ? 
      <div className='popup'>
            <div className='header-popup'>
                <h2>elige el tipo de producto</h2>
                <p>Selecciona las categorias disponibles</p>
            </div>
            <div className='type-of-products'>
                <div className='card-container' onClick={() => handleClick('tragos')}>
                  <ProductCardsOrganizer image={drink} name={'tragos'}/>
                </div>
                <div className='card-container' onClick={() => handleClick('botellas')}>
                  <ProductCardsOrganizer image={bottle} name={'botellas'}/>
                </div>
                <div className='card-container' onClick={() => handleClick('packs')}>
                  <ProductCardsOrganizer image={pack} name={'packs'}/>
                </div>
            </div>
            <button className='cancel' onClick={() => setIsOpen(false)}>Cancelar</button>
        </div>
        :
        !status && !isOpenStatusPopup ?
        <SelectDrink 
          selected={selected} 
          setStatus={setStatus} 
          setSelected={setSelected}
          setIsOpenStatusPopup={setIsOpenStatusPopup}
          id={id}/> : null
        }
        {isOpenStatusPopup && <StatusPopUp 
          redirect={() => setIsOpen(false)} 
          title={status ? 'menu actualizado' : 'ha ocurrido un error'} 
          status={status} 
          button={'aceptar'}/>}
    </div>
  )
}
