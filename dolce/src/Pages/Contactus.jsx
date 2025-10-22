
import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'
const Contactus = () => {

const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Append Web3Forms access key
    formData.append("access_key", "254eed7f-a3b6-4e55-8d77-b42bf6015cbe"); // Replace with your key
  

    // Convert FormData to JSON
    const data = Object.fromEntries(formData);
    const json = JSON.stringify(data);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();
      if (result.success) {
        e.target.reset();
        setSubmitted(true);
      } else {
        alert("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Submission failed. Check console for details.");
    }
  };













  return (
    <div>
      {/* ===================== TOP COVER IMAGE (ALL SCREENS) ===================== */}
      <div className="relative overflow-hidden h-[250px] md:h-[400px] lg:h-[500px] mt-[70px] md:mt-[100px]">
        <img
          src={assets.aae}
          className="w-full h-full object-cover rounded-bl-[60px] md:rounded-bl-[100px] rounded-br-[60px] md:rounded-br-[100px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-gold text-3xl md:text-5xl font-serif font-bold text-center px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </div>

      {/* ===================== DESKTOP VIEW ===================== */}
      <div className="hidden lg:block">
        <div className="relative flex h-[700px] ml-[300px] mt-[150px]">
          
          {/* Form sliding from left */}
          <motion.div
            className="w-1/2 h-full flex bg-gray-200 shadow-lg rounded-l-2xl p-8"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="w-full max-w-md ml-[100px] space-y-4">
              <h2 className="text-3xl font-bold mb-4 font-serif">Stay Connected</h2>
              <p className='font-serif'>
                Discover a curated selection of luxury and exclusive properties,
                perfect for international clients seeking exceptional real estate opportunities.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 font-serif">Name:</label>
                  <input type="text" name='name' placeholder="Your Name" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 font-serif">Email:</label>
                  <input type="email" name='email' placeholder="Your Email" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 font-serif">Address:</label>
                  <input type="text" placeholder="Enter Your Address" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 font-serif">Phone:</label>
                  <input type="tel" name='phone' placeholder="Enter Your Phone" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 font-serif">Subject:</label>
                <input type="text" name='address' placeholder="Subject" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 font-serif">Message:</label>
                <textarea name='message' placeholder="Write Your Message Here" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none h-24"></textarea>
              </div>

              <button type="submit" className="w-full bg-gold text-white py-2 rounded-lg hover:bg-gray-800 transition font-serif">Send</button>
            </form>
          </motion.div>

          {/* Image sliding from right */}
          <motion.div
            className="w-[500px] h-full"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={assets.Contact3} alt="Contact" className="w-full h-full object-cover rounded-r-2xl shadow-lg" />
          </motion.div>

          {/* Center black box sliding from bottom */}
          <motion.div
            className="absolute inset-0 flex items-center ml-10 justify-center pointer-events-none"
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-gradient-to-r from-black/80 to-gray-800/80 text-white p-10 rounded-2xl shadow-xl max-w-md pointer-events-auto">
              <h3 className="text-xl font-semibold mb-2 font-serif">Contact us</h3>
              <p className='font-serif'>Address:<br />214, Bayan Building, DIP 1</p>
              <br />
              <p className='font-serif'>Contact Information: <br />+971 52 429 9495</p>
              <br />
              <p className='font-serif'>Email:<br />info@thedolcevillas.com</p>
              <br />
              <p className='font-serif'>Follow Us:</p>
              <br />
              <div className='flex gap-4 space-x-6 text-2xl text-white'>
          <a href='https://www.facebook.com/dolcevillasrealestate' >     <FaFacebook className='hover:text-blue-600 cursor-pointer'/></a>
        <a href='https://www.instagram.com/dolcevillasrealestate'>        <FaInstagram className='hover:text-pink-500 cursor-pointer'/></a>
        <a href='https://www.linkedin.com/in/the-dolce-villas-554620288'>        <FaLinkedin className='hover:text-blue-600 cursor-pointer'/></a> 
          <a href='https://www.youtube.com/channel/UCEwOKYmiMD3gyaKxzcNXgQw'>     <FaYoutube className='hover:text-red-600 cursor-pointer'/></a> 
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ===================== MOBILE + TABLET VIEW ===================== */}
      <div className="block lg:hidden mt-6">
        {/* Form sliding from left */}
        <motion.div
          className="mt-6 bg-white mx-4 p-6 rounded-2xl shadow-xl"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 font-serif">Stay Connected</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className='font-serif'>Name:</label>
            <input type="text" name='name' placeholder="Full Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none" />
            <br/> <br/>
            <label className='font-serif' >  Email:</label>
            
            <input type="email" name='email' placeholder="Email Address" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none" />
            <br/> <br/>
            <label className='font-serif'>Phone:</label>
           
            <input type="tel" name='phone' placeholder="Phone Number" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none" />
            <br/> <br/>
            <label className='font-serif'>Message:</label>
            
            <textarea placeholder="Your Message"  name='message' className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none h-28"></textarea>
            <button type="submit" className="w-full bg-gold text-white py-3 rounded-lg hover:bg-gray-800 transition font-serif">Send Message</button>
          </form>
        </motion.div>

        {/* Image sliding from right */}
        <motion.div
          className="mt-6 mx-4 h-64 rounded-2xl overflow-hidden shadow-lg"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <img src={assets.Contact3} alt="Contact" className="w-full h-full object-cover rounded-2xl" />
        </motion.div>

        {/* Contact info sliding from bottom */}
        <motion.div
          className="mt-6 mx-4 bg-gradient-to-r from-black/90 to-gray-800/90 text-white rounded-2xl p-6 text-center"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <h3 className="text-xl font-semibold mb-3 font-serif">Contact Details</h3>
          <p className='font-serif'>📍 214, Bayan Building, DIP 1</p>
          <p className="mt-2 font-serif">📞 +971 52 429 9495</p>
          <p className="mt-2 font-serif">✉️ info@thedolcevillas.com</p>

          <div className="flex justify-center gap-5 text-2xl text-white mt-4">
       <a href='https://www.facebook.com/dolcevillasrealestate'>     <FaFacebook className="hover:text-blue-600 cursor-pointer" /></a>
       
        <a href='https://www.instagram.com/dolcevillasrealestate'>     <FaInstagram className="hover:text-pink-500 cursor-pointer" /></a>
        
          <a href='https://www.linkedin.com/in/the-dolce-villas-554620288'>   <FaLinkedin className="hover:text-blue-600 cursor-pointer" /></a>
            <a href='https://www.youtube.com/channel/UCEwOKYmiMD3gyaKxzcNXgQ'>  <FaYoutube className="hover:text-red-600 cursor-pointer" /></a>
          </div>
        </motion.div>
      </div>

      <br /><br />
    </div>
  )
}

export default Contactus


