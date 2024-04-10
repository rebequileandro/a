import { useEffect, useRef } from "react";
import "./music-player.scss";
import { useState } from "react";
const MusicPlayer = ({ name, uploader, thumbnails, audio }) => {
  const audioRef = useRef(null);
  const [statusPlayer, setStatusPlayer] = useState(false);
  const [timelineValue, setTimelineValue] = useState(0);

  useEffect(() => {
    const timeline = document.getElementById("timeline");
    if (audioRef?.current?.duration) {
      audioRef.current.addEventListener("timeupdate", () => {
        setTimelineValue(audioRef.current.currentTime);
      });
      audioRef.current.addEventListener("loadedmetadata", () => {
        console.log("Duración de la canción:", audioRef.current.duration);
        timeline.max = audioRef.current.duration;
      });
    }
    return () => {
      if (audioRef?.current) {
        audioRef?.current?.removeEventListener("timeupdate", () => {
          setTimelineValue(audioRef.current?.currentTime);
        });
        audioRef?.current?.removeEventListener("loadedmetadata", () => {
          timeline.max = audioRef.current?.duration;
        });
      }
    };
  }, [audioRef?.current?.duration]);

  useEffect(() => {
    setTimelineValue(0);
  }, [name]);

  const handleClick = () => {
    if (!statusPlayer || statusPlayer === "pause") {
      setStatusPlayer("playing");
      audioRef.current.play();
    } else {
      setStatusPlayer("pause");
      audioRef.current.pause();
    }
    console.log(audioRef);
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
        <h2>{name}</h2>
        <p>{uploader}</p>
        {audio ? (
          <div className="player__controls">
            <audio ref={audioRef} src={audio}></audio>
            <input
              className="player__slider"
              type="range"
              id="timeline"
              value={timelineValue}
              min="0"
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
                {statusPlayer === "playing" ? (
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
                  download={`${name}.mp3`}
                >
                  Download
                </a>
              )}
            </div>
          </div>
        ) : (
          "..."
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
