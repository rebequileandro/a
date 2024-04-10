import React, { useEffect, useId, useRef, useState } from 'react'
import './MultipleImage.scss'
import camera from '../../../assets/Camera.svg'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
import { Image } from './Image'
export const MultipleImage = ({ state, id}) => {

  const [preview, setPreview] = useState(state ? state : [{photo: camera}, {photo: camera}, {photo: camera}])
  const dispatch = useDispatch()
  const fileRef = useRef()
  useEffect(() => {
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
    </div>
  )
}
