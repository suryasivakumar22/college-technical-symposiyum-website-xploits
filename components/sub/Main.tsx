import React from "react";
import Image from "next/image";
import mainLogo from "../assets/main.png";

const Main = () => {
  return (
    <div className="z-[-10]">
      <Image
        src={mainLogo}
        alt="work icons"
        className="w-[540px] md:w-[700px]"
      />
    </div>
  );
};

export default Main;
