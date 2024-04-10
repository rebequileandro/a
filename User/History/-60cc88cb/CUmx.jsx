import React from 'react'
import './Home.scss'
import Searchbar from '../../components/Searchbar/Searchbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div className='home-container'>
        <Sidebar active={"home"}/>
        <Searchbar/>
    </div>
  )
}

export default Home