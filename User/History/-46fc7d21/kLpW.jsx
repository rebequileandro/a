import React from 'react'
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

export const NewLine = () => {
  return (
    <div className='container-line'>

    <Text />

    <Number/>

    <Select />

    <MultiSelect/>

    <Image/>

    <MultipleImage/>


    <ImageAndText/>

    <Files/>

    <CheckBox/>
    
    <Dates/>
  </div>
  )
}
