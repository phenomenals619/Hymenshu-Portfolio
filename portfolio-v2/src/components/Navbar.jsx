import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#project" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-pink-500 text-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-10 py-4 max-w-7xl mx-auto">
        <div>
          <a
            className="text-xl sm:text-2xl text-yellow-200 font-bold hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
            href="/"
            onClick={closeMenu}
          >
            HYMENSHU
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="hover:text-yellow-200 hover:scale-110 transition-all duration-300"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white hover:text-yellow-200 focus:outline-none p-2 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-600/95 backdrop-blur-sm border-t border-pink-400/40 px-6 py-4 flex flex-col gap-3 shadow-xl transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-white hover:text-yellow-200 text-lg font-medium py-2 px-2 rounded-md hover:bg-pink-700/50 transition-colors"
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

