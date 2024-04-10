//in this component is the qr code scanner
import React, { useState } from 'react'
import QrReader from 'modern-react-qr-reader'
import './QrScanner.scss'
export const QrScanner = ({setIsOpen}) => {
    const [data, setData] = useState('');
    const handleError = err => {
      console.error(err)
    }
    const handleScan = e => {
      if (e) {
        setData(e)
        setIsOpen(false)
      }
    }
    //temporary button
    return (
      <div className='container-qr-reader'>
        <button onClick={()=> setIsOpen(false)}>x</button>
      <QrReader
        showViewFinder={false}
        delay={100}
        facingMode={"environment"}
        onScan={(e) => handleScan(e)}
        onError={(e) => handleError(e)}
        style={{ width: '167%'}}
      />
    </div>
  );
};
