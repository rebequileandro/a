import "./video-popup.scss";
import polaroid from "../../assets/polaroid.png";
import { motion, AnimatePresence } from "framer-motion";
import videoSrc from "../../assets/videoplayback.mp4";
import Video from "../Video/Video";
const VideoPopup = ({ selectedId, setSelectedId }) => {
  console.log(selectedId);
  return (
    <>
      {selectedId && (
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="video-popup--overlay"
        >
          <div
            className="video-popup--overlay-close"
            onClick={() => setSelectedId(null)}
          />
          <div className="video-popup__container">
            <Video
              light
              videoProps={{
                src: videoSrc,
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
