import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import './Number.scss'

export const Number = ({state, id}) => {
    const [input, setInput] = useState(state)
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()
    const modifyText = () =>{
      dispatch(modify(id, {name: input}))
      setIsEdit(false)
    }
    const secondaryClick = (e) =>{
      e.preventDefault()
      setIsEdit(false)
    }
  return (
    <div>
      {
     !isEdit ? 
      <div>
        <span>#{input}</span>
        </div> :
      <Input
        type={'number'} 
        setInput={setInput} 
        value={input}
        />
      }
    </div>
  )
}
