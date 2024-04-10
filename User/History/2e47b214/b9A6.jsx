import React from "react";
import "./chat-message.scss";
const ChatMessage = (props) => {
  return (
    <div>
      {props.sender === "user" ? (
        <div></div>
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
