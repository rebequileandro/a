import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modify } from '../../redux/Actions'
import './Text.scss'

export const Text = ({edit, state, id, setEdit}) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(state)
  const [isEdit, setIsEdit] = useState(false)
  const modifyText = () =>{
    dispatch(modify(id, {name: input}))
    setIsEdit(false)
  }
  return (
    <div className='container-text'>
      {
     !isEdit ? 
       <div className='text' onClick={() => setIsEdit(true)}>
          <span>{input}</span>
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
