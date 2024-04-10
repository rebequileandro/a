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
        <div className='content'>
            <Card title='total facturado clientes'/>
            <Card title='total facturado wedrink'/>
            <Card title='productos consumidos'/>
            <Card title='discotecas nuevas'/>
            <Card title='usuarios nuevos'/>
            <Card title='total descargas'/>
        </div>
    </div>
    </>
  )
}

export default Home