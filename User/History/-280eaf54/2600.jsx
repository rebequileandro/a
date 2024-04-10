import React, { useEffect } from "react";
import "./clinical-simulator.scss";
import { currentUser } from "@/store/slice/user.slice";
import { useSelector } from "react-redux";
import { chat } from "@/store/slice/chat.slice";
import { ChatMessage, TextArea, Button } from "@/components";
import { Robot } from "@/components/SVG";
import { useSendMessageMutation } from "@/store/servicesSlice";
const ClinicalSimulator = () => {
  const chatRef = React.useRef(null);
  const [sendMessage, { isLoading, isError }] = useSendMessageMutation();
  const [message, setMessage] = React.useState("");
  //   const user = useSelector(currentUser);
  const dataChat = useSelector(chat);
  // const dataChat = [];

  const user = {
    fullName: "John Doe",
    // image:
    //   "https://imgs.search.brave.com/gRBc5oFgoJFZr9XF8pN89saNcTrMDIUXrv0v9vFZ_Wo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzQ2Lzk3LzAz/LzM2MF9GXzM0Njk3/MDM3Ml81Vm5jUjRB/YndDTmZVRU8xREty/Z203d1YzVDR1dzhm/ci5qcGc",
  };
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatRef.current]);
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="clinical-simulator">
      {dataChat.length ? (
        <div
          className="clinical-simulator__chat-container scroll-bar"
          ref={chatRef}
        >
          {dataChat?.map((item) => (
            <ChatMessage
              user={user}
              key={item.message}
              sender={item.sender}
              message={item.message}
            />
          ))}
        </div>
      ) : (
        <div className="clinical-simulator__no-message">
          <Robot className="clinical-simulator__no-message-icon" />
          <h3 className="clinical-simulator__no-message-text">
            ¿Cómo puedo ayudarte?
          </h3>
        </div>
      )}
      <form className="clinical-simulator__chat-input">
        <TextArea
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={handleChange}
          disabled={isLoading}
        />
        <div className="clinical-simulator__chat-input__button-container">
          <Button style={{ borderRadius: "1rem" }} size="s">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ClinicalSimulator;
