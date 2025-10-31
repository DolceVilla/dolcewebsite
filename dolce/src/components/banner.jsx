


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';
const Banner = () => {
  const navigate = useNavigate();
  const { property } = useContext(AppContext); 

  return (
    <div className="relative p-8 text-white bg-white w-full min-h-screen">
      {/* Centered content */}
      <div className="flex flex-col items-center gap-8 px-4">
        

        <motion.h1
          className="text-3xl md:text-4xl font-serif text-gold mt-5 text-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
        OUR LATEST PROPERTIES
        </motion.h1>

        {/* Property Grid (show only 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center pt-5">
          {property.slice(0, 6).map((item, index) => (     
            <motion.div
              key={index}
              onClick={() => {
                navigate(`/propertiesList/${item._id}`);
                scrollTo(0, 0);
              }}
              className="border rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 w-full max-w-xs mx-auto"
              initial={{ y: 50, opacity: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
              whileInView={{
                y: 0,
                opacity: 1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-48 md:h-56 object-cover rounded-bl-[100px] transform transition-transform duration-500 hover:scale-105"
                src={item.image[0]}
                alt={item.name}
              />
              <div className="p-4 bg-white">
                
                <p className="text-gray-900 text-lg font-bold text-xl">{item.name}</p>
                <div className="flex flex-wrap items-center gap-4  text-sm text-black my-2">
                {item.amenities?.map((a, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <img src={a.icon} alt={a.name} className="w-6 h-6 " />
                    <span>{a.name}</span>
                  </div>
                ))}
              </div>
           
                <p className="text-black font-bold text-medium mt-1 ">
                  AED {item.price?.toLocaleString()}
                </p>

  <hr className="my-2" />

<div className="p-4 md:p-0">
  <ul className="flex flex-row sm:flex-row gap-4 sm:gap-10 md:gap-4">
    {/* Call Button */}
    <li
      onClick={(e) => {
        e.stopPropagation(); // Prevent parent div click
        window.open('tel:+971524299495', '_blank');
      }}
      className="flex items-center text-black justify-center gap-2 px-2 py-3 border rounded font-serif w-40 h-12 hover:bg-gray-100 transition cursor-pointer"
    >
      <FaPhone className="text-gold " />
      Call
    </li>

    {/* WhatsApp Button */}
    <li
      onClick={(e) => {
        e.stopPropagation(); // Prevent parent div click
        window.open('https://wa.me/971524299495', '_blank');
      }}
      className="flex items-center justify-center gap-2 text-black px-5 py-3 border rounded font-serif w-40 h-12 hover:bg-gray-100 transition cursor-pointer"
    >
      <FaWhatsapp className="text-gold" />
      Whatsapp
    </li>
  </ul>
</div>












  {/** */}

              </div>
            </motion.div>
          ))}

        </div>

        {/* View More Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => {
              navigate('/properties');
              scrollTo(0, 0);
            }}
            className="bg-yellow-500 hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
          >
            View More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
