import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modifyImage } from '../../redux/Actions'
import './Image.scss'
export const Image = ({edit, state, id}) => {
  const [input, setInput] = useState(state)
  const [path, setPath] = useState()
  const dispatch = useDispatch()

  const upLoadImage = () =>{
    dispatch(modifyImage(id, {image: input}))
  }
  // const onFileChange = (e) =>{
  //   if(e.target.files){
  //     const file = e.target.files[0]
  //     if(file.type.includes('image')){
  //       const reader = new FileReader()
  //       reader.readAsDataURL(file)
  //       reader.onload = function load() {
  //         setPath(reader.result)
  //       }
  //       setInput(file)
  //     }
  //   }
  // }

  const fileRef = useRef()
  return (
    <div>
      {
     !edit ?
      <img width={40} src={state} alt=""/>
      :
        <div> 
          <button onClick={(e)=> {
            e.preventDefault();
            fileRef.current.click()
            }}>nueva imagen</button>
          <input 
            accept='image/*'
            type="file" ref={fileRef} 
            style={{display: 'none'}}
            onChange={(e) => {
              const file = e.target.files[0];
              if(file && file.type.substring(0, 5) === 'image'){
                setInput(file)
              }
            }}
            />
        </div>
      }
    </div>
  )
}
