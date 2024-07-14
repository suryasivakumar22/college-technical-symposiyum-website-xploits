"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import LaunchTimer from "../sub/LaunchTimer";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Countdown = () => {
  const launchDate = new Date("2024-02-17T00:00:00Z");

  return (
    <div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex gap-6 mt-10 text-3xl font-bold text-white container mx-auto sm:max-w-screen-sm md:max-w-screen-md md:text-6xl lg:max-w-screen-lg xl:max-w-screen-xl"
      >
        <LaunchTimer launchDate={launchDate} />
      </motion.div>

      {/* <motion.a
        variants={slideInFromLeft(1)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        Register
      </motion.a> */}
    </div>
  );
};

export default Countdown;
