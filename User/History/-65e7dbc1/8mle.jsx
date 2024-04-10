import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './History.scss'
const History = () => {
    const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1]
  return (
    <div className='history-container'>
        <Sidebar active={'history'}/>
        <Searchbar/>
        <div className='table'>
            <div className='row-container'>
                    <h1>n° de orden</h1>
                    <h1>id de transacción</h1>
                    <h1>fecha</h1>
                    <h1>hora</h1>
                    <h1>tipo de ingreso</h1>
                    <h1>detalle de transacción</h1>
                    <h1>cantidad de producto</h1>
                    <h1>transacción total ($)</h1>
                    <h1>ingreso total</h1>
                    <h1>ingreso por unidad de producto actual</h1>
                    <h1>ingreso por total de prosucto</h1>
                    <h1>id de cliente</h1>
                    <h1>cuit</h1>
                    <h1>razón social</h1>
                    <h1>nombre comercial del cliente</h1>
                    <h1>punto de venta</h1>
                    <h1>direccion comercial del cliente</h1>
            </div>
            <hr/>
            {arr?.map(e => (
                <>
                <div className='row-container'>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                    <h2 className='content-table'>holas</h2>
                <hr/>
                </>
            ))
            }
        </div>
    </div>
  )
}

export default History