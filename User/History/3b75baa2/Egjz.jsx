import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./cam.scss";
import * as faceapi from "face-api.js";
import { useState } from "react";

const Cam = ({ active, verified }) => {
  const videoRef = useRef(null);
  const camRef = useRef(null);
  const canvasRef = useRef(null);

  const [isNearOval, setIsNearOval] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [timerIntervalID, setTimerIntervalID] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  //pregress circle
  const width = 198;
  const height = 240;
  const strokeWidth = 11;
  const progress = React.useRef(0);
  const radiusX = (width - strokeWidth * 2) / 2;
  const radiusY = (height - strokeWidth * 2) / 2;
  const circumference =
    2 * Math.PI * Math.sqrt((radiusX * radiusX + radiusY * radiusY) / 2);

  const [strokeDashoffset, setStrokeDashoffset] = React.useState(
    circumference - (0 / 100) * circumference
  );

  const activateCamera = async () => {
    // try {
    //   const devices = await navigator.mediaDevices.enumerateDevices();
    //   const frontCamera = devices.find(
    //     (device) =>
    //       device.kind === "videoinput" &&
    //       device.label.toLowerCase().includes("front")
    //   );
    //   const constraints = {
    //     video: {
    //       deviceId: frontCamera ? { exact: frontCamera.deviceId } : undefined,
    //     },
    //   };
    //   const stream = await navigator.mediaDevices.getUserMedia(constraints);
    //   if (videoRef.current) videoRef.current.srcObject = stream;
    // } catch (err) {
    //   console.error("Error accessing the camera: ", err);
    // }
    const constraints = {
      audio: false,
      video: {
        facingMode: "user",
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((localMediaStream) => {
        // console.log(localMediaStream);
        //  DEPRECIATION :
        //       The following has been depreceated by major browsers as of Chrome and Firefox.
        //       video.src = window.URL.createObjectURL(localMediaStream);
        //       Please refer to these:
        //       Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
        //       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

        if ("srcObject" in videoRef.current) {
          videoRef.current.srcObject = localMediaStream;
        } else {
          videoRef.current.src = URL.createObjectURL(localMediaStream);
        }
        // video.src = window.URL.createObjectURL(localMediaStream);
        videoRef.current.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deactivateCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    const imageDataURL = canvasRef.current.toDataURL("image/png");
    setIsVerified(imageDataURL);
  };

  const detectFaces = async () => {
    const video = videoRef.current;
    const cam = camRef.current;

    if (!video || !cam) return;

    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(cam, displaySize);

    const detections = await faceapi.detectAllFaces(
      video,
      new faceapi.TinyFaceDetectorOptions()
    );

    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    const ovalWidth = 158; // Convertir a píxeles
    const ovalHeight = 200; // Convertir a píxeles
    const ovalCenterX = ovalWidth / 2;
    const ovalCenterY = ovalHeight / 2;
    const ovalRadius = ovalWidth / 2;
    const ovalSeventyPorcent = ovalRadius * 0.6;
    // Verificar si alguna cara está cerca y dentro del óvalo
    let isNearAndInsideOval = false;
    let distanceToCamera = "far"; // Puede ser "close", "medium", "far"

    resizedDetections.forEach((detection) => {
      const { x, y, width, height } = detection?._box;
      const faceCenterX = x + width / 2;
      const faceCenterY = y + height / 2;

      // Calcular la distancia entre el centro de la cara y el centro del óvalo
      const distanceToOvalCenter = Math.floor(
        Math.sqrt(
          Math.pow(faceCenterX - ovalCenterX, 2) +
            Math.pow(faceCenterY - ovalCenterY, 2)
        )
      );

      const isInOval =
        distanceToOvalCenter < ovalRadius &&
        distanceToOvalCenter < ovalSeventyPorcent;

      const faceSize = width * height;
      if (isInOval) {
        isNearAndInsideOval = true;
        if (faceSize > displaySize.width * displaySize.height * 0.15) {
          // Ejemplo de umbral para "muy cerca"
          distanceToCamera = "close";
        } else if (faceSize > displaySize.width * displaySize.height * 0.1) {
          // Ejemplo de umbral para "cerca"
          distanceToCamera = "medium";
        } else {
          distanceToCamera = "far";
        }
      }
    });

    setIsNearOval(distanceToCamera === "close");
  };
  useEffect(() => {
    if (active && !isVerified) {
      const loadModels = async () => {
        const MODEL_URL = "/face-api-models";
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      };
      loadModels().then(activateCamera);

      // Iniciar el intervalo cuando active sea true
      const interval = setInterval(() => {
        detectFaces();
      }, 2000); // Ejemplo: detección cada 100ms

      // // Almacenar el ID del intervalo para futura referencia
      setIntervalId(interval);
    } else {
      // console.log("intervalID:", intervalId);
      clearInterval(intervalId);
      deactivateCamera();
      setIsNearOval(false);
    }
  }, [active, isVerified]);
  useEffect(() => {
    if (isNearOval && !isVerified) {
      let interval = setInterval(() => {
        // setValidationTimer(timerRef.current + 3);
        // console.log(timerRef.current);
        // timerRef.current += 1;

        // if (timerRef.current + 1 === 5) {
        //   capturePhoto();
        //   setIsVerified(true);
        //   verified(true);
        // }

        if (progress.current < 100) {
          setStrokeDashoffset(
            circumference - ((progress.current += 25) / 100) * circumference
          );
        } else {
          capturePhoto();
          verified(true);
          clearInterval(interval);
        }
      }, 1000);
      setTimerIntervalID(interval);
    } else if (isVerified) {
      clearInterval(timerIntervalID);
      progress.current = 100;
      setStrokeDashoffset(circumference - (100 / 100) * circumference);
    } else {
      clearInterval(timerIntervalID);
      progress.current = 0;
      setStrokeDashoffset(circumference - (0 / 100) * circumference);
      // console.log(timerIntervalID);
      // timerRef.current = 0;
      // setValidationTimer(0);
    }
  }, [isNearOval, isVerified]);

  return (
    <div className={`cam-container`}>
      <div className="cam" ref={camRef}>
        <canvas
          style={{ display: "none" }}
          ref={canvasRef}
          width="100%"
          height="100%"
        />
        {isVerified && (
          <>
            <img className="cam__img" src={isVerified} alt="check" />
            <span className="cam__img-cover" />
          </>
        )}
        <video
          className="cam__video"
          ref={videoRef}
          autoPlay
          muted
          playsInline
          width="168"
          height="210"
        ></video>
      </div>

      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        className="cam-container__progress"
        fill="none"
      >
        <path
          d={`M${width / 2} ${strokeWidth / 2} A${radiusX}, ${radiusY} 0 1,1 ${
            width / 2 - 0.001
          }, ${strokeWidth / 2}`}
          stroke={`url(#gradient1)`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
        />
        <defs>
          <linearGradient
            id="gradient1"
            x1="5"
            y1="5"
            x2={`${width - 5}`}
            y2="5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#730fe3" />
            <stop offset="100%" stopColor="#4b00ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Cam;
