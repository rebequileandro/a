import React from "react";
import "./chat-message.scss";
const ChatMessage = (props) => {
  return (
    <div className="chat-message-container">
      {props.sender === "user" ? (
        <div className="chat-message-container__avatar chat-message-container__avatar--user">
          {props.user?.image ? (
            <img
              src={props.user?.image}
              alt="user-avatar"
              className="chat-message-container__avatar-img"
            />
          ) : (
            <span>{props.user.fullName[0]}</span>
          )}
        </div>
      ) : (
        <div className="chat-message-container__avatar chat-message-container__avatar--ai">
          <img
            src="/assets/chat/medbot.png"
            alt="ai-avatar"
            className="chat-message-container__avatar-img-ai"
          />
        </div>
      )}
      <div
        className={`chat-message ${
          props.sender === "user" ? "chat-message--user" : "chat-message--ai"
        }`}
      >
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
