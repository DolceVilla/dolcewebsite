
import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useState } from 'react'
const Contact = () => {
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
    <div className="relative bg-white w-full p-10">

      {/* Desktop Section */}
      <div className="hidden lg:block relative overflow-hidden ml-10 mr-10 h-[600px] mt-10 rounded-tl-[200px]">
        <img
          src={assets.Contact}
          className="w-full h-[600px] object-cover"
          alt="Contact"
        />
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-black/90 to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-between px-12 text-white">
          {/* Text */}
          <motion.div
            className="max-w-md"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-serif mb-4">
              Get in Touch with Dolce Villas Real Estate!
            </h2>
            <p className="text-lg font-serif">
              We value your questions and feedback. Reach out to us we're here to assist you and look forward to hearing from you!
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-white backdrop-blur-md p-6  rounded-2xl w-[450px] text-black shadow-lg"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-gold font-semibold mb-4 font-serif">Contact Us</h3>
            
            <form onSubmit={handleSubmit}  className="space-y-2" >
               <label className="block text-black text-bold font-medium mb-2 font-serif">Name:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: </label>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
                <input type="text" name='name' placeholder="Your Name" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
                
                <input type="email" name='email' placeholder="Your Email" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
              </div> 
              <label className="block text-black text-bold font-medium mb-2 font-serif">Address:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Phone: </label>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
                <input type="text" name='address' placeholder="Enter Your Address" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
                
                <input type="tel" name='phone' placeholder="Enter Your Phone" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
              </div> 
              
               <label className="block text-black text-bold font-medium mb-2 font-serif">Subject:</label>
              <input type="text" name='subject' placeholder="Subject" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
              <label className="block text-black text-bold font-medium mb-2 font-serif">Message:</label>
              <textarea placeholder="Write Your Message Here" name='message' className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none h-24"></textarea>
              <button type="submit" className="w-full bg-gold text-white py-2 rounded-lg hover:bg-gray-800 transition">Send</button>
            
            </form>
          
          </motion.div>
        </div>
      </div>

      {/* Mobile & iPad Section */}
      <div className="lg:hidden mt-10 px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Get in Touch with Dolce Villas Real Estate!
          </h2>
          <p className="text-md">
            We value your questions and feedback. Reach out to us we're here to assist you!
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-2xl w-full max-w-md mx-auto shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-gold font-semibold mb-4 text-center">Contact Us</h3>
          <form onSubmit={handleSubmit}  className="space-y-3">



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label>Name:</label>
              <input type="text" name='name' placeholder="Your Name" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
              <label>Email:</label>
              <input type="email" name='email' placeholder="Your Email" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label>Address:</label>
              <input type="text" name='address' placeholder="Enter Your Address" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
              <label>Phone:</label>
              <input type="tel" name='phone' placeholder="Enter Your Phone" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
                          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label>Subject:</label>
            <input type="text" name='subject' placeholder="Subject" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"/>
            <label>Message:</label>
            <textarea name='message' placeholder="Write Your Message Here" className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none h-24"></textarea>
            </div><br/>
            <button type="submit" className="w-full bg-gold text-white py-2 rounded-lg hover:bg-gray-800 transition">Send</button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
