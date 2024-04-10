import React from 'react'
import {QRCodeSVG} from 'qrcode.react';
import './QrGenerator.scss'
export const QrGenerator = ({ticket}) => {
  return (
    <div>
        <QRCodeSVG
            value={ticket}
            size={165}
            bgColor={"#ffffff"}
            fgColor={'linear-gradient(90.19deg, #FF547B 0.16%, #D639FD 99.84%)'}
            level={"L"}
            includeMargin={true}
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
