import React, { useRef, useState } from 'react'
import './ImageAndText.scss'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
export const ImageAndText = ({ state, id}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [input, setInput] = useState({
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
          setInput({
            ...input,
            photo: reader.result})
          dispatch(modify(id, { profile: {
              photo: reader.result,
              name: input.name
          }}))
        }
        reader.readAsDataURL(file)
      }
  }
  const handleSubmit = () => {
        dispatch(modify(id, { profile: {
          photo: input.photo,
          name: input.name
      }}))
  }

  return (
    <div className='container-image-text'>
          <img src={input.photo} alt="selleccione" onClick={(e)=> {
            e.preventDefault();
            fileRef.current.click()}}/>
            <input 
              accept='image/*'
              type="file" ref={fileRef} 
              style={{display: 'none'}}
              onChange={(e) => upLoadImage(e)}
              />
         { isEdit ? <form onSubmit={() => handleSubmit()}>
            <input 
            type="text" 
            value={input.name}
            onChange={(e) => setInput({...input, name: e.target.value})}
            />
          </form> : 
           <span 
           onClick={() => setIsEdit(true)} 
           onContextMenu={() => setIsEdit(false)}>{input.name}</span>}
    </div>
  )
}
