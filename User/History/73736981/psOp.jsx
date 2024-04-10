import React from 'react'
import './Sidebar.scss'
import WeDrink from '../../assets/wedrink.svg'
const Sidebar = ({active}) => {
  return (
    <div className='sidebar-container'>
      <img src={WeDrink} alt="logo"/>
    </div>
  )
}

export default Sidebar