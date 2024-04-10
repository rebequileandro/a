import { useSelector } from "react-redux";
import "./chat.scss";
import { chat } from "redux/slices/chat.slice";
import ChatBox from "components/ChatBox/ChatBox";
import { useEffect, useRef } from "react";

const Chat = () => {
  const chatRef = useRef();
  const getChat = useSelector(chat);
  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [getChat]);

  return (
    <div className="chat-container" ref={chatRef}>
      {getChat.length ? (
        getChat?.map((data, index) => (
          <ChatBox
            key={data._id + index}
            data={data}
            next={getChat[index + 1]}
          />
        ))
      ) : (
        <p className="chat-container__empty">No hay mensajes</p>
      )}
    </div>
  );
};

export default Chat;
