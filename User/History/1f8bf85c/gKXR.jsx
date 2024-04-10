import { motion } from "framer-motion";

export const Slide = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div />
      <motion.div />
    </>
  );
};
