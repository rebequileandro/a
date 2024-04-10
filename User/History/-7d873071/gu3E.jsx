import { useSelector } from "react-redux";
import "./chat.scss";
import { chat } from "redux/slices/chat.slice";
import ChatBox from "components/ChatBox/ChatBox";
import { useEffect, useRef } from "react";
import { Loader } from "components";

const Chat = () => {
  const chatRef = useRef();
  const allChat = useSelector(chat);
  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [allChat]);

  return (
    <div className="chat-container" ref={chatRef}>
      <button className="chat-container__load-more">
        <Loader />
        Ver mensajes anteriores
      </button>
      {allChat.conversation?.length ? (
        allChat?.conversation?.map((data, index) => (
          <ChatBox
            key={`${data.content}-${index}}`}
            data={data}
            next={allChat[index + 1]}
          />
        ))
      ) : (
        <p className="chat-container__empty">No hay mensajes</p>
      )}
    </div>
  );
};

export default Chat;
