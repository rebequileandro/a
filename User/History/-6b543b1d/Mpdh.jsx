import "./video.scss";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "video.js/dist/video-js.css";
import videojs from "video.js";
import Loader from "../Loader/Loader";

const Video = ({ videoProps, light }) => {
  const lightRef = useRef(null);
  const videoRef = useRef(null);

  const [intervalId, setIntervalId] = useState(null);
  const FRAMERATE = 30;

  useEffect(() => {
    if (lightRef?.current && videoRef?.current && light) {
      const canvas = lightRef?.current;
      const video = videoRef?.current;
      const context = canvas.getContext("2d");

      const repaintAmbilight = () => {
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      };
      const startAmbilightRepaint = () => {
        setIntervalId(window.setInterval(repaintAmbilight, 1000 / FRAMERATE));
      };
      const stopAmbilightRepaint = () => {
        clearInterval(intervalId);
      };

      video.addEventListener("play", startAmbilightRepaint);
      video.addEventListener("pause", stopAmbilightRepaint);
      video.addEventListener("ended", stopAmbilightRepaint);
      video.addEventListener("seeked", repaintAmbilight);
      video.addEventListener("load", repaintAmbilight);
      // load first frame
      repaintAmbilight();
      video.currentTime = 0;
    }
  }, [lightRef?.current, videoRef?.current]);

  return (
    <div className="video-wrapper">
      <div className="video-wrapper__light-wrapper">
        <video
          id="video"
          controls
          className="video-wrapper__video"
          playsInline
          webkit-playsinline
          controlslist="nodownload"
          type="video/mp4"
          ref={videoRef}
          {...videoProps}
        />
        {light && <canvas ref={lightRef} className="video-wrapper__light" />}
      </div>
    </div>
  );
};

export default Video;
