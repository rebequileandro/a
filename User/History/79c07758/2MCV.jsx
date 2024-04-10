import React, { useState } from 'react'
import './Select.scss'
const Select = ({placeholder, }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('')
    const options = ["techno", "cachengue", "electronica", "rock"]
  return (
    <div className='select-wrapper'>
        <div className='select-container' onClick={() => setIsOpen(!isOpen)}>
            <div className='selected'>
                <span>{selected.length ? selected : placeholder}</span>
            </div>
            <div className={`options-container ${isOpen ? "show" : null}`}>
                {options?.map((option, i) => (
                    <React.Fragment key={i}>
                    <hr/>
                    <span onClick={() => setSelected(option)}>{option}</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Select