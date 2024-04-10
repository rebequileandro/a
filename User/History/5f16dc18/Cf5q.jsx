import { useEffect, useState } from "react";
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
  const { audioChunks, startRecording, stopRecording } = useAudioRecorder();
  const [rec, setRec] = useState(false);
  const getUser = useSelector(currentUser);
  const dispatch = useDispatch();
  const initialState = {
    role: "user",
    content: "",
    timestamp: "",
    _id: `${new Date().getTime()}`,
  };
  const [input, setInput] = useState(initialState);
  const [popupCard, setpopupCard] = useState(false);
  const [status, setStatus] = useState("Online");
  const [dataPay, setDataPay] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getChat(getUser._id);
      dispatch(setChat(result.data));
    })();
  }, []);
  const handleChange = (e) => {
    setInput({ ...input, content: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.content.length) {
      dispatch(updateChat(input));
      setInput(initialState);
      setStatus("Investigando...");
      let timer = setTimeout(() => {
        setStatus("Escribiendo...");
      }, 2000);
      const result = await sendMessagge({
        prompt: input.content,
        userId: getUser._id,
      });
      console.log(result);
      if (result?.status === 200) {
        dispatch(updateChat(result.data));
        clearTimeout(timer);
        setStatus("Online");
      } else if (result?.response?.status === 403) {
        clearTimeout(timer);
        setDataPay(result?.response.data);
        setTimeout(() => {
          setStatus("Online");
          setpopupCard(true);
        }, 1000);
      }
    }
  };
  const recording = () => {
    if (!rec) {
      setRec(true);
      startRecording();
    } else {
      stopRecording();
      setRec(false);
    }
  };
  return (
    <div className="home">
      <Header name="MetaBot" status={status} />
      <Chat />
      <form className="home__form" onSubmit={handleSubmit}>
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
      </form>
      <CardPopup
        dataPay={dataPay}
        isOpen={popupCard}
        setIsOpen={setpopupCard}
      />
    </div>
  );
};

export default Home;
