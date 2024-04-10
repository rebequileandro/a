import React from 'react'
import GradientButton from '../GradientButton/GradientButton'
import Input from '../Input/Input'
import './Searchbar.scss'
const Searchbar = () => {
    const date = new Date().toDateString()
  return (
    <div className='searchbar-container'>
        <div>
            <h1>user user</h1>
            <h3>{date}</h3>
        </div>
        <div className='search'>
            <Input
                inputPops={{
                    type: "search",
                    placeholder: "Buscar"
                }}
            />
        </div>
        <div className='reporte'>
            <GradientButton text={"Reporte"} bold/>
        </div>
    </div>
  )
}

export default Searchbar