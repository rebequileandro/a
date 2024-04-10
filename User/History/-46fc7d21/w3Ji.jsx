import React from 'react'

export const NewLine = () => {
  return (
    <div key={e.id} className='container-line'>

    <Text 
      state={e.name}
      id={e.id} 
      />

    <Number 
      state={e.number}
      id={e.id}
      />

    <Select 
      state={e.status}
      id={e.id}
      options={options}
      />

    <MultiSelect 
      edit={edit} 
      state={e.multiple}
      options={options}
      id={e.id}
      />

    <Image 
      setEdit={setEdit}
      edit={edit} 
      state={e.image}
      id={e.id}
      />

    <MultipleImage
      state={e.images}
      edit={edit}
      id={e.id}
      />


    <ImageAndText
      state={e.profile}
      id={e.id}
    />

    <Files 
      state={e.file}
      id={e.id}
      />

    <CheckBox/>
    
    <Dates 
      edit={edit} 
      state={e.date}/>
  </div>
  )
}
