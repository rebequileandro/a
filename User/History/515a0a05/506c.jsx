import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../../Input/Input'
import { modifyImage } from '../../redux/Actions'
import './Image.scss'
export const Image = ({edit, state, id}) => {
  const [input, setInput] = useState()
  const [path, setPath] = useState(state)
  const dispatch = useDispatch()

  const upLoadImage = () =>{
    dispatch(modifyImage(id, {image: input}))
  }
  const onFileChange = (e) =>{
    if(e.target.files){
      const file = e.target.files[0]
      if(file.type.includes('image')){
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function load() {
          setPath(reader.result)
        }
        setInput(file)
      }
    }
  }
  console.log(input)
  return (
    <div>
      {
     !edit ?
      <img width={40} src={path} alt=""/>
      :
      <form onSubmit={() => upLoadImage()}>
        <input type="file" name="" id="" onChange={(e)=> onFileChange(e.target.files)}/>
        <input type="submit" value="listo" />
      </form>
      }
    </div>
  )
}
