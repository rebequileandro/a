import React, { useState } from 'react'
import './Select.scss'
import arrow from '../../../assets/icons/icon_arrow-white.svg'
const Select = ({placeholder, }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('')
    const options = ["techno", "cachengue", "electronica", "rock"]
  return (
    <div className='select-wrapper'>
        <div className='select-wrapper__select-container' onClick={() => setIsOpen(!isOpen)}>
            <div className='select-wrapper__selected'>
                {selected.length ?
                <span>{selected}</span>
                :
                <span className='select-wrapper__placeholder'>{placeholder}</span>}
                <img className={`select-wrapper__icon ${isOpen ? "show" : null}`} src={arrow} alt="more options"/>
            </div>
            <div className={`select-wrapper__options-container ${isOpen ? "show" : null}`}>
                {options?.map((option, i) => (
                    <React.Fragment key={i}>
                        <hr className='line'/>
                        <div onClick={() => setSelected(option)} className='select-wrapper__option'>
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