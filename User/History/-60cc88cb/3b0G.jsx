import React from 'react'
import './Home.scss'
import Searchbar from '../../components/Searchbar/Searchbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <>
    <Sidebar active={"home"}/>
    <div className='home-container'>
        <Searchbar/>
    </div>
    </>
  )
}

export default Home