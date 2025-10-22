



import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
const faqs = [
  {
    question: "What real estate services do you offer?",
    answer: "We help clients buy, sell, and rent properties in Dubai. We also provide property management, investment advice, and support with legal and financing processes."
  },
  {
    question: "Do you charge any fees for consultations?",
    answer: "No, our consultations are completely free. We provide expert advice to help you make informed decisions without any charges."
  },
  {
    question: "Do you help with property financing or mortgages?",
    answer: "Yes, we can connect you with trusted banks and financial institutions and guide you through the mortgage application process."
  },
    {
    question: "How do I stay updated on my property transaction?",
    answer: "We provide regular updates via phone, email, or a client portal so you always know the status of your property purchase or rental."
  },

];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-white w-full ">
      {/* Background Image */}
      <div className="relative w-full h-[800px] md:h-[600px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] rounded-tl-[200px] overflow-hidden">
        <img
          src={assets.faq}
          alt="FAQ Background"
          className="w-full h-full object-cover "
        />

        {/* FAQ Content Over Image */}
        <div className="absolute inset-0 bg-black/40 flex justify-center items-start pt-16 px-4">
          <div className="w-full max-w-3xl">
            <motion.h2 className="text-3xl font-bold mb-6 text-center text-white font-serif"
            initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                      viewport={{ once: true, amount: 0.5 }}>
                
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // left for even, right for odd
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white/90 border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-medium font-serif">{faq.question}</h3>
                    <span className="text-2xl font-bold font-serif">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  {openIndex === index && (
                    <p className="mt-3 text-gray-700 font-serif">{faq.answer}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

