import React, { useRef } from 'react'

export const Image = ({image, preview, id, index, setPreview}) => {

    const fileRef = useRef()
    const upLoadImage = (e) =>{
      const file = e.target.files[0];
      if(file && file.type.substring(0, 5) === 'image'){
        const reader = new FileReader()
        reader.onloadend = () => {

          let image =  preview.map(e => {
              if(e.id === preview[index].id) {
  
                e.photo = reader.result
              }
              return e
            })


          setPreview(image)
          //dispatch(modify(id, {images: image}))
        }
        reader.readAsDataURL(file)
      }
  }
  return (
     <div key={e.id}>
        <img width={40} src={image} alt='multiple' onClick={(e)=> {
          e.preventDefault();
          fileRef.current.click()}}/>
        <input 
          accept='image/*'
          type="file" ref={fileRef} 
          style={{display: 'none'}}
          onChange={(e) => upLoadImage(e)}
          />
    </div>
  )
}
