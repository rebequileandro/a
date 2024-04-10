import React from 'react'
import './Printable.scss'
import { Chart } from './Chart'
export const Printable = () => {
  return (
    <div className='print-container'>
        <div className='chart-container'>
        <h1>pedidos</h1>
        <div className='chart'>
            <div className='total'>
                <h2>total</h2>
                <h1>{total}</h1>
            </div>
            <Chart/>
        </div>
        </div>
        <div className='data-container'>
        <div className='secodary-container'>
            <h2>total facturado</h2>
            <div className='number-container'>
            <h1>${totals}</h1>
            <p style={{color: totalPorsents >= 1 ? '#17b029' : '#b00009'}}>
                {totalPorsents >= 1 ? '+' : null}
                {totalPorsents}%</p>
            </div>
        </div>
        <div className='secodary-container'>
            <h2>clientes</h2>
            <div className='number-container'>
            <h1>${'200'}</h1>
            <p style={{color: clietporsents >= 1 ? '#17b029' : '#b00009'}}>
                {clietporsents >= 1 ? '+' : null}
                {clietporsents}%</p>
            </div>
        </div>
        <div className='secodary-container'>
            <h2>valor pedido promedio</h2>
            <div className='number-container'>
            <h1>${'1200'}</h1>
            <p style={{color: totalPromedio >= 1 ? '#17b029' : '#b00009'}}>
                {totalPromedio >= 1 ? '+' : null}
                {totalPromedio}%</p>
            </div>
        </div>
        </div>
    </div>
  )
}
