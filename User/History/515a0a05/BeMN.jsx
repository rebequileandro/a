import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modifyImage } from '../../redux/Actions'
import './Image.scss'
export const Image = ({edit, state, id}) => {
  const [input, setInput] = useState(state)
  const [path, setPath] = useState("")
  const dispatch = useDispatch()

  const upLoadImage = (e) =>{
    e.preventDefault()
    dispatch(modifyImage(id, {image: input}))
  }
  const onFileChange = (e) =>{
    if(e.target.files){
      const file = e.target.files[0]
      if(file.type.includes('image')){
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function load() {
            setInput(reader.result)
        }
      }
    }
  }
  return (
    <div>
      {
     !edit ?
      <img width={40} src={input} alt=""/>
      :
      <form onSubmit={() => upLoadImage()}>
        <input type="file" name="" id="" onChange={(e)=> onFileChange(e.target.files)}/>
      </form>
      }
    </div>
  )
}
