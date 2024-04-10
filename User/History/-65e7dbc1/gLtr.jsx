import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './History.scss'
const History = () => {
    const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1]
  return (
    <div className="history-container">
      <Sidebar active={"history"} />
      <Searchbar />
      <div className="table">
        <div className="row-container">
          <h1 className="header-table">n° de orden</h1>
          <h1 className="header-table">id de transacción</h1>
          <h1 className="header-table">fecha</h1>
          <h1 className="header-table">hora</h1>
          <h1 className="header-table">tipo de ingreso</h1>
          <h1 className="header-table">detalle de transacción</h1>
          <h1 className="header-table">cantidad de producto</h1>
          <h1 className="header-table">transacción total ($)</h1>
          <h1 className="header-table">ingreso total</h1>
          <h1 className="header-table">ingreso por unidad de producto actual</h1>
          <h1 className="header-table">ingreso por total de prosucto</h1>
          <h1 className="header-table">id de cliente</h1>
          <h1 className="header-table">cuit</h1>
          <h1 className="header-table">razón social</h1>
          <h1 className="header-table">nombre comercial del cliente</h1>
          <h1 className="header-table">punto de venta</h1>
          <h1 className="header-table">direccion comercial del cliente</h1>
        </div>
        <hr />
        {arr?.map((e) => (
          <>
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
            <hr/>
          </>
        ))}
      </div>
    </div>
  );
}

export default History