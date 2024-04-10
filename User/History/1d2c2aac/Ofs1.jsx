import { useState } from "react";
import "./chat-box.scss";
import audioLine from "assets/line.svg";
const ChatBox = ({ data, next }) => {
  const [isOpenTranscription, setIsOpenTranscription] = useState(false);
  const formattedContent = {
    __html: data.content.replace(
      /(\d+\.|\-\s)/g,
      (match) => "<br> <br>" + match
    ),
  };
  return (
    <div
      className={`chatbox-wrapper chatbox-wrapper--${
        data.role === "user" ? "right" : "left"
      }`}
    >
      <div
        className={`chatbox chatbox--${
          data.role === "user"
            ? next?.role === data.role
              ? "sent-prev"
              : "sent"
            : next?.role === data.role
            ? "answer-prev"
            : "answer"
        }`}
      >
        {data?.typeContent === "voice" ? (
          <div className="chatbox__audio-wrapper">
            <div className="chatbox__audio-wrapper__time-image-container">
              <span className="chatbox__audio-wrapper__time-image-container__time">
                {data?.timeVoice}
              </span>
              <img
                className="chatbox__audio-wrapper__time-image-container__image"
                src={audioLine}
                alt="audio"
              />
            </div>

            <div
              className={`chatbox__audio-wrapper__transcription-container chatbox__audio-wrapper__transcription-container--${
                isOpenTranscription ? "show" : "hidden"
              }`}
            >
              <p
              // dangerouslySetInnerHTML={formattedContent}
              >
                {data.content}
              </p>
            </div>

            {data.content.length ? (
              <button
                className="chatbox__audio-wrapper__transcription-btn"
                onClick={() => setIsOpenTranscription(!isOpenTranscription)}
              >
                {isOpenTranscription
                  ? "Ocultar transcripción"
                  : "Ver transcripción"}
              </button>
            ) : null}
          </div>
        ) : (
          <p
          // dangerouslySetInnerHTML={formattedContent}
          >
            {data.content}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
