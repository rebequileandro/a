import React from 'react'
import './Home.scss'
import Searchbar from '../../components/Searchbar/Searchbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Card from '../../components/Card/Card'

const Home = () => {
  return (
    <>
    <Sidebar active={"home"}/>
    <div className='home-container'>
        <Searchbar/>
        <div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    </>
  )
}

export default Home