import React, { useRef, useState } from 'react'
import './ImageAndText.scss'
import { useDispatch } from 'react-redux'
import { modifyImage } from '../../redux/Actions'
export const ImageAndText = ({ state, id}) => {
  const [input, serInput] = useState({
    photo: state.photo,
    name: state.name
  })

  const dispatch = useDispatch()
  const fileRef = useRef()

  const upLoadImage = (e) =>{
      const file = e.target.files[0];
      if(file && file.type.substring(0, 5) === 'image'){
        const reader = new FileReader()
        reader.onloadend = () => {
          serInput({
            ...input,
            photo: reader.result})
          dispatch(modifyImage(id, { profile: {
              photo: reader.result,
              name: input.name
          }}))
        }
        reader.readAsDataURL(file)
      }
  }
  return (
    <div className='container-image'>
        <div> 
          <img src={input.photo} alt="selleccione" onClick={(e)=> {
            e.preventDefault();
            fileRef.current.click()}}/>
          
        </div>
    </div>
  )
}
