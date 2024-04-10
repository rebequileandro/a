import { useDispatch, useSelector } from "react-redux";
import "./form-message.scss";
import useAudioRecorder from "hooks/useAudioRecorder";
import send from "assets/send.svg";
import recIcon from "assets/rec.svg";
import arrowIcon from "assets/arrow.svg";
import { TextArea } from "components";
import { updateChat, updateChatVoice } from "redux/slices/chat.slice";
import { useEffect, useRef, useState } from "react";
import { currentUser } from "redux/slices/user.slice";
import {
  sendMessagge,
  sendVoiceMessagge,
} from "pages/Home/services/home.services";
import { formatTime } from "utilities/formatTimer";
import OptionPopup from "components/OptionPopup/OptionPopup";

const FormMessage = ({
  chatRef,
  setStatus,
  status,
  setDataPay,
  setpopupCard,
}) => {
  const dispatch = useDispatch();
  const getUser = useSelector(currentUser);
  const [isOpenOptionpopup, setIsOpenOptionpopup] = useState(false);

  const { audioChunks, setAudioChunks, startRecording, stopRecording } =
    useAudioRecorder();
  const recRefBtn = useRef(null);
  const formRef = useRef(null);
  const initialState = {
    role: "user",
    content: "",
    timestamp: "",
    _id: `${new Date().getTime()}`,
  };
  const [input, setInput] = useState(initialState);
  const [rec, setRec] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [slide, setSlide] = useState(0);
  const [recorded, setRecorded] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, content: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.content.length) {
      dispatch(updateChat({ ...input, timestamp: new Date().toISOString() }));
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
      setInput(initialState);
      setStatus("Investigando...");
      let timer = setTimeout(() => {
        setStatus("Escribiendo...");
      }, 2000);
      const result = await sendMessagge({
        prompt: input.content,
        userId: getUser._id,
        typeContent: "text",
      });
      if (result?.status === 200) {
        if (result.data?.content?.length) {
          dispatch(updateChat(result.data));
        }
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
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  };

  useEffect(() => {
    const halfWidth = formRef.current?.clientWidth / 2;
    let start;
    let recTimer = 0;
    let timerInterval;
    let touchMove = false;
    const touchstart = (e) => {
      touchMove = true;
      navigator.vibrate(50);
      recRefBtn.current?.classList.add("chat-form__recording");
      setRec(true);
      start = e.targetTouches[0].clientX;

      startRecording();
      timerInterval = setInterval(() => {
        recTimer++;
        setSecondsElapsed(recTimer);
      }, 1000);
    };

    const touchmove = (e) => {
      if (touchMove) {
        if (
          e.targetTouches[0].clientX - start < 0 &&
          e.targetTouches[0].clientX - start < -20 &&
          e.targetTouches[0].clientX - start >
            -(formRef.current?.clientWidth * 0.7)
        ) {
          setSlide(e.targetTouches[0].clientX - start);
        }
        if (e.targetTouches[0].clientX - start < -halfWidth) {
          touchMove = false;
          recRefBtn.current?.classList.remove("chat-form__recording");
          navigator.vibrate(50);
          setRec(false);
          clearInterval(timerInterval);
          recTimer = 0;
          timerInterval = undefined;
          setSecondsElapsed(0);
          setSlide(0);
          stopRecording();
        }
      }
    };
    const touchend = (e) => {
      if (touchMove) {
        recRefBtn.current?.classList.remove("chat-form__recording");
        setRec(false);
        clearInterval(timerInterval);
        recTimer = 0;
        timerInterval = undefined;
        navigator.vibrate(50);
        stopRecording();
        setSlide(0);
        touchMove = false;
        if (e.changedTouches[0].clientX - start > -halfWidth) {
          setRecorded(true);
        } else {
          setSecondsElapsed(0);
        }
      }
    };
    if (formRef.current && recRefBtn.current) {
      recRefBtn.current?.addEventListener("touchstart", touchstart);
      recRefBtn.current?.addEventListener("touchmove", touchmove);
      recRefBtn.current?.addEventListener("touchend", touchend);
    }
  }, [formRef.current, recRefBtn.current, status]);

  const handleSubmitVoiceMessage = async () => {
    if (recorded && status === "Online") {
      setRecorded(false);
      let lastvoiceMessage = input._id;
      dispatch(
        updateChat({
          ...input,
          _id: lastvoiceMessage,
          typeContent: "voice",
          timeVoice: formatTime(secondsElapsed),
        })
      );
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      setStatus("Investigando...");
      let timer = setTimeout(() => {
        setStatus("Escribiendo...");
      }, 2000);
      const result = await sendVoiceMessagge(
        audioBlob,
        getUser._id,
        formatTime(secondsElapsed)
      );
      if (result?.status === 200) {
        dispatch(
          updateChatVoice({ data: result.data, idChat: lastvoiceMessage })
        );
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
      setAudioChunks([]);
      setSecondsElapsed(0);
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    if (audioChunks.length && recorded) {
      handleSubmitVoiceMessage();
    }
  }, [audioChunks.length, recorded]);

  return (
    <>
      <form className="chat-form" onSubmit={handleSubmit} ref={formRef}>
        {!rec ? (
          <TextArea
            placeholder="Escribe un mensaje..."
            value={input.content}
            onChange={handleChange}
            disabled={status !== "Online"}
          />
        ) : (
          <div className="chat-form__rec-info">
            <div className="chat-form__rec-info__rec-light" />
            <span className="chat-form__rec-info__timer">
              {formatTime(secondsElapsed)}
            </span>
            <div className="chat-form__rec-info__cancel">
              <img
                src={arrowIcon}
                alt="arrow"
                className="chat-form__rec-info__cancel--icon"
              />
              <span className="chat-form__rec-info__cancel--text">
                Desliza para cancelar
              </span>
            </div>
          </div>
        )}
        {input.content.length ? (
          <div className="chat-form__btn-container">
            <button
              key={1231}
              type="submit"
              className="btn btn--secondary chat-form__btn"
            >
              <img src={send} alt="send" className="chat-form__btn--send-img" />
            </button>
          </div>
        ) : (
          <div
            className="chat-form__btn-container"
            style={{ transform: `translateX(${slide}px)` }}
          >
            {status === "Online" ? (
              <button
                key={1991}
                ref={recRefBtn}
                type="button"
                className="btn btn--secondary chat-form__btn"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src={recIcon}
                  alt="rec"
                  className="chat-form__btn--rec-img"
                />
              </button>
            ) : (
              <button
                key={19391}
                type="button"
                className="btn btn--secondary chat-form__btn--disabled"
                onContextMenu={(e) => e.preventDefault()}
                disabled
              >
                <img
                  src={recIcon}
                  alt="rec"
                  className="chat-form__btn--rec-img"
                />
              </button>
            )}
          </div>
        )}
      </form>
      <OptionPopup
        isOpen={isOpenOptionpopup}
        setIsOpen={setIsOpenOptionpopup}
      />
    </>
  );
};

export default FormMessage;
