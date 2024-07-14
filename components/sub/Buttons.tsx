import React from "react";
import DailogBox from "../sub/DailogBox";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Buttons = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center mt-20 w-full z-[70]"
    >
      <motion.div
        variants={slideInFromRight(0.5)}
        className="flex-col mt-3 font-bold text-white w-auto h-auto"
      >
        <DailogBox />
        <motion.a
          variants={slideInFromLeft(1)}
          className="p-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[400px] mx-3"
          href="#events"
        >
          Explore More!
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Buttons;
