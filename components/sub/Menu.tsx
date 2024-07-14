import React from "react";

const Menu = () => {
  return (
    <div className="z-[50]">
      <div className="md:hidden w-full mt-4 mb-12 z-50">
        <div className="flex flex-col items-center bg-[#0300145e] rounded-md text-gray-200">
          <a href="#home" className="py-2">
            Home
          </a>

          <a href="#events" className="py-2">
            Events
          </a>
          <a href="#contact" className="py-2">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
