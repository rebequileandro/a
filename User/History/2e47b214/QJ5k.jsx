import React from "react";

const ChatMessage = (props) => {
  return (
    <div>
      <div
        className={`chat-message ${
          props.sender === "user" ? "chat-message--user" : "chat-message--ia"
        }`}
      >
        {props.message}
      </div>
    </div>
  );
};

export default ChatMessage;
