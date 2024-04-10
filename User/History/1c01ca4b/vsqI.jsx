import "./video-popup.scss";
import polaroid from "../../assets/polaroid.png";
import { motion, AnimatePresence } from "framer-motion";

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
            className="polaroid-popup--overlay-close"
            onClick={() => setSelectedId(null)}
          />
          <motion.div layoutId={selectedId}>
            <img src={polaroid} alt="" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPopup;
