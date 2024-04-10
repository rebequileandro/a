//in this component is the qr code scanner
import React, { useState } from 'react'
import QrReader from 'modern-react-qr-reader'
import './QrScanner.scss'
export const QrScanner = () => {
    const [data, setData] = useState('');
    const handleError = err => {
      console.error(err)
    }
    const handleScan = e => {
      if (e) {
        setData(e)
        alert(data)
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
        style={{ width: '167%'}}
      />
    </div>
  );
};
