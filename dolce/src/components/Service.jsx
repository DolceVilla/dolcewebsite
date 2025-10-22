

import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../Context/AppContext';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const { services } = useContext(AppContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="relative w-full bg-white">
      {/* Background Image */}
      <img
        src={assets.Service2}
        alt="Service Background"
        className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[600px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent flex flex-col items-center px-4 sm:px-8 md:px-16">
        {/* Header */}
        <div className="text-center mt-6 sm:mt-10 z-10 relative">
          <motion.h1 className="text-base sm:text-lg md:text-xl font-semibold text-white font-serif" 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                      viewport={{ once: true, amount: 0.5 }}
                  >
            SERVICES WE OFFER
          </motion.h1>
          <motion.h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gold mt-2  font-serif"
              initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                      viewport={{ once: true, amount: 0.5 }}
                      >
            Our Expertise
          </motion.h1>
        </div>

        {/* Mobile & iPad Slider - Bottom Positioned */}
        <div className="w-full block lg:hidden absolute bottom-0 flex justify-center pb-4 sm:pb-6 z-10">
          <div className="w-[90%] sm:w-[70%]">
            <Slider {...settings}>
              {services.slice(0, 10).map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-[30px] shadow-lg flex flex-col items-center p-4 sm:p-6 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  
               
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-16 sm:w-20 h-16 sm:h-20 object-contain mt-2 mx-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />

                  <div className="text-center mt-3 px-2 sm:px-4">
                    <p className="text-black font-bold text-base sm:text-lg font-serif">{item.name}</p>
                    <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base break-words font-serif">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 w-full max-w-[1200px] mt-10 z-10">
          {services.slice(0, 10).map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-bl-[100px] rounded-tr-[100px] shadow-lg flex flex-col justify-between items-center p-6 cursor-pointer min-h-[300px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
               viewport={{ once: true, amount: 0.5 }} 
whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.4, ease: 'easeOut' },
                }}
                whileTap={{ scale: 0.97 }}

            >
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain mt-2 mx-auto font-serif"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                 viewport={{ once: true, amount: 0.5 }} 
              />
              <div className="text-center mt-4 px-2">
                <p className="text-black font-bold text-2xl font-serif">{item.name}</p>
                <p className="text-gray-500 mt-2 text-base break-words font-serif">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
