import "./video-popup.scss";
import Video from "../Video/Video";
const VideoPopup = ({ isOpen, IsClose }) => {
  return (
    <>
      {isOpen && (
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="video-popup--overlay"
        >
          <div className="video-popup--overlay-close" onClick={IsClose} />
          <div className="video-popup__container">
            <Video
              light
              videoProps={{
                src: "https://bzrpbucket.s3.us-east-2.amazonaws.com/tour-recap.mp4",
                autoPlay: true,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
