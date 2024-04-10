import React, { useState } from 'react'
import './Select.scss'
import arrow from '../../../assets/icons/icon_arrow-white.svg'
const Select = ({placeholder, }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('')
    const options = ["techno", "cachengue", "electronica", "rock"]
  return (
    <div className='select-wrapper'>
        <div className='select-container' onClick={() => setIsOpen(!isOpen)}>
            <div className='selected'>
                {selected.length ?
                <span>{selected}</span>
                :
                <span className='placeholder'>{placeholder}</span>}
                <img className={`icon ${isOpen ? "show" : null}`} src={arrow} alt="more options"/>
            </div>
            <div className={`options-container ${isOpen ? "show" : null}`}>
                {options?.map((option, i) => (
                    <React.Fragment key={i}>
                        <hr/>
                        <div onClick={() => setSelected(option)} className='option'>
                            <span>{option}</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Select