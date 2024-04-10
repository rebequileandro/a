import "./video.scss";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "video.js/dist/video-js.css";
import videojs from "video.js";

const Video = ({ videoProps, light }) => {
  const lightRef = useRef(null);
  const videoRef = useRef(null);
  // const player = useRef(null);
  const [statusVideo, setStatusVideo] = useState(false);
  const options = {
    // fill: true,
    // fluid: true,
    // preload: "auto",
    // html5: {
    //   hls: {
    //     enableLowInitialPlaylist: true,
    //     smoothQualityChange: true,
    //     overrideNative: true,
    //   },
    // },
  };

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

  useEffect(() => {
    if (videoRef?.current) {
      const video = videoRef?.current;
      const play = () => {
        setStatusVideo(true);
      };
      const stop = () => {
        setStatusVideo(false);
      };

      video.addEventListener("play", play);
      video.addEventListener("pause", stop);
      video.addEventListener("ended", stop);
    }
  }, [videoRef?.current]);

  // useEffect(() => {
  //   const videoPlayer = videojs(videoRef?.current, {
  //     ...videoProps,
  //     fill: true,
  //     // fluid: true,
  //     preload: "auto",
  //     html5: {
  //       hls: {
  //         enableLowInitialPlaylist: true,
  //         smoothQualityChange: true,
  //         overrideNative: true,
  //       },
  //     },
  //   });
  //   setPlayer(videoPlayer);
  //   return () => {
  //     if (player !== null) {
  //       player.dispose();
  //     }
  //   };
  // }, []);

  return (
    <div className="video-wrapper">
      <div
        className="video-wrapper__light-wrapper"
        onClick={() =>
          statusVideo ? videoRef?.current?.pause() : videoRef?.current?.play()
        }
      >
        <video
          // preload="metadata"
          // loadin="eager"
          id="video"
          controls={window.innerWidth > 700}
          className="video-wrapper__video"
          playsInline
          ref={videoRef}
          {...videoProps}
        />
        {!videoRef?.current?.controls &&
          (!statusVideo ? (
            <button
              className="video-wrapper__button"
              onClick={() => videoRef?.current?.play()}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.79 2.093A.5.5 0 0 0 4 2.5v10a.5.5 0 0 0 .79.407l7-5a.5.5 0 0 0 0-.814l-7-5Z"
                  fill="#fff"
                />
              </svg>
            </button>
          ) : (
            <button
              className="video-wrapper__button video-wrapper__button--pause"
              onClick={() => videoRef?.current?.pause()}
            >
              <svg
                fill="#fff"
                width="100%"
                height="100%"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="1.414"
              >
                <path d="M6.964 3.68A.684.684 0 0 0 6.286 3H4.93a.684.684 0 0 0-.678.68v8.631c0 .374.303.677.678.677h1.355a.681.681 0 0 0 .678-.677V3.68h.001zm4.783.011a.685.685 0 0 0-.68-.681h-1.36a.683.683 0 0 0-.68.68v8.628c0 .376.304.68.68.68h1.36c.373 0 .68-.307.68-.68V3.691z" />
              </svg>
            </button>
          ))}
        {light && <canvas ref={lightRef} className="video-wrapper__light" />}
      </div>
    </div>
  );
};

export default Video;
