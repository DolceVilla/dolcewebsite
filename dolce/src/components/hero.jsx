

import React, { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const images = [hero2, hero1, hero3, hero4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  // Search inputs
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSearch = () => {
      if (!location && !type && !price && !purpose){
        return;
      }
    const searchParams = { location, type, price, purpose };
    navigate("/properties", { state: searchParams });
  };

  // Hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Slider */}
      <div className="fixed inset-0 z-0">
        <img
          src={images[currentIndex]}
          alt="Hero"
          className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
 
 <div className="relative z-10 flex flex-col items-center
                justify-start pt-40 sm:justify-center sm:pt-0 min-h-screen text-center px-4">


    


<motion.h1
  className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-gold break-words"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Turning Dreams into Reality
</motion.h1>



  

        <motion.p
          className="text-gold text-base sm:text-lg  font-serif md:text-xl mt-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          At Dolce Villas Real Estate, we specialize in matching you with the ideal
        </motion.p>

        <motion.p
          className="text-gold text-base font-serif sm:text-lg md:text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          property that suits your lifestyle.
          <motion.span
            className="text-white font-serif "
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {" "}Whether you're buying, selling, or
          </motion.span>
        </motion.p>

        <motion.p
          className="text-gold  text-base font-serif sm:text-lg md:text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          investing, our dedicated team is here to support you every step of the way
        </motion.p>

       

{/* Search Bar */}


<div className="w-full max-w-6xl mt-12 mx-auto">
  <div className="bg-white p-4 border border-slate-600 rounded-lg text-black shadow-lg">
    <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 flex-wrap">

      {/* Location */}
      <div className="flex-1 min-w-[150px] p-2 text-left">
        <h1 className="font-bold text-sm sm:text-base font-serif">Location</h1>
        <div className="flex items-center gap-x-2">
          <BiMap />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent border-0 outline-none text-slate-500 text-sm sm:text-base"
            placeholder="Enter location"
          />
        </div>
      </div>

      {/* Type */}
      <div className="flex-1 min-w-[150px] p-2 text-left">
        <h1 className="font-bold text-sm sm:text-base font-serif">Property Type</h1>
        <div className="flex items-center gap-x-2">
          <BiBuildings />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-transparent border-0 outline-none text-slate-500 text-sm sm:text-base"
          >
            <option value="">All</option>
            <option value="apartment">Apartment</option>
            <option value="studio">Studio</option>
            <option value="mansion">Mansion</option>
            <option value="penthouse">Penthouse</option>
          </select>
        </div>
      </div>

      {/* Price */}
      <div className="flex-1 min-w-[150px] p-2 text-left">
        <h1 className="font-bold text-sm sm:text-base font-serif">Price Range</h1>
        <div className="flex items-center gap-x-2">
          <BiMoney />
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-transparent border-0 outline-none text-slate-500 text-sm sm:text-base"
          >
            <option>All</option>
            <option>$40,000 - $80,000</option>
            <option>$80,000 - $120,000</option>
            <option>$120,000 - $200,000</option>
            <option>$200,000 - $300,000</option>
            <option>$300,000 - $500,000</option>
            <option>$500,000 - $1,000,000</option>
          </select>
        </div>
      </div>

      {/* Purpose */}
      <div className="flex-1 min-w-[150px] p-2 text-left">
        <h1 className="font-bold text-sm sm:text-base font-serif">For</h1>
        <div className="flex items-center gap-x-2">
          <BiBriefcase />
          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full bg-transparent border-0 outline-none text-slate-500 text-sm sm:text-base"
          >
            <option value="">All</option>
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex-1 min-w-[150px] p-2 flex justify-center">
        <button
          onClick={handleSearch}
          className="w-full md:w-50 lg:w-auto bg-yellow-500 hover:bg-black text-white text-base sm:text-lg font-serif font-bold py-3 px-8 rounded-lg transition"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</div>



      </div>
    </div>
  );
};

export default Hero;
