"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { StaticImageData } from "../types";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const router = useRouter();

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images: StaticImageData[] = [one, two, three, four, five];
  const tag = [
    "paperpresentation",
    "mysticode",
    "resqventure",
    "sherlock",
    "boxcricket",
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div>
      <div
        className="flex items-center flex-col justify-center h-screen z-20"
        id="events"
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.src}
            className="rounded-[12px] cursor-pointer border-0 z-20"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.2 }}
            style={{ position: "absolute", width: "650px" }}
            whileHover={{
              filter: "brightness(70%)",
              scale: 1.1,
              cursor: "pointer",
            }}
            onClick={() => {
              const a = `/${tag[index]}`;
              router.push(`${a}`);
            }}
          />
        ))}
        <div className="flex flex-row">
          <button
            className="text-white text-lg font-bold mt-[600px] cursor-pointer rounded-lg z-20 button-primary py-3 px-4 mx-6"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="text-white text-lg font-bold mt-[600px] cursor-pointer rounded-lg z-20 button-primary py-3 px-4 mx-8"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
