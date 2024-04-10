import { useState } from "react";
import "./chat-box.scss";
import audioLine from "assets/line.svg";
const ChatBox = ({ data, next }) => {
  const [isOpenTranscription, setIsOpenTranscription] = useState(false);

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
        {data?.typeContent === "audio" ? (
          <div className="chatbox__audio-wrapper">
            <div>
              <img src={audioLine} alt="audio" />
            </div>

            <div
              className={`chatbox__audio-wrapper__transcription-container chatbox__audio-wrapper__transcription-container--${
                isOpenTranscription ? "show" : "hidden"
              }`}
            >
              <p>{data.content}</p>
            </div>

            <button
              className="chatbox__audio-wrapper__transcription-btn"
              onClick={() => setIsOpenTranscription(!isOpenTranscription)}
            >
              {isOpenTranscription
                ? "Ocultar transcripción"
                : "Ver transcripción"}
            </button>
          </div>
        ) : (
          <p>{data.content}</p>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
