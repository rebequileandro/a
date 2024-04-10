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
  }, [])
  const modifyCategory = (category) =>{
    dispatch(modify(id, {categoria: category}))
    setIsEdit(false)
  }
  const secondaryClick = (e) =>{
    e.preventDefault()
    setIsEdit(false)
  }
  const onHandleChange = (value, color) => {
    setColors(color) 
    setInput(value)
    modifyCategory(value)
  }

  return (
    <div className='container-categories'>
      <div>
       <div onClick={() => setIsEdit(true)}>
          <button className={`${colors}-button`}>{input}</button>
      </div>
      </div>
      {isEdit &&
          <div className='select-box'
          onContextMenu={(e) => secondaryClick(e)}
          >
            {options?.map(e => (
              <button onClick={() => onHandleChange(e.text, e.color)} className={`${e.color}-button`}>
                {e.text}
              </button>
            ))
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