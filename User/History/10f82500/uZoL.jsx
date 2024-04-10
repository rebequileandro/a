import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Categories } from '../../components/Categories/Categories'
import { GradientGreenBar } from '../../components/Gradient-Green-Bar/GradientGreenBar'
import { getAllDrinks } from '../../redux/store/slices/storeProducts'

export const Marketplace = ({id = '629a77f4f9e1a51b23698943'}) => {
    const getDinks = useSelector(state => state.store.drinks)
    const getBottles = useSelector(state => state.store.bottles)
    const getPromotions = useSelector(state => state.store.promotions)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDrinks(id))
    }, [])
    
  return (
    <div>
      {getDinks.length ? <Categories title={'tragos'} category={getDinks}/> : null}
      {getBottles.length ? <Categories title={'botellas'} category={getBottles}/> : null}
      {getPromotions.legth ? <Categories title={'promociones'} category={getPromotions}/> : null}
      <GradientGreenBar 
        action={'cart'} 
        isAmount={true}/>
    </div>
  )
}
