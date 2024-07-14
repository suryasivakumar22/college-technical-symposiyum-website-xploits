"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../sub/Menu";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[85px] top-0  backdrop-blur-md z-[50] px-7">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[5px]">
        <a href="#home" className="h-auto w-auto flex items-center">
          <span className="flex justify-center">
            <img
              src="/veclogo.png"
              alt="college logo"
              className="w-[600px] mt-10"
            />
          </span>
        </a>

        <div className="hidden md:flex w-[500px] items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-0 bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#home" className="cursor-pointer">
              Home
            </a>

            <a href="#events" className="cursor-pointer">
              Events
            </a>

            <a href="#contact" className="cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="mt-8 md:hidden md:z-[80]">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10 w-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && <Menu />} */}
    </div>
  );
};

export default Navbar;
