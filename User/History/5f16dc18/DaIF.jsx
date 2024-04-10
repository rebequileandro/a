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
import rec from "assets/rec.svg";

const Home = () => {
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
  };
  // const audioRecording = (e) => {
  //   e.preventDefault();
  //   console.log("grabando...");
  // };
  // const uploadAudio = (e) => {
  //   e.preventDefault();
  //   console.log("stop...");
  // };
  useEffect(() => {
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const playButton = document.getElementById("play");
    let output = document.getElementById("output");
    let audioRecorder;
    let audioChunks = [];
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        // Initialize the media recorder object
        audioRecorder = new MediaRecorder(stream);

        // dataavailable event is fired when the recording is stopped
        audioRecorder.addEventListener("dataavailable", (e) => {
          audioChunks.push(e.data);
        });

        // start recording when the start button is clicked
        startButton.addEventListener("click", () => {
          audioChunks = [];
          audioRecorder.start();
          output.innerHTML = "Recording started! Speak now.";
        });

        // stop recording when the stop button is clicked
        stopButton.addEventListener("click", () => {
          audioRecorder.stop();
          output.innerHTML =
            "Recording stopped! Click on the play button to play the recorded audio.";
        });

        // play the recorded audio when the play button is clicked
        playButton.addEventListener("click", () => {
          const blobObj = new Blob(audioChunks, { type: "audio/webm" });
          const audioUrl = URL.createObjectURL(blobObj);
          const audio = new Audio(audioUrl);
          audio.play();
          output.innerHTML = "Playing the recorded audio!";
        });
      })
      .catch((err) => {
        // If the user denies permission to record audio, then display an error.
        console.log("Error: " + err);
      });
  }, []);

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
              id="start"
              type="button"
              className="btn btn--secondary home__form__btn"
              // onContextMenuCapture={audioRecording}
              // onMouseDown={audioRecording}
              // onMouseUp={uploadAudio}
            >
              start
              {/* <img src={rec} alt="rec" className="home__form__btn--rec-img" /> */}
            </button>
            <button
              id="play"
              type="button"
              className="btn btn--secondary home__form__btn"
              // onContextMenuCapture={audioRecording}
              // onMouseDown={audioRecording}
              // onMouseUp={uploadAudio}
            >
              play
              {/* <img src={rec} alt="rec" className="home__form__btn--rec-img" /> */}
            </button>
            <button
              id="stop"
              type="button"
              className="btn btn--secondary home__form__btn"
              // onContextMenuCapture={audioRecording}
              // onMouseDown={audioRecording}
              // onMouseUp={uploadAudio}
            >
              stop
              {/* <img src={rec} alt="rec" className="home__form__btn--rec-img" /> */}
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
