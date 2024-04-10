import { useEffect, useRef, useState } from "react";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { chat, setChat, updateChat } from "redux/slices/chat.slice";
import chatDate from "./datachat.json";
import { TextArea } from "components";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import CardPopup from "./components/CardPopup/CardPopup";
import { getChat, sendMessagge } from "./services/home.services";
import { currentUser } from "redux/slices/user.slice";
import send from "assets/send.svg";
import recIcon from "assets/rec.svg";
import useAudioRecorder from "hooks/useAudioRecorder";
import stopIcon from "assets/stop.svg";
const Home = () => {
  const chatRef = useRef();
  const getUser = useSelector(currentUser);
  const dispatch = useDispatch();

  const [popupCard, setpopupCard] = useState(false);
  const [status, setStatus] = useState("Online");
  const [dataPay, setDataPay] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getChat(getUser._id);
      dispatch(setChat(result.data));
    })();
  }, []);

  return (
    <div className="home">
      <Header name="MetaBot" status={status} />
      <Chat user={getUser} chatRef={chatRef} />
      {/* <form className="home__form" onSubmit={handleSubmit}>
        <TextArea
          placeholder="Escribe un mensaje..."
          value={input.content}
          onChange={handleChange}
        />
        {input.content.length ? (
          <button type="submit" className="btn btn--secondary home__form__btn">
            <img src={send} alt="send" className="home__form__btn--send-img" />
          </button>
        ) : (
          <>
            <button
              type="button"
              className="btn btn--secondary home__form__btn"
              onClick={recording}
            >
              <img
                src={!rec ? recIcon : stopIcon}
                alt="rec"
                className="home__form__btn--rec-img"
              />
            </button>
          </>
        )}
      </form> */}
      <CardPopup
        dataPay={dataPay}
        isOpen={popupCard}
        setIsOpen={setpopupCard}
      />
    </div>
  );
};

export default Home;
