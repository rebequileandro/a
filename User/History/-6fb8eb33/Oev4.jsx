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
    options?.map(e => {
      e.text === state && setColors(e.color)
    })
  })
  const modifyCategory = (category) =>{
    dispatch(modify(id, {categoria: category}))
    setIsEdit(false)
  }
  const secondaryClick = (e) =>{
    e.preventDefault()
    setIsEdit(false)
  }
  const onHandleChange = (value, color, index) => {
    setInput(value)
    setColors(color) 
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
            {options?.map(e => {
              let index = options.findIndex(i => i === e)
              console.log(index)
              return <button onClick={() => onHandleChange(e.text, e.color, index)} className={`${e.color}-button`}>
                {e.text}
              </button>
            })
            }
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