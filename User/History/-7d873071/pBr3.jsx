import { useDispatch, useSelector } from "react-redux";
import "./chat.scss";
import { chat, loadMoreMessages } from "redux/slices/chat.slice";
import ChatBox from "components/ChatBox/ChatBox";
import { useEffect, useState } from "react";
import { Loader } from "components";
import { getChat } from "pages/Home/services/home.services";
import AudioWaves from "components/AudioWaves/AudioWaves";

const Chat = ({ user, chatRef }) => {
  const dispatch = useDispatch();
  const allChat = useSelector(chat);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, []);

  const loadMore = async () => {
    setLoading(true);
    const response = await getChat(user._id, parseInt(allChat.currentPage) + 1);
    setLoading(false);
    if (response.status === 200) {
      dispatch(loadMoreMessages(response.data));
    } else {
      setError("No hay mensajes anteriores");
    }
  };

  return (
    <div className="chat-container" ref={chatRef}>
      {error ? (
        <p className="chat-container__empty">{error}</p>
      ) : (
        allChat.conversation?.length > 10 && (
          <button className="chat-container__load-more" onClick={loadMore}>
            {loading ? <Loader /> : "Ver mensajes anteriores"}
          </button>
        )
      )}
      {allChat.conversation?.length ? (
        allChat?.conversation?.map((data, index) =>
          data?.audioChunks?.length ? (
            <AudioWaves audioChunks={data?.audioChunks} />
          ) : (
            <ChatBox
              key={`${data.content}-${index}}`}
              data={data}
              next={allChat[index + 1]}
            />
          )
        )
      ) : (
        <p className="chat-container__empty">No hay mensajes</p>
      )}
    </div>
  );
};

export default Chat;
