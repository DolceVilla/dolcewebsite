
{/*}

import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { AppContext } from "../Context/AppContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
const Testimonial = () => {
  const { testimonial = [] } = useContext(AppContext);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  if (!testimonial.length) {
    return <p className="text-center text-gray-500 font-serif">No testimonials found.</p>;
  }

  return (
    <div className="relative p-8 w-full h-full bg-white">
      <motion.h1 className="text-center text-4xl text-gold 
       font-serif"
      initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                      viewport={{ once: true, amount: 0.5 }}
      >
        Our Clients Experience
      </motion.h1>

      <div className="relative overflow-hidden mt-[100px]">
        <div className="max-w-8xl mx-auto py-10">
          <Slider {...settings}>
            {testimonial.map((t, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div key={index}>
                  <div
                    className={`shadow-lg bg-gradient-to-b from-yellow-500 to-black rounded-tl-[100px] rounded-br-[100px] mx-2 p-8 flex flex-col justify-between
                      ${isExpanded ? "h-auto sm:h-auto" : "h-[300px] sm:h-[300px]"}`}
                  >
                    <p className={`text-white mb-2 font-serif ${isExpanded ? "" : "line-clamp-6"}`}>
                      "{t.message}"
                    </p>

                    {!isExpanded && t.message.length > 200 && (
                      <button
                        className="text-sm text-white mt-2 font-serif"
                        onClick={() => setExpandedIndex(index)}
                      >
                        Read More...
                      </button>
                    )}

                    {isExpanded && (
                      <button
                        className="text-sm text-yellow-300 mt-2 font-serif"
                        onClick={() => setExpandedIndex(null)}
                      >
                        Show Less
                      </button>
                    )}

                    <h3 className="text-lg text-white font-semibold mt-4 font-serif">
                      {t.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial; 

*/}



import React, { useContext, useState, useEffect } from "react";
import Slider from "react-slick";
import { AppContext } from "../Context/AppContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Testimonial = () => {
  const { testimonial = [] } = useContext(AppContext);
  const [expandedIndex, setExpandedIndex] = useState(null);

  // 🔹 Force re-render for slick when window resizes (important for hosting)
  useEffect(() => {
    const handleResize = () => window.dispatchEvent(new Event("resize"));
    setTimeout(handleResize, 500); // 👈 ensures correct layout after build
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  if (!testimonial.length) {
    return (
      <p className="text-center text-gray-500 font-serif py-10">
        No testimonials found.
      </p>
    );
  }

  return (
    <div className="relative w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      {/* Title */}
      <motion.h1
        className="text-center text-3xl sm:text-4xl text-yellow-600 font-serif font-bold mb-10"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Our Clients Experience
      </motion.h1>

      {/* Slider */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <Slider {...settings}>
          {testimonial.map((t, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} className="px-3">
                <div
                  className="flex flex-col justify-between bg-gradient-to-b from-yellow-500 to-black rounded-tl-[80px] rounded-br-[80px] p-6 sm:p-8 shadow-lg min-h-[340px] h-full transition-all duration-300"
                >
                  <p
                    className={`text-white text-base sm:text-lg font-serif mb-2 ${
                      isExpanded ? "" : "line-clamp-6"
                    }`}
                  >
                    "{t.message}"
                  </p>

                  {t.message.length > 180 && (
                    <button
                      className="text-sm text-yellow-300 mt-2 font-serif self-end"
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                    >
                      {isExpanded ? "Show Less" : "Read More..."}
                    </button>
                  )}

                  <h3 className="text-white text-lg sm:text-xl font-semibold mt-4 font-serif text-right">
                    — {t.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
