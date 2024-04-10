import React, { useRef, useState } from 'react'
import './Files.scss'
import { Input } from '../../Input/Input'
import { useDispatch } from 'react-redux'
import { modify } from '../../redux/Actions'
export const Files = ({state, id}) => {
  const [input, setInput] = useState({
    fileRaw: '',
    fileName: ''
  })
  console.log(state)
  const dispatch = useDispatch()
  const fileRef = useRef()
  const handleClick = (e) => {
      e.preventDefault();
      fileRef.current.click()
  }

  const handleChange =  (e) => {
    e.preventDefault();
    const [ file ] = e.target.files
    setInput({
      ...input,
      fileRaw: file ,
      fileName: file.name
    })
    const fileReader = new FormData();
    fileReader.append('file', file, file.name)
    let format = JSON.stringify(fileReader)
    console.log(format)
   //dispatch(modify(id , {file: fileReader}))
  }

  return (
    <div className='container-file'>
      <div className='file' onClick={(e) => handleClick(e)}>
        <p>{input.fileName}</p>
      </div> 
      <input 
        type='file'
        accept=".doc,.docx,.pdf,.xls"
        ref={fileRef} 
        style={{display: 'none'}}
        onChange={(e) => handleChange(e)}
        />
      
    </div>
  )
}