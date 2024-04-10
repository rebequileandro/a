//in this component is the qr code generator
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './QrGenerator.scss';
export const QrGenerator = ({ ticket }) => {
  //[{Pedido: '2 CUBA LIBRE 1 FERNET' },{Fecha: '29 Junio 2021, 7.14 PM'} ,{Id: '02034502'}, {Estado:'Exitoso'}, {NFT: 'Bottle box 2345403245'}]
  return (
    <div className="qr-container">
      <QRCodeSVG
        value={ticket}
        size={130}
        level={'L'}
        includeMargin={false}
        imageSettings={{
          src: '',
          x: null,
          y: null,
          height: 24,
          width: 24,
          excavate: true
        }}
      />
    </div>
  );
};
