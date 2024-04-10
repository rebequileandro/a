import React from 'react'
import { useDispatch } from 'react-redux'
import { addSheetData } from '../../redux/Actions'
import './CheckBox.scss'
export const CheckBox = ({id}) => {
  const dispatch = useDispatch()
  
  const checked = (e) => {
    if(e.target.checked){
      dispatch(addSheetData(id))
    }
  }
  return (
    <div className='container-checkbox'>
        <input className='checkbox' type="checkbox" onChange={(e) => checked(e)}/>
    </div>
  )
}
