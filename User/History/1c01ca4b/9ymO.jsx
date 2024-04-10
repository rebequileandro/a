import "./video-popup.scss";
import polaroid from "../../assets/polaroid.png";
import { motion, AnimatePresence } from "framer-motion";
import video from "../../assets/videoplayback.mp4";
const VideoPopup = ({ selectedId, setSelectedId }) => {
  console.log(selectedId);
  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="video-popup--overlay"
        >
          <div
            className="video-popup--overlay-close"
            onClick={() => setSelectedId(null)}
          />
          <motion.div layoutId={selectedId} className="video-popup__container">
            {/* <img
              src={polaroid}
              alt="polaroid"
              className="video-popup__container__image"
            /> */}
            <video
              src={video}
              controls
              className="video-popup__container__video"
              playsInline
              webkit-playsinline
              controlslist="nodownload"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPopup;
