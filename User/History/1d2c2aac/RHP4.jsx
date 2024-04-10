import "./chat-box.scss";
import audioLine from "assets/line.svg";
const ChatBox = ({ data, next }) => {
  const hour = (hour) => {
    return new Date(hour).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <div
      className={`chatbox-wrapper chatbox-wrapper--${
        data.role === "user" ? "right" : "left"
      }`}
    >
      <div
        className={`chatbox chatbox--${
          data.role === "user"
            ? next?.role === data.role
              ? "sent-prev"
              : "sent"
            : next?.role === data.role
            ? "answer-prev"
            : "answer"
        }`}
      >
        {data?.typeContent === "audio" ? (
          <div className="chatbox__audio-wrapper">
            <img src={audioLine} alt="audio" />
            <button>Ver transcripción</button>
          </div>
        ) : (
          <p>{data.content}</p>
        )}
        <p className="hour">{hour(data.timestamp)}</p>
      </div>
    </div>
  );
};

export default ChatBox;
