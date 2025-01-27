import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/eboard", label: "E-Board" },
    { path: "/join", label: "Join Us" },
  ];

  return (
    <nav
      className={
        isOpen
          ? "bg-blue-900 text-white fixed w-full z-50 shadow-lg"
          : "bg-blue-900 text-white fixed w-full z-50"
      }
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="/AUVsockpuppetNoText.png"
              alt="USC AUV Logo"
              className="w-8 h-8 text-white invert"
            />
            <span className="font-bold text-xl">USC AUV</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-blue-300 transition-colors ${
                    isActive ? "text-blue-300" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="w-px h-6 bg-white"></div>
            <a
              href="https://github.com/usc-robosub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 transition-all duration-500 ease-in-out">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 hover:text-blue-300 transition-colors ${
                    isActive ? "text-blue-300" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="my-4 border-t border-white w-12"></div>
            <a
              href="https://github.com/usc-robosub"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 hover:text-blue-300 transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
