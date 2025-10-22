

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaEnvelope, FaPhone, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative text-white bg-white w-full ">
      <footer className="bg-gray-900 h-auto text-white px-6 py-8">
        {/* Top Row: Follow Us */}
        <div className="flex justify-end items-center space-x-4 md:mx-[150px] mb-6">
          <span className="text-lg font-semibold">Follow Us:</span>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/dolcevillasrealestate" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://www.youtube.com/channel/UCEwOKYmiMD3gyaKxzcNXgQw" className="hover:text-blue-400"><FaYoutube /></a>
           
            <a href="https://www.instagram.com/dolcevillasrealestate" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/the-dolce-villas-554620288" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-[100px]">
          {/* Column 1 */}
          <div>
            <p className="text-gray-400 text-sm mb-2">
              We are committed to providing exceptional solutions<br/> for a seamless and rewarding real estate experience.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white flex items-center gap-2"><FaMapMarkedAlt /> 214, Bayan Building, DIP 1</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2"><FaPhone/>+971 52 429 9495 </a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2"><FaEnvelope/>info@thedolcevillas.com</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
          <Link to='/'>   <li className="hover:text-white">Home</li></Link> 
            <Link to='/about'>  <li className="hover:text-white">About</li></Link>
         <Link to='/contactus'>     <li className="hover:text-white">Contact</li></Link>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
         <Link to='/blog'>     <li className="hover:text-white">Blog</li></Link>
          <Link to='/privacy'>    <li className="hover:text-white">Privacy Policy</li></Link>
        <Link to='/terms'>      <li className="hover:text-white">Terms and Conditions</li></Link>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;


