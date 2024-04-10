import React, { useState } from 'react'
import QrReader from 'modern-react-qr-reader'
import './QrScanner.scss'
export const QrScanner = () => {
    const [data, setData] = useState('No result');
    const handleError = err => {
      console.error(err)
    }
    const handleScan = e => {
      if (e) {
        setData(e)
      }
    }
    
    return (
      <QrReader 
        className='container-qr-reader'
        showViewFinder={false}
        delay={300}
        facingMode={"environment"}
        onScan={(e) => handleScan(e)}
        onError={(e) => handleError(e)}
        style={{ width: '160%'}}
      />
  );
};
