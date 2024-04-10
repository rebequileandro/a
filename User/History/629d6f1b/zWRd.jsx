import React, { useEffect, useState } from 'react'
import './SelectDrink.scss'
import search from '../../../../../assets/icons/Organizer/search.svg'
import { SelectDrinkCard } from './SelectedDinksCards/SelectDrinkCard'
import { useDispatch, useSelector } from 'react-redux'
import { onSearchDrinks, upDateDrinks } from '../../../../../redux/store/slices/Organizer'
import { CreatePackCard } from './SelectedDinksCards/CreatePackCard'
import { CreatePack } from './CreatePackPopup/CreatePack'
export const SelectDrink = ({selected, setSelected, setStatus, setIsOpenStatusPopup, id}) => {
    const drinks = useSelector(state => state.organizer.listDrinks)
    const getStatus = useSelector(state => state.organizer.status)
    const getAllDrinks = useSelector(state => state.organizer.drinks)
    const getAllBottles = useSelector(state => state.organizer.bottles)
    const getAllPacks = useSelector(state => state.organizer.packs)
    const getAllAdditional = useSelector(state => state.organizer.additional)
    const getParty = useSelector(state => state.organizer.details)
    const getSearch = useSelector(state => state.organizer.search)
    const dispatch = useDispatch()
    const [input, setinput] = useState('')
    const [drinksProducts, setDrinksProduct] = useState([])
    const [isCreate, setIsCreate] = useState(false)
    const [newPack, setNewPack] = useState({
        idParty: id,
        imageDrink: '',
        typeDrink: 'packs',
        nameDrink: '',
        priceDrink: '',
        discountDrink: '',
        finalPriceDrink: '',
        activeDrink: 'true',
        statusDrink: 'true'
    })
    useEffect(() => {
      if(selected === 'packs') {
        getSearch.length ? setDrinksProduct(getSearch) : setDrinksProduct(getAllPacks)
      } else {
        getSearch.length ? setDrinksProduct(getSearch) : setDrinksProduct(drinks)
      }
    }, [getSearch, getAllPacks])

    const handleChange = (e) => {
      e.preventDefault()
      setinput(e.target.value)
      dispatch(onSearchDrinks(e.target.value))
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      let allData = []
      let newData = []
      selected === 'botellas' ? allData = [getAllDrinks, getAllPacks, getAllAdditional, drinks] :
      selected === 'tragos' ? allData = [getAllBottles , getAllPacks, getAllAdditional, drinks] :
      selected === 'additional' ? allData = [getAllBottles , getAllPacks, getAllDrinks, drinks] :
      //selected === 'packs' && (allData = [getAllDrinks, getAllBottles, drinks])
      setTimeout(() => {
        allData?.map(element => {
            element.map(e => {
                newData.push(e)
            })
        })   
      }, 300);
      setTimeout(() => {
        console.log(newData)
          // dispatch(upDateDrinks( id , {
          //         nameParty: getParty.nameParty,
          //         idParty: id,
          //         drinkParty: newData
          //     }))
      }, 500);
    }
    useEffect(() => {
      getStatus && getStatus === 200 ? 
      setStatus(200) : setStatus(false)
      getStatus && setIsOpenStatusPopup(true)
    }, [getStatus])

  return (
    <>
    {isCreate &&
    <CreatePack newPack={newPack} setNewPack={setNewPack} setIsCreate={setIsCreate} id={id}/>}
    <div className='popup-select-drink-overlay'>
      <div className='popup-select-drink'>
          <h1>Añadir {selected}</h1>
          <p>selecciona {selected === 'botellas' ? 'las' : 'los'} {selected} disponibles en tu menu</p>
          <div className='search-container'>
            <input className='search' type="search" placeholder='Buscar'  value={input} onChange={(e) => handleChange(e)}/>
            <img src={search} alt="buscar" />
          </div>
          <div className='container-select-cards'>
            {selected === 'packs' && drinksProducts.length ?
            <div className='sub-title'>
              <div className='line'/>
              <span>Mis packs</span>
              <div className='line'/>
            </div> : null}
            {drinksProducts?.map(e => (
                <SelectDrinkCard
                  key={e.nameDrink}
                  typeDrink={e.typeDrink}
                  name={e.nameDrink}
                  price={e.priceDrink}
                  discount={e.discountDrink}
                  image={e.imageDrink}
                  statusDrink={e.activeDrink}
                  />
                ))}
            {selected === 'packs' &&
              <div className='sub-title'>
                <div className='line'/>
                <span>Crear pack</span>
                <div className='line'/>
              </div>}
            {selected === 'packs' &&
              drinks?.map(e => (
                <CreatePackCard
                  key={e.nameDrink} 
                  name={e.nameDrink}
                  price={e.finalPriceDrink}
                  oldPrice={e.priceDrink}
                  image={e.imageDrink}
                  setNewPack={setNewPack}
                  newPack={newPack}

                />
              ))}
          </div>
          <div className='add-drink-buttons'>
            {newPack.imageDrink.length ? <button className='save' onClick={() => setIsCreate(true)}>Siguiente</button>
            : <button className='save' onClick={(e) => handleSubmit(e)}>Aceptar</button>}
            <button className='cancel' onClick={() => setSelected(false)}>Cancelar</button>
          </div>
      </div>
    </div>
    </>
  )
}
