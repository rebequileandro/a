import React from 'react'
import {QRCodeSVG} from 'qrcode.react';
import './QrGenerator.scss'
export const QrGenerator = () => {
  return (
    <div>
        <QRCodeSVG
            value={"sasassas"}
            size={165}
            bgColor={"#000000"}
            fgColor={"#ffffff"}
            level={"L"}
            includeMargin={true}
            imageSettings={{
            src: "https://static.zpao.com/favicon.png",
            x: null,
            y: null,
            height: 24,
            width: 24,
            
            }}
            />
    </div>
  )
}
