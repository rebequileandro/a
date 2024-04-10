import React from "react";
import "./recap.scss";
import imageTwo from "../../assets/image-two.png";
import { motion, AnimatePresence } from "framer-motion";
export const Recap = ({ selectedId, setSelectedId }) => {
  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="recap--overlay"
        >
          <motion.div layoutId={selectedId} className="recap">
            <button className="recap__exit" onClick={() => setSelectedId(null)}>
              X
            </button>
            <motion.img
              className="section-two__image-two"
              src={imageTwo}
              alt="bzrp"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
