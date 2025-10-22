



import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Active page underline only, text always visible
  const linkClass = ({ isActive }) =>
    `pb-1 border-b-2 text-gold transition duration-300 ${
      isActive ? "border-gold" : "border-transparent hover:border-gold"
    }`;

  return (
    <nav className="fixed w-full z-50 bg-black shadow-md">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4">
        
        {/* Logo pinned hard-left */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={assets.logo}
              className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44"
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Desktop Menu pinned right with underline on active */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-16 text-base lg:text-lg font-serif mt-2 pr-8">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About Us</NavLink></li>
        {/*}  <li><NavLink to="/project" className={linkClass}>Projects</NavLink></li>*/}
          <li><NavLink to="/properties" className={linkClass}>Properties</NavLink></li>
          <li><NavLink to="/blog" className={linkClass}>Blogs</NavLink></li>
          <li><NavLink to="/contactus" className={linkClass}>Contact Us</NavLink></li>
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-gold text-2xl cursor-pointer pr-4"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
          
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-black text-gold overflow-hidden transition-all duration-300 ${
          isOpen ? "h-auto py-4" : "h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 mt-2">
          <li><NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>About Us</NavLink></li>
       {/*}   <li><NavLink to="/project" className={linkClass} onClick={() => setIsOpen(false)}>Projects</NavLink></li>*/}
          <li><NavLink to="/properties" className={linkClass} onClick={() => setIsOpen(false)}>Properties</NavLink></li>
          <li><NavLink to="/blog" className={linkClass} onClick={() => setIsOpen(false)}>Blogs</NavLink></li>
          <li><NavLink to="/contactus" className={linkClass} onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;








