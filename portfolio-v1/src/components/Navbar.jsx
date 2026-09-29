import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-500 text-white shadow-md">
      <nav className="flex items-center justify-between px-6 sm:px-10 py-4 sm:py-5">
        <div>
          <a
            className="text-xl sm:text-2xl text-yellow-200 font-bold hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
            href="/"
            onClick={closeMenu}
          >
            HYMENSHU
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center gap-8 lg:gap-10 font-medium">
          <a
            className="hover:text-yellow-200 hover:scale-110 transition-all duration-300"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:text-yellow-200 hover:scale-110 transition-all duration-300"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="hover:text-yellow-200 hover:scale-110 transition-all duration-300"
            href="#project"
          >
            Project
          </a>
          <a
            className="hover:text-yellow-200 hover:scale-110 transition-all duration-300"
            href="#contact"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none p-2 rounded hover:bg-pink-600 transition"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-600 border-t border-pink-400 px-6 py-4 flex flex-col gap-3 font-medium shadow-inner">
          <a
            className="py-2 hover:text-yellow-200 border-b border-pink-500/60 transition"
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            className="py-2 hover:text-yellow-200 border-b border-pink-500/60 transition"
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            className="py-2 hover:text-yellow-200 border-b border-pink-500/60 transition"
            href="#project"
            onClick={closeMenu}
          >
            Project
          </a>
          <a
            className="py-2 hover:text-yellow-200 transition"
            href="#contact"
            onClick={closeMenu}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

