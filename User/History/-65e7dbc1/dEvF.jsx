import React from 'react'
import Input from '../../components/Input/Input'
import Searchbar from '../../components/Searchbar/Searchbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './History.scss'
import arrow from '../../assets/arrow.svg'
const History = () => {
    const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1]
  return (
    <div className="history-container">
      <Sidebar active={"history"} />
      <Searchbar />
      <div className='history-bar'>
        <h1>historial completo</h1>
        <div>
            fechas
        </div>
        <div className='search-bar'>
            <Input
                inputPops={{
                    placeholder: "Buscar"
                }}
            />
        </div>
      </div>
      <div className="table-wrapper">
        <div className="table">
          <div className="row-container">
            <div className="header-table">
                <h1>n° de orden</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className="header-table">
                <h1>id de transacción</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>fecha</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>hora</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>tipo de ingreso</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>detalle de transacción</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>cantidad de producto</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>transacción total ($)</h1> 
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>ingreso total</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>ingreso por unidad de producto actual</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>ingreso por total de prosucto</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>id de cliente</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>cuit</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>razón social</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <div className='header-table'>
                <h1>nombre comercial del cliente</h1>
                <img src={arrow} alt="flecha" />
            </div>
            <h1 className="header-table">punto de venta</h1>
            <h1 className="header-table">direccion comercial del cliente</h1>
          </div>
          {arr?.map((e) => (
            <div className="row-container">
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
              <h2 className="content-table">holas</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History