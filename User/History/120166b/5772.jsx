import React, { useEffect } from "react";
import "./recap.scss";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../models/data";
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
            <div className="recap__header">
              <h3>{`'${selectedId}`}</h3>
              <button
                className="recap__exit"
                onClick={() => setSelectedId(null)}
              >
                X
              </button>
            </div>
            <div>
              {data?.recap[`images${selectedId}`]?.map((image, i) => (
                <img src={image} alt={`resumen-${selectedId}-${i}`} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
