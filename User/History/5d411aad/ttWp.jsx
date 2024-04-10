import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modify } from '../../redux/Actions'
import './Text.scss'

export const Text = ({ state, id, newInput, setNewInput, mobileViewLabel}) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(state && state)
  const [isEdit, setIsEdit] = useState(false)
  useEffect(() => {
    if(!state && setNewInput) {
      setNewInput({
        ...newInput,
        name: input
      })
    }
  }, [input])
  
  const modifyText = (e) =>{
    if(state) {
      dispatch(modify(id, {name: input}))
      setIsEdit(false)
    } 
  }
  const secondaryClick = (e) =>{
    e.preventDefault()
    setIsEdit(false)
  }


  return (
    <div className='container-text' 
      onContextMenu={(e) => secondaryClick(e)}
      onClick={() => setIsEdit(true)}
    >
      <label>{}</label>
      {
     !isEdit && state ? 
       <div className='text'>
          <span>{input}</span>
      </div> :
      <Input 
        type={'text'} 
        setInput={setInput} 
        value={input}
        onSubmit={(e) => modifyText(e)}
        />
      }
    </div>
  )
}
