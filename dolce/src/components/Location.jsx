



import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const slides = [
  { image: assets.Palm, buttonText: "Button 1" },
  { image: assets.Jabalali, buttonText: "Button 2" },
  { image: assets.Jumeriah, buttonText: "Button 3" },
  { image: assets.Jumeriahcircle, buttonText: "Button 4" },
  { image: assets.Down, buttonText: "Button 5" },
  { image: assets.Emaar, buttonText: "Button 6" },
];

const Location = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  // Make a cloned array for smooth looping
  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset index when we’ve reached the clone part
  useEffect(() => {
    if (startIndex >= slides.length) {
      setTimeout(() => {
        setStartIndex(0);
      }, 700); // match transition duration
    }
  }, [startIndex]);

  return (
    <div className="relative   text-white  space-y-8 bg-gray-100  w-full h-full">
     
      
      <div className="mx-auto py-8 overflow-hidden  ">
        <div
          className="flex gap-0 transition-transform duration-700 ease-linear"
          style={{
            transform: `translateX(-${(startIndex * 100) / visibleCount}%)`,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div key={index} className="relative flex-shrink-0 w-1/4">
              {/* Button above the image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  {slide.buttonText}
                </button>
              </div>
              {/* Image */}
             <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-[400px] h-[500px] object-cover rounded-tl-[70px] rounded-br-[50px] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Location;





