import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
import './Categories.scss'


export const Categories = ({ state, id, options}) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(state)
  const [isEdit, setIsEdit] = useState(false)
  const [colors, setColors] = useState('green')
  useEffect(() => {
    state === 'completado' && setColors('purple') 
    state === 'en distribución' && setColors('green') 
    state === 'pagado' && setColors('green-apple') 
    state === 'en espera' && setColors('yellow')
    state === 'cancelado' && setColors('purple') 
  })
  const modifyCategory = (category) =>{
    dispatch(modify(id, {categoria: category}))
    setIsEdit(false)
  }
  const secondaryClick = (e) =>{
    e.preventDefault()
    setIsEdit(false)
  }
  const onHandleChange = (value) => {
    setInput(value)
    value === 'completado' && setColors('purple') 
    value === 'en distribución' && setColors('green') 
    value === 'pagado' && setColors('green-apple') 
    value === 'en espera' && setColors('yellow')
    value === 'cancelado' && setColors('purple') 
    modifyCategory(value)
  }

  return (
    <div className='container-categories'>
      <div 
      onContextMenu={(e) => secondaryClick(e)}
      >
          
          <div onClick={() => setIsEdit(true)}>
              <button className={`${colors}-button`}>{input}</button>
          </div>
      </div>
      {isEdit &&
          <div className='select-box'>
          <button onClick={() => onHandleChange('completado')} className='purple-button'>completado</button>
          <button onClick={() => onHandleChange('completado')} className='green-button'>en distribución</button>
          <button onClick={() => onHandleChange('completado')} className='green-apple-button'>pagado</button>
          <button onClick={() => onHandleChange('completado')} className='yellow-button'>en espera</button>
          <button onClick={() => onHandleChange('completado')} className='purple-button'>cancelado</button>
        </div>
      }
    </div>
  )
}

{/* <select className={`${colors}-button`} id='select-styles' value={input} onChange={(e) => onHandleChange(e)}>
<option disabled={true}></option>
<option className='purple-button'>completado</option>
<option className='green-button'>en distribución</option>
<option className='green-apple-button'>pagado</option>
<option className='yellow-button'>en espera</option>
<option className='purple-button'>cancelado</option>
</select> */}