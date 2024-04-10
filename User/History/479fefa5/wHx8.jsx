import React, { useEffect, useId, useRef, useState } from 'react'
import './MultipleImage.scss'
import camera from '../../../assets/Camera.svg'
import { Image } from './Image'
export const MultipleImage = ({ state, id}) => {

  const [preview, setPreview] = useState([{photo: camera}, {photo: camera}, {photo: camera}])
  
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
              id={id}/>
      }) 
      }
            <button className='add'>+</button>

    </div>
  )
}
