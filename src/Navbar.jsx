import { useState } from "react";

const Navbar = ({ currentColor, onColorChange }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
      <div className="flex justify-between ">
        <div className="ml-10">
          <a
            href="#clock"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("clock");
            }}
            className="text-lg font-semibold hover:text-blue-400 transition-colors duration-200 rounded-md px-3 py-1"
          >
            Home
          </a>
        </div>
        <div className="mr-10 flex items-center gap-4">
          <button
            onClick={onColorChange}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md px-3 py-1 mt-1 transition-colors duration-200"
          >
            Change Color
          </button>
          <a
            href="#counter"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("counter");
            }}
            className="text-lg font-semibold hover:text-blue-400 transition-colors duration-200 rounded-md px-3 py-1"
          >
            Counter
          </a>
          <a
            href="#stopwatch"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("stopwatch");
            }}
            className="text-lg font-semibold hover:text-blue-400 transition-colors duration-200 rounded-md px-3 py-1"
          >
            Stopwatch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
