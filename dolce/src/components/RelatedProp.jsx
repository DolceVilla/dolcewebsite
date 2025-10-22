
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone,FaWhatsapp } from 'react-icons/fa6';
const RelatedProp = ({ docId }) => {
  const { property } = useContext(AppContext);
  const navigate = useNavigate();

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (property.length > 0) {
      const propertyData = property.filter((doc) => doc._id !== docId);
      setRelDoc(propertyData);
    }
  }, [property, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-4 md:px-10">
      <h1 className="text-3xl font-medium text-center">Related Property</h1>
      <p className="sm:w-2/3 text-center text-sm">
        Simply browse through our extensive list of trusted properties.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full">
        {relDoc.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            onClick={() => {
              navigate(`/propertiesList/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border rounded-2xl border-black overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            initial={{ y: 50, opacity: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
            whileInView={{ y: 0, opacity: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              className="w-full h-48 sm:h-52 md:h-48 object-cover rounded-bl-[50px] transform transition-transform duration-500 hover:scale-105"
              src={item.image[0]}
              alt={item.name}
            />
            <div className="p-4">
              <p className="text-gray-900 text-lg font-medium text-center">{item.name}</p>

<div className="flex flex-wrap items-center gap-4 font-serif text-sm text-black my-2">
                {item.amenities?.map((a, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <img src={a.icon} alt={a.name} className="w-6 h-6 font-serif" />
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






            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProp;



