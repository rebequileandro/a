import React, { useEffect, useId, useRef, useState } from 'react'
import './MultipleImage.scss'
import camera from '../../../assets/Camera.svg'
import { Image } from './Image'
export const MultipleImage = ({ state, id, newInput, setNewInput}) => {
  const fileRef = useRef()
  const [preview, setPreview] = useState([
    {
      photo: camera,
      id: new Date().getTime() 
    },
    {
      photo: camera,
      id: new Date().getTime() 
    }, 
    {
      photo: camera,
      id: new Date().getTime() 
    }
  ])
  
  useEffect(() => {
    if(state){
      let newstate = []
      let acc = 1
      state?.map(e => {
        newstate.push({
          photo: e.photo,
          id: new Date().getTime() + acc
        })
        acc ++;
      })
      setPreview(newstate)
    }
  }, [])  

  const upLoadImage = (e) =>{
    const file = e.target.files[0];
    if(file && file.type.substring(0, 5) === 'image'){
      const reader = new FileReader()
      reader.onloadend = () => {
          let newImage =  preview.map(e => {
              if(e.id === preview[index].id) {
  
                e.photo = reader.result
              }
              return e
            })
          setPreview(newImage)
          dispatch(modify(id, {images: newImage}))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className='multiple-image'>
      {
      preview?.map(e => {
      let index = preview.findIndex(i => i.id === e.id)
      return <Image
              index={index}
              image={e.photo}
              preview={preview}
              setPreview={setPreview}
              newInput={newInput}
              setNewInput={setNewInput}
              id={id}
              state={state}
              />
      }) 
      }
        <button className='add'>+</button>
        <input 
          accept='image/*'
          type="file" ref={fileRef} 
          style={{display: 'none'}}
          onChange={(e) => upLoadImage(e)}
          />
    </div>
  )
}
