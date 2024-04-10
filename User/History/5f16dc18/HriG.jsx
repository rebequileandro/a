import { useEffect, useRef, useState } from "react";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { chat, setChat, updateChat } from "redux/slices/chat.slice";
import { TextArea } from "components";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import CardPopup from "./components/CardPopup/CardPopup";
import { getChat, sendMessagge } from "./services/home.services";
import { currentUser } from "redux/slices/user.slice";

import FormMessage from "./components/FormMessage/FormMessage";
const Home = () => {
  const chatRef = useRef();
  const getUser = useSelector(currentUser);
  const dispatch = useDispatch();

  const [popupCard, setpopupCard] = useState(false);
  const [status, setStatus] = useState("Online");
  const [dataPay, setDataPay] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getChat(
        "65247a59713ae1069ace33c6"
        // getUser._id
      );
      dispatch(setChat(result.data));
    })();
  }, []);

  return (
    <main className="home">
      <Header name="MetaBot" status={status} />
      <Chat user={getUser} chatRef={chatRef} />
      <FormMessage
        chatRef={chatRef}
        setStatus={setStatus}
        setDataPay={setDataPay}
        setpopupCard={setpopupCard}
        status={status}
      />
      <CardPopup
        dataPay={dataPay}
        isOpen={popupCard}
        setIsOpen={setpopupCard}
      />
    </main>
  );
};

export default Home;
