






 import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const NewsLetter = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Your Web3Forms access key
    formData.append("access_key", "254eed7f-a3b6-4e55-8d77-b42bf6015cbe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
    
      event.target.reset(); // Clear form
    } else {
      alert("Failed to send request. Please try again.");
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-tl-[100px] rounded-br-[100px] shadow-lg w-full max-w-4xl relative flex flex-col md:flex-row overflow-hidden">
            
            {/* Close Button */}
         <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl font-bold z-50"
            >
              &times;
            </button>

            {/* Left Side - Newsletter Image */}
         <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src={assets.news1}
                alt="Newsletter"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Form */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center h-full">
              <h2 className="text-xl text-gold sm:text-2xl font-serif font-bold mb-3 sm:mb-4 text-center md:text-left">
                Get a call within 60 seconds
              </h2>
              <p className=" mb-5 font-serif text-center md:text-left text-sm sm:text-base">
                Drop your number and we'll call you instantly!
              </p>

              <form className="flex font-serif flex-col gap-3 sm:gap-4" onSubmit={onSubmit}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  required
                />

                <label htmlFor="phone">Phone Number</label>
                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 w-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
                    alt="UAE Flag"
                    className="w-6 h-4 mr-2 object-cover"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your number"
                    className="flex-1 outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gold text-white py-2 font-serif font-bold rounded-md hover:bg-black transition w-[100px] sm:py-3"
                >
                  Call Me
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsLetter; 


