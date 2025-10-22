


import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Outer Transparent Box */}
  <div className="bg-white/30 backdrop-blur-md shadow-xl w-full min-h-screen px-4 md:px-16 py-[100px] flex items-start">
 
        {/* Inner Solid White Box */}
        <div className="bg-white rounded-2xl p-6 md:p-12 flex flex-col lg:flex-row shadow-lg gap-6 lg:gap-12 max-w-[1400px] mx-auto w-full min-h-[60vh] items-center relative">
          
          {/* Left Image with Motion (Overlapping Bottom) */}
          <motion.div
            className="w-full sm:w-11/12 md:w-3/4 lg:w-3/5 flex justify-center items-center relative -mb-20 lg:-mb-40"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={assets.About5}
              alt="About Us"
              className="rounded-bl-[180px] mt-[100px] rounded-tr-[180px] shadow-lg w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>

          {/* Right Content with Motion */}
          <motion.div
            className="w-full sm:w-11/12 md:w-1/2 lg:w-2/5 flex flex-col justify-start items-center text-center lg:text-left text-gray-800 mt-12  lg:mt-0 "
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl mt-5 md:text-4xl font-serif text-gold font-bold mb-6">
              WHO WE ARE
            </h2>
            <p className="text-base md:text-lg font-serif leading-relaxed mb-6">
              Founded with a vision to redefine real estate services, Dolce Villas brings together a team of seasoned professionals dedicated to providing a seamless and exceptional experience. Our commitment to personalized service, market expertise, and fast response makes us the go-to choice for all your real estate needs.
            </p>
            <Link to="/about">
              <button className="w-max px-6 py-3 bg-gold text-white rounded-lg hover:bg-black transition">
                Learn More
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
