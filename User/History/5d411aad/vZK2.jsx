import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modify } from '../../redux/Actions'
import './Text.scss'

export const Text = ({ state, id, edit, setEdit}) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(state)
  const [isEdit, setIsEdit] = useState(false)
  const modifyText = () =>{
    dispatch(modify(id, {name: input}))
    setIsEdit(false)
  }
  const secondaryClick = (e) =>{
    e.preventDefault()
  }


  return (
    <div className='container-text'>
      {
     !isEdit || !edit? 
       <div className='text'>
          <span onClick={() => setIsEdit(true)}>{input}</span>
      </div> :
      <Input 
        type={'text'} 
        setInput={setInput} 
        value={input}
        onSubmit={() => modifyText()}
        />
      }
    </div>
  )
}
