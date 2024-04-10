import { useEffect, useRef } from "react";
import "./music-player.scss";
import { useState } from "react";
const MusicPlayer = ({ name, uploader, thumbnails, audio, format, size }) => {
  const audioRef = useRef(null);
  const [statusPlayer, setStatusPlayer] = useState(false);
  const [timelineValue, setTimelineValue] = useState(0);

  useEffect(() => {
    if (audioRef?.current?.duration) {
      audioRef.current.addEventListener("timeupdate", () => {
        setTimelineValue(audioRef.current?.currentTime);
      });
    }
    return () => {
      if (audioRef?.current) {
        audioRef?.current?.removeEventListener("timeupdate", () => {
          setTimelineValue(audioRef.current?.currentTime);
        });
      }
    };
  }, [audioRef?.current?.duration]);

  useEffect(() => {
    setTimelineValue(0);
  }, [name]);

  const handleClick = () => {
    if (
      !statusPlayer ||
      statusPlayer === "pause" ||
      formatTime(timelineValue) === formatTime(audioRef.current?.duration)
    ) {
      setStatusPlayer("playing");
      audioRef.current.play();
    } else {
      setStatusPlayer("pause");
      audioRef.current.pause();
    }
  };
  const timeLineControler = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  function formatTime(seconds) {
    // Calcular minutos y segundos
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);

    // Agregar ceros a la izquierda si es necesario
    minutes = minutes < 10 ? "0" + minutes : minutes;
    remainingSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    // Devolver en el formato 00:00
    return `${minutes}:${remainingSeconds}`;
  }
  return (
    <div className="player">
      <div className="player__image-wrapper">
        <img src={thumbnails} alt={name} />
      </div>
      <div className="player__data-container">
        <div>
          <h2>{name}</h2>
          <p>{uploader}</p>
          <br />
          <span>{size / (1024 ^ 2)} MB</span>
        </div>
        {audio ? (
          <div className="player__controls">
            <audio ref={audioRef} src={audio}></audio>
            <input
              className="player__slider"
              type="range"
              id="timeline"
              value={timelineValue}
              min="0"
              max={audioRef?.current?.duration}
              step="0.1"
              onChange={timeLineControler}
            />
            <div className="player__controls-wrapper">
              <div className="player__controls-wrapper__timer">
                <span>{`${formatTime(timelineValue)} / ${
                  audioRef.current?.duration
                    ? formatTime(audioRef.current?.duration)
                    : "00:00"
                }`}</span>
              </div>
              <button
                className="player__controls__play-btn btn btn--secondary"
                disabled={!audio}
                onClick={handleClick}
              >
                {formatTime(timelineValue) ===
                formatTime(audioRef.current?.duration) ? (
                  <svg
                    width="90%"
                    height="90%"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 489.533 489.533"
                  >
                    <path
                      className="btn-icon"
                      d="M268.175 488.161c98.2-11 176.9-89.5 188.1-187.7 14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9l-118.6 87.1c-2 1.5-2 4.4 0 5.9l118.6 87.1c2.7 2 6.7.2 6.7-2.9v-57.5c87.9 1.4 158.3 76.2 152.3 165.6-5.1 76.9-67.8 139.3-144.7 144.2-81.5 5.2-150.8-53-163.2-130-2.3-14.3-14.8-24.7-29.2-24.7-17.9 0-31.9 15.9-29.1 33.6 17.4 109.7 118.7 192 236 178.9z"
                    />
                  </svg>
                ) : statusPlayer === "playing" ? (
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      className="btn-icon"
                      x="3.95"
                      y="4"
                      width="11"
                      height="28"
                      rx="2.07"
                      ry="2.07"
                    />
                    <rect
                      className="btn-icon"
                      x="20.95"
                      y="4"
                      width="11"
                      height="28"
                      rx="2.07"
                      ry="2.07"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                ) : (
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="btn-icon"
                      d="M32.16 16.08 8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                )}
              </button>
              {audio && (
                <a
                  className="btn btn--secondary player__controls__download"
                  href={audio}
                  download={`${name}.${format}`}
                >
                  Download
                </a>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MusicPlayer;
