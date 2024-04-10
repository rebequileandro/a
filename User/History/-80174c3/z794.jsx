import React, { useRef, useState } from 'react'
import './Files.scss'
import { Input } from '../../Input/Input'
export const Files = ({edit, state}) => {
  const [input, setInput] = useState({
    fileRaw: '',
    fileName: state
  })

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