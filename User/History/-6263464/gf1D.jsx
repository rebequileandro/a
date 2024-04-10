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

  useEffect(() => {
    const videoElement = document.getElementById('videoElement');
    const switchCamera = document.getElementById('switch-camera');

    const qrScanner = new QrScanner(videoElement, (result) => {
      dispatch(clearOrder());
      setData(result);
      setIsOpen(false);
    });

    QrScanner.listCameras(true).then((cameras) => {
      if (cameras.length > 1) {
        setListCam(cameras);
        qrScanner.setCamera(cameras[cameras.length - 1].id);
      }
    });
    switchCamera.addEventListener('click', () => {
      alert(`current: ${qrScanner._preferredCamera}`);
      alert(`current: ${listCam}`);
      const cam = listCam.find((e) => e.id !== qrScanner._preferredCamera);
      if (cam) {
        qrScanner.setCamera(cam.id);
      }
    });
    if (videoElement) {
      qrScanner?.start();
    }
    return () => {
      qrScanner?.stop();
    };
  }, []);

  return (
    <div className="container-qr-reader">
      <video className="container-qr-reader__video" id="videoElement" />
      <button className="container-qr-reader__button-camera" id="switch-camera">
        <img src={imageCamera} alt="flip" />
      </button>
    </div>
  );
};
