"use client";

import React, { useState } from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import CircularProgress from "@mui/material/CircularProgress";
import Countdown from "../main/Countdown";
import EventStarts from "../main/EventStarts";
import mainLogo from "../assets/main.png";
import DailogBox from "../sub/DailogBox";
import Image from "next/image";
import Main from "./Main";

const HeroContent = () => {
  const launchDate = new Date("2024-02-17T00:00:00Z");
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoad, setIsLoad] = useState(true); // State to manage loading

  // Simulating loading delay
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  setTimeout(() => {
    setIsLoad(false);
  }, 1000);

  const handleLoad = () => {
    setLoaded(true);
    <CircularProgress />;
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center md:flex-row items-center mt-20 w-full"
    >
      <div
        className="flex flex-col justify-center md:flex-row items-center text-center"
        suppressHydrationWarning
      >
        <Image
          src={mainLogo}
          alt="work icons"
          className="w-[540px] md:w-[700px]"
          onLoad={() => <CircularProgress />}
        />

        {/* {loaded ? (
          
        ) : (
          <CircularProgress />
        )} */}

        <motion.div className="text-lg text-gray-400 my-5 mx-20 flex flex-col items-center">
          <div className="max-w-screen-lg mx-auto">
            <Suspense fallback={<CircularProgress />}>
              <img
                src="/xploits24logo.png"
                alt="xploits logo"
                className="w-96 my-8 md:w-full h-auto"
              />
              {/* <p className="text-lg text-gray-400">
              National Level Technical Symposium ⚜️
            </p> */}
            </Suspense>

            <div>
              {isLoading ? (
                <CircularProgress /> // Show loading component if isLoading is true
              ) : (
                <motion.div
                  variants={slideInFromRight(0.5)}
                  className="gap-6 mt-6 text-2xl text-white max-w-[600px] w-auto h-auto"
                >
                  <p className="text-lg text-gray-400 my-8">
                    ⚜️The Department Of Information Technology⚜️
                  </p>

                  <span className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-purple-500 to-cyan-500">
                    Event Date:{" "}
                  </span>
                  <span style={{ font: "" }} className="font-bold">
                    17 February 2024
                  </span>
                  <Countdown />
                  <motion.div
                    variants={slideInFromRight(0.5)}
                    className="flex-col mt-10 font-bold text-white w-auto h-auto z-[50]"
                  >
                    <DailogBox />
                    <motion.a
                      variants={slideInFromLeft(1)}
                      className="p-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[400px] mx-3"
                      href="#events"
                    >
                      Events!
                    </motion.a>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
