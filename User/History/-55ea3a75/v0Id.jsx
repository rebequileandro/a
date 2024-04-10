import React from "react";
import "./logo.scss";
import { motion } from "framer-motion";

const Logo = ({ glow, logoOut }) => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1120 980"
      className={`logo_animation ${glow && "logo_animation--glow"}`}
      width="1120"
      height="980"
    >
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        className={logoOut && "logo_animation__logo-out-1"}
        transition={{
          default: { duration: 4, ease: "easeInOut" },
          fill: { duration: 4, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        className={logoOut && "logo_animation__logo-out-1"}
        transition={{
          default: { duration: 4, ease: "easeInOut" },
          fill: { duration: 4, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        className={logoOut && "logo_animation__logo-out-1"}
        transition={{
          default: { duration: 4, ease: "easeInOut" },
          fill: { duration: 4, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        className={logoOut && "logo_animation__logo-out-2"}
        transition={{
          default: { duration: 4, ease: "easeInOut" },
          fill: { duration: 4, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        className={logoOut && "logo_animation__logo-out-3"}
        transition={{
          default: { duration: 4, ease: "easeInOut" },
          fill: { duration: 4, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        className={logoOut && "logo_animation__logo-out-3"}
        transition={{
          default: { duration: 4, ease: "easeInOut" },
          fill: { duration: 4, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        className={logoOut && "logo_animation__logo-out-4"}
        transition={{
          default: { duration: 4, ease: "easeInOut" },
          fill: { duration: 4, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  );
};

export default Logo;
