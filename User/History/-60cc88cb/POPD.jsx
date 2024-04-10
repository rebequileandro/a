import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div>
        <Sidebar active={"home"}/>
        <Searchbar/>
    </div>
  )
}

export default Home