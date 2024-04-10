//in this component is the qr code scanner
import React, { useEffect, useRef, useState } from 'react';
import './QrScanner.scss';
import { clearOrder } from '../../../../redux/slices/bartender/orders';
import { useDispatch } from 'react-redux';
import QrScanner from 'qr-scanner';
import imageCamera from '../../../../assets/icons/cam.svg';

export const QRScanner = ({ setIsOpen, setData }) => {
  const dispatch = useDispatch();
  const [listCam, setListCam] = useState([]);
  const [qrScanner, setQrScanner] = useState(null);

  useEffect(() => {
    const videoElement = document.getElementById('videoElement');

    if (!qrScanner) {
      setQrScanner(
        new QrScanner(videoElement, (result) => {
          dispatch(clearOrder());
          setData(result);
          setIsOpen(false);
        })
      );
      QrScanner.listCameras(true).then((cameras) => {
        console.log(cameras);
        setListCam(cameras);
      });
    }

    if (videoElement && qrScanner) {
      qrScanner?.start();
    }
    return () => {
      qrScanner?.stop();
    };
  }, [qrScanner]);

  // useEffect(() => {
  //   if (listCam.length) {
  //     qrScanner.setCamera(listCam[listCam.length - 1].id);
  //   }
  // }, [listCam]);

  const changeCamera = () => {
    alert(JSON.stringify(listCam));
    alert(`current:${qrScanner._preferredCamera}`);

    const cam = listCam.find(
      (e) => parseInt(e.id) !== parseInt(qrScanner._preferredCamera)
    );
    alert('cam', JSON.stringify(cam));

    if (cam) {
      alert(`current:${qrScanner._preferredCamera}
      next:${cam.id}`);
      qrScanner.setCamera(cam.id);
    }
  };
  console.log('qr scanner', qrScanner?._preferredCamera);

  return (
    <div className="container-qr-reader">
      <video className="container-qr-reader__video" id="videoElement"></video>
      <button
        onClick={() => changeCamera()}
        className="container-qr-reader__button-camera"
      >
        <img src={imageCamera} alt="flip" />
      </button>
    </div>
  );
};
