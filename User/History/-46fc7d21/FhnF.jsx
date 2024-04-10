import React, { useState } from 'react'
import { CheckBox } from '../Modules/CheckBox/CheckBox'
import { Dates } from '../Modules/Dates/Dates'
import { Files } from '../Modules/Files/Files'
import { Image } from '../Modules/Image/Image'
import { ImageAndText } from '../Modules/ImageAndText/ImageAndText'
import { MultipleImage } from '../Modules/MultipleImage/MultipleImage'
import { Number } from '../Modules/Number/Number'
import { MultiSelect } from '../Modules/Select/MultiSelect'
import { Select } from '../Modules/Select/Select'
import { Text } from '../Modules/Text/Text'

export const NewLine = ({selectOptions}) => {
    const [newInput, setNewInput] = useState({
        name:'',    //text
        number:'',  //number
        status:'',  //select
        multiple: [], //multiSelect   
        image:'',   //image
        images:'', //multiImage
        profile:{   //imageAndText
            photo:'',
            name:''
        },
        file:'', //files
        date:'' //dates

    })
  return (
    <div className='container-line'>

    <Text 
        setNewInput={setNewInput} 
        newInput={newInput}
    />

    <Number
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <Select 
         setNewInput={setNewInput} 
         newInput={newInput}
         options={selectOptions}
    />

    <MultiSelect
         setNewInput={setNewInput} 
         newInput={newInput}
         options={selectOptions}
    />

    <Image
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <MultipleImage
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <ImageAndText
         setNewInput={setNewInput} 
         newInput={newInput}
    />

    <Files
         setNewInput={setNewInput} 
         newInput={newInput}
    />
    <CheckBox/>
    
    <Dates
         setNewInput={setNewInput} 
         newInput={newInput}
    />
  </div>
  )
}
