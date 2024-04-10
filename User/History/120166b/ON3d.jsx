import React from "react";
import "./recap.scss";
import imageTwo from "../../assets/image-two.png";
import { motion, AnimatePresence } from "framer-motion";
export const Recap = ({ selectedId, setSelectedId }) => {
  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div layoutId={selectedId} className="recap">
          <motion.button onClick={() => setSelectedId(null)} title="x" />
          <img className="section-two__image-two" src={imageTwo} alt="bzrp" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
