import React from 'react'
import './Searchbar.scss'
const Searchbar = () => {
    const date = new Date() 
  return (
    <div className='searchbar-container'>
        <div>
            <h1>user user</h1>
            <h3>{}</h3>
        </div>
        <div className='input-wrapper'>
            <input type="search" />
        </div>
    </div>
  )
}

export default Searchbar