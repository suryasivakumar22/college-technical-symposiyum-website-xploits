import React from "react";
import HeroContent from "../sub/HeroContent";
import { Suspense } from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-row h-full w-full" id="home">
      <HeroContent />
    </div>
  );
};

export default Hero;
