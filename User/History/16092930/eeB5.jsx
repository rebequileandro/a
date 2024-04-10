import React from 'react'
import {QRCodeSVG} from 'qrcode.react';
import './QrGenerator.scss'
export const QrGenerator = ({ticket}) => {
  return (
    <div className='qr-container'>
        <QRCodeSVG
            value={ticket}
            size={165}
            bgColor={"#ffffff"}
            fgColor={'#D639FD'}
            level={"L"}
            includeMargin={false}
            imageSettings={{
            src: "https://static.zpao.com/favicon.png",
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
