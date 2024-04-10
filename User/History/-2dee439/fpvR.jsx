//in this component is the qr code scanner
import React, { useState } from 'react'
import QrReader from 'modern-react-qr-reader'
import './QrScanner.scss'
export const QrScanner = ({setIsOpen, setData}) => {
    const handleError = err => {
      console.error(err)
    }
    const handleScan = value => {
      if (value) {
        setData(value)
        setIsOpen(false)
      }
    }
    return (
      <div className='container-qr-reader'>
      <QrReader
        showViewFinder={false}
        delay={100}
        facingMode={"environment"}
        onScan={(e) => handleScan(e)}
        onError={(e) => handleError(e)}
        style={{ width: '172%'}}
      />
    </div>
  );
};
