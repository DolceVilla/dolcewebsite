
{/*....}

import React, { useContext } from "react";
import Slider from "react-slick";
{/*import { assets } from "../assets/assets5";*/}{/*.....}
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from "../Context/AppContext";
const Logos = () => {
  const {developerLogo =[]} = useContext(AppContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // 👉 show 6 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } }, // laptop
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // tablet
      { breakpoint: 768, settings: { slidesToShow: 2 } },  // small tablet
      { breakpoint: 480, settings: { slidesToShow: 2 } },  // mobile
    ],
  };

  if (!developerLogo || developerLogo.length === 0) {
    return <p className="text-center text-gray-500">No logos found.</p>;

  }

  return (
    <div className="relative p-8 w-full bg-white">
      <div className="max-w-7xl mx-auto py-10">
        <Slider {...settings}>
          {developerLogo.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-6">
              <img
                src={logo.image}
                alt={logo.alt || `Logo ${index + 1}`}
                className="w-32 h-32 object-cover rounded-full border-2 border-gray-200 shadow-md" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Logos;  */}

import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from "../Context/AppContext";

const Logos = () => {
  const { developerLogo = [] } = useContext(AppContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    swipe: true,          // enable swipe on mobile
    draggable: true,      // allow drag on desktop and mobile
    touchThreshold: 10,   // improve swipe sensitivity
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { 
        breakpoint: 480, 
        settings: { 
          slidesToShow: 1, 
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
          swipeToSlide: true,   // ensures swiping works
        } 
      },
    ],
  };

  if (!developerLogo.length) {
    return <p className="text-center text-gray-500">No logos found.</p>;
  }

  return (
    <div className="relative w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Slider {...settings}>
          {developerLogo.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.image}
                alt={logo.alt || `Logo ${index + 1}`}
                className="w-32 h-32 object-contain rounded-full border-2 border-gray-200 shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Logos;
