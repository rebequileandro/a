import React from "react";
import "./audioplayer.scss";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
const Audioplayer = ({ audio }) => {
  const audioRef = useRef();

  const [timelineValue, setTimelineValue] = useState(0);
  const [status, setStatus] = useState("play");
  const handleClick = (option) => {
    if (option === "play") {
      audioRef.current.play();
      setStatus("play");
    } else if (option === "pause") {
      audioRef.current.pause();
      setStatus("pause");
    } else if ("stop") {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setStatus("stop");
    }
  };
  const timeLineControler = (e) => {
    audioRef.current.currentTime = e.target.value;
  };
  useEffect(() => {
    const timeline = document.getElementById("timeline");
    if (audioRef?.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setTimelineValue(audioRef.current.currentTime);
      });
      audioRef.current.addEventListener("loadedmetadata", () => {
        timeline.max = audioRef.current.duration;
      });
    }
    return () => {
      if (audioRef?.current) {
        audioRef?.current?.removeEventListener("timeupdate", () => {
          setTimelineValue(audioRef.current.currentTime);
        });
        audioRef?.current?.removeEventListener("loadedmetadata", () => {
          timeline.max = audioRef.current.duration;
        });
      }
    };
  }, [audioRef?.current]);

  const formatTime = (totalSeconds) => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let minutosFormateados = minutes < 10 ? "0" + minutes : minutes;
    let segundosFormateados = seconds < 10 ? "0" + seconds : seconds;

    return minutosFormateados + ":" + segundosFormateados;
  };

  return (
    <div className="audioplayer">
      <audio src={audio} autoPlay ref={audioRef} id="audioTrack" />
      <div className="audioplayer__screen">
        <div className="audioplayer__track-wrapper">
          <span>TRACK</span>
          <span className="audioplayer__counter">1</span>
        </div>
        <div className="audioplayer__counter-wrapper">
          <div className="audioplayer__counter-label">
            <span>MIN</span>
            <span>SEC</span>
          </div>
          <span className="audioplayer__counter">
            {formatTime(Math.floor(timelineValue))}
          </span>
        </div>
        <div className="audioplayer__status-wrapper">
          <div className="audioplayer__status">
            {status === "play" ? (
              <svg
                fill="#2edf31"
                width="100%"
                height="100%"
                viewBox="-60 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Play</title>
                <path d="M64 96L328 256 64 416 64 96Z" />
              </svg>
            ) : status === "pause" ? (
              <svg
                fill="#2edf31"
                width="100%"
                height="100%"
                viewBox="-64 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Pause</title>
                <path d="M64 96L160 96 160 416 64 416 64 96ZM224 96L320 96 320 416 224 416 224 96Z" />
              </svg>
            ) : (
              <svg
                width="80%"
                height="80%"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Stop</title>
                <path d="M12 3H3V12H12V3Z" fill="#2edf31" />
              </svg>
            )}
          </div>
          <div className="audioplayer__status audioplayer__status--tick">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 7L9.42857 17L6 13"
                stroke="#2edf31"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="audioplayer__mode">
          <span>MODE</span>
          <div className="audioplayer__mode-data">
            <span>
              <span>44 </span>
              KHz I
            </span>
            <span>
              <span>192 </span>
              kBit/s III
            </span>
          </div>
        </div>
      </div>
      <div className="audioplayer__spacer-wrapper">
        <div className="audioplayer__line-space audioplayer__line-space--dark" />
        <div className="audioplayer__line-space audioplayer__line-space--light" />
      </div>
      <div className="audioplayer__controls-container">
        <div className="audioplayer__controls-wrapper">
          <button
            className="audioplayer__btn"
            onClick={() => handleClick("play")}
          >
            <svg
              fill="#000000"
              width="100%"
              height="100%"
              viewBox="-60 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Play</title>
              <path d="M64 96L328 256 64 416 64 96Z" />
            </svg>
          </button>
          <button
            className="audioplayer__btn"
            onClick={() => handleClick("stop")}
          >
            <svg
              width="80%"
              height="80%"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Stop</title>
              <path d="M12 3H3V12H12V3Z" fill="#000000" />
            </svg>
          </button>
          <button
            className="audioplayer__btn"
            onClick={() => handleClick("pause")}
          >
            <svg
              fill="#000000"
              width="100%"
              height="100%"
              viewBox="-64 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Pause</title>
              <path d="M64 96L160 96 160 416 64 416 64 96ZM224 96L320 96 320 416 224 416 224 96Z" />
            </svg>
          </button>
          <button className="audioplayer__btn">
            <svg
              fill="#000000"
              width="120%"
              height="120%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1,1.2246467991473532e-16,1.2246467991473532e-16,1,0,0)"
            >
              <title>Previous Track</title>
              <path d="M6 17L14 12L6 7V17Z" fill="#000000" />
              <path d="M18 7H15V12V17H18V7Z" fill="#000000" />
            </svg>
          </button>
          <button className="audioplayer__btn">
            <svg
              fill="#000000"
              width="120%"
              height="120%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Next Track</title>
              <path d="M6 17L14 12L6 7V17Z" fill="#000000" />
              <path d="M18 7H15V12V17H18V7Z" fill="#000000" />
            </svg>
          </button>
        </div>
        <button className="audioplayer__btn audioplayer__btn--right">
          <div className="audioplayer__btn--upload">
            <svg
              fill="#000000"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21,21H3L12,3Z" />
            </svg>
          </div>
          <span />
        </button>
      </div>
      <div className="audioplayer__spacer-wrapper-bottom">
        <div className="audioplayer__line-space audioplayer__line-space--dark" />
        <div className="audioplayer__line-space audioplayer__line-space--light" />
      </div>
      <div className="audioplayer__timeline-wrapper">
        <input
          className="audioplayer__timeline"
          type="range"
          id="timeline"
          value={timelineValue}
          min="0"
          step="0.1"
          onChange={timeLineControler}
        />
      </div>
    </div>
  );
};

export default Audioplayer;
