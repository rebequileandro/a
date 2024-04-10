import React, { useRef } from 'react'

export const Image = ({image}) => {
    const fileRef = useRef()
  return (
    <div key={e.id}>
          <img width={40} src={image} alt='multiple' onClick={(e)=> {
            e.preventDefault();
            fileRef.current.click()}}/>
          <input 
              accept='image/*'
              type="file" ref={fileRef} 
              style={{display: 'none'}}
              onChange={(e) => upLoadImage(e, index)}
              />
    </div>
  )
}
