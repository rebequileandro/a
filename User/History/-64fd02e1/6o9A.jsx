import React from 'react'
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
       <Input/>
    </div>
  )
}

export default Searchbar