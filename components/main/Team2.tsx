"use client";

import React, { useState, useEffect } from "react";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Team from "./Team";

import "./Carousel.css";
import Card from "@/components/sub/Card";

const Team2 = () => {
  const [slide, setSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  ); // Adjust the breakpoint as needed

  const data = [
    {
      src: "/jeff.png",
      title: "Jeffrin Joel Raj",
      description: "President",
    },
    {
      src: "/subha.png",
      title: "Subhalakshmi",
      description: "Secretary",
    },
    {
      src: "/lok.jpg",
      title: "Lokesh",
      description: "Vice President",
    },
    {
      src: "/charan.png",
      title: "Charan",
      description: "Joint Secretary",
    },
    {
      src: "/san.png",
      title: "Sanjana",
      description: "Treasurer",
    },
  ];

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const handleResize = () => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  if (!isMobile) {
    return <Team />;
  }

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col items-center justify-center h-full my-40 mx-20">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          Team
        </h1>
        <div className="carousel">
          <BsArrowLeftCircleFill
            onClick={prevSlide}
            className="arrow arrow-left"
          />
          {data.map((item, idx) => {
            return (
              <div
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
                style={{ width: "400px" }}
              >
                <Card
                  src={item.src}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
          <BsArrowRightCircleFill
            onClick={nextSlide}
            className="arrow arrow-right"
          />
          <span className="indicators">
            {data.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team2;
