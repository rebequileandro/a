import { useSelector } from "react-redux";
import "./chat.scss";
import { chat } from "redux/slices/chat.slice";
import ChatBox from "components/ChatBox/ChatBox";
import { useEffect, useRef, useState } from "react";
import { Loader } from "components";
import { getChat } from "pages/Home/services/home.services";

const Chat = ({ user }) => {
  const chatRef = useRef();
  const allChat = useSelector(chat);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [allChat]);
  const loadMore = async () => {
    setLoading(true);
    const response = await getChat();
    console.log(response);
  };
  return (
    <div className="chat-container" ref={chatRef}>
      <button className="chat-container__load-more" onClick={loadMore}>
        {loading ? <Loader /> : "Ver mensajes anteriores"}
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
