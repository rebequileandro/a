import React from 'react'
import {QRCodeSVG} from 'qrcode.react';
import './QrGenerator.scss'
export const QrGenerator = ({ticket}) => {
  return (
    <div className='qr-container'>
        <QRCodeSVG
            value={ticket}
            size={165}
            bgColor={"rgba(255, 255, 255, 0.5)"}
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
