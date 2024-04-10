import React from "react";
import "./chat-message.scss";
const ChatMessage = (props) => {
  return (
    <div>
      {props.sender === "user" ? (
        <div>
          {props.user?.image ? (
            <img src={props.user?.image} alt="" />
          ) : (
            <span>{props.user.fullName[0]}</span>
          )}
        </div>
      ) : (
        <div>
          <img src="/assets/chat/medbot.png" alt="" />
        </div>
      )}
      <div
        className={`chat-message ${
          props.sender === "user" ? "chat-message--user" : "chat-message--ia"
        }`}
      >
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
