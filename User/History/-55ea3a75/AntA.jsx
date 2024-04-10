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
        d="M208.867 1.73321C208.067 2.26655 206.733 3.99988 205.933 5.59988C203.667 9.73322 203.667 710.8 205.8 713.467C206.6 714.533 209.267 715.333 211.667 715.333C215.4 715.333 217.533 713.6 227.667 703.067C234.067 696.267 250.467 679.2 264.2 665.333C277.8 651.333 296.467 632.133 305.667 622.667C314.733 613.067 332.2 595.067 344.333 582.667C356.467 570.133 379.267 546.4 395 530C410.733 513.6 434.2 489.333 447 476.267C476.333 446.133 477.267 445.2 514.333 406.667C531.267 389.2 549.533 370.267 555 364.667C563.533 355.867 575.4 343.467 617.533 299.467C621.4 295.333 634.867 281.467 647.4 268.667C659.933 255.867 680.733 234.533 693.533 221.333C736.067 177.867 743.667 169.067 743.267 164.933C743 162.933 742.2 160.533 741.4 159.733C740.333 158.4 718.867 158 648.2 157.733C587.267 157.467 556.067 156.933 555.133 156C554.2 155.067 556.467 151.6 562.733 145.2C567.667 140.133 581.933 125.2 594.333 112.133C618.333 86.9332 632.067 72.7999 661.533 42.6666C671.533 32.3999 682.067 21.4665 684.867 18.2665C690.867 11.7332 691.533 6.66655 687 3.06655C684.2 0.799881 673.8 0.666548 447.133 0.666548C316.867 0.666548 209.667 1.19988 208.867 1.73321ZM657 17.9999C659 18.7999 660.333 20.1332 660.067 21.1999C659.8 22.2665 649.8 33.3332 637.667 45.5999C625.533 57.9999 605.8 78.3999 593.667 91.1999C581.533 103.867 561.267 124.933 548.733 137.867C530.333 156.533 525.667 162.133 525.667 164.933C525.667 167.2 526.6 169.067 528.2 170C529.933 170.8 561.667 171.333 622.067 171.333C702.333 171.333 713.533 171.6 715 173.333C716.467 175.067 714.2 177.867 700.2 192.267C691.133 201.467 682.733 210 681.667 211.2C680.6 212.533 668.867 224.533 655.667 238.133C635 259.333 611.133 284.4 583.267 313.867C579.267 318 558.6 339.333 537.267 361.2C468.467 431.867 451.8 449.067 439.667 461.867C433 468.8 422.333 480 415.667 486.667C409.133 493.467 399.267 503.6 393.8 509.467C384.867 519.067 346.2 558.933 282.2 624.667C269 638.267 253.133 654.667 246.867 661.333C221.267 688.533 222.067 687.867 220.467 684.8C218.467 681.2 218.467 22.9332 220.333 19.1999C221.8 16.6665 225.533 16.6665 437.667 16.6665C578.733 16.6665 654.733 17.0665 657 17.9999Z"
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
