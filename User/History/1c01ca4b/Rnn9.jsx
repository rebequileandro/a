import "./video-popup.scss";
import polaroid from "../../assets/polaroid.png";
import { motion, AnimatePresence } from "framer-motion";

const VideoPopup = ({ selectedId, setSelectedId }) => {
  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div layoutId={selectedId}>
          <img src={polaroid} alt="" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPopup;
