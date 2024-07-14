"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import hover3d from "../../utils/hover";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
}

const EventCard = ({ src, title }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const arr = title.split(" ", 2);
  const tag = arr[0].toLowerCase();

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  const hero = useRef<HTMLDivElement>(null);

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });
  return (
    <Link href="/paper">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer group"
        onMouseEnter={handleFlip}
        onMouseLeave={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
            style={{
              transform: imageHover.transform,
            }}
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>

          <div className="relative p-4">
            <h1 className="text-xl font-semibold text-white">{title}</h1>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default EventCard;
