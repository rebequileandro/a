import React from 'react'
import {QRCodeSVG} from 'qrcode.react';
import './QrGenerator.scss'
export const QrGenerator = ({ticket}) => {
  return (
    <div className='qr-container'>
        <QRCodeSVG
            value={'ticket'}
            size={100}
            bgColor={"#ffffff"}
            fgColor={'00000'}
            level={"L"}
            includeMargin={false}
            imageSettings={{
            src: "",
            x: null,
            y: null,
            height: 24,
            width: 24,
            excavate: true,
            }}
            />
    </div>
  )
}
