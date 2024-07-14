"use client";
import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { IoIosCall, IoIosMail } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="z-[20]">
      <div className="flex flex-col items-center justify-center" id="contact">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 md:py-20 text-center">
          Contact Us
        </h1>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-20 pb-10">
        <div className="mb-8 md:mb-0 md:mr-10">
          <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4 md:py-8 text-center md:text-left">
            Did we miss anything?
          </h1>
          <div className="flex items-center mb-4">
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p className="text-white text-lg ml-4">
              President - Jeffrin Joel Raj - 73055 02702
            </p>
          </div>

          <div className="flex items-center mb-4">
            <IoIosCall style={{ color: "white", fontSize: "24px" }} />
            <p className="text-white text-lg ml-4">
              Secretary - Subhalakshmi - 73393 12067
            </p>
          </div>

          <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4 md:py-8 text-center md:text-left">
            Reach us at
          </h1>

          <div className="flex items-center">
            <IoIosMail style={{ color: "white", fontSize: "24px" }} />
            <p className="text-white text-lg ml-4">xploits2k24@gmail.com</p>
          </div>
        </div>

        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2681026238643!2d80.03873787496569!3d12.825944187476196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d79722631%3A0x49afcd4648f94894!2sSRM%20Valliammai%20Engineering%20College!5e0!3m2!1sen!2sin!4v1705665111772!5m2!1sen!2sin"
            width="400"
            height="400"
            style={{ border: "0px", borderRadius: "25px" }}
            loading="lazy"
            className="mt-8 w-[400px] md:mt-0 md:w-[500px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
