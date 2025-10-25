


import React, { useEffect, useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from 'react-icons/bi';
import { AppContext } from '../Context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp,FaPhone } from 'react-icons/fa';
const Properties = () => {
  const navigate = useNavigate();
  const { property } = useContext(AppContext);
  const locationObj = useLocation();
  const searchParams = locationObj.state || {};

  const [filterprops, setFilterProps] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const [location, setLocation] = useState(searchParams.location || '');
  const [type, setType] = useState(searchParams.type || '');
  const [price, setPrice] = useState(searchParams.price || '');
  const [purpose, setPurpose] = useState(searchParams.purpose || '');

  const typeMapping = {
    apartment: ['apartment', 'flat'],
    studio: ['studio'],
    mansion: ['mansion', 'villa'],
    penthouse: ['penthouse'],
  };

  const handleSearch = () => {
    let filtered = property;

    if (location.trim() !== '') {
      const searchLocations = location.split(',').map(l => l.trim().toLowerCase());
      filtered = filtered.filter(item =>
        searchLocations.some(loc => item.location?.toLowerCase().includes(loc))
      );
    }

    if (type) {
      const keywords = typeMapping[type] || [];
      filtered = filtered.filter(item =>
        keywords.some(word =>
          item.name?.toLowerCase().includes(word) ||
          item.description?.toLowerCase().includes(word)
        )
      );
    }

    if (purpose) {
      filtered = filtered.filter(item => item.type?.toLowerCase() === purpose.toLowerCase());
    }

    if (price && price !== 'All') {
      const [min, max] = price.split('-').map(p => parseInt(p.replace(/\D/g, ''), 10));
      filtered = filtered.filter(item => item.price >= min && item.price <= max);
    }

    setFilterProps(filtered);
    setVisibleCount(6);
  };

  useEffect(() => {
    handleSearch();
  }, [property]);

  const loadMore = () => setVisibleCount(prev => prev + 4);

  return (
    <div>
      {/* Banner with Search */}
  {/*}    <div className="relative overflow-hidden h-[500px] mt-[100px]">*/}
  <div className='relative overflow-hidden h-[500px] mt-[50px] md:mt-[70px] lg:mt-[100px]'>
        <img
          src={assets.Prop}
          className="w-full h-full object-cover rounded-bl-[100px] rounded-br-[100px]"
          alt="banner"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent"></div>

        {/* Search Bar */}
        <div className="max-w-6xl mx-auto px-4 relative bottom-[450px] sm:bottom-[350px]">
          <div className="bg-white mt-12 p-4 border border-slate-600 rounded-lg text-black">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              
              {/* Location */}
              <div className="flex-1 p-2">
                <h1 className="font-bold text-sm sm:text-base">Location</h1>
                <div className="flex items-center gap-x-2">
                  <BiMap />
                  <input
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="w-full bg-transparent border-0 outline-none text-sm sm:text-base"
                    placeholder="Enter location of the property"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="flex-1 p-2">
                <h1 className="font-bold text-sm sm:text-base">Property Type</h1>
                <div className="flex items-center gap-x-2">
                  <BiBuildings />
                  <select
                    value={type}
                    onChange={e => setType(e.target.value)}
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
              <div className="flex-1 p-2">
                <h1 className="font-bold text-sm sm:text-base">Price range</h1>
                <div className="flex items-center gap-x-2">
                  <BiMoney />
                  <select
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="w-full bg-transparent border-0 outline-none text-slate-500 text-sm sm:text-base"
                  >
                    <option value="">All</option>
                    <option value="40000-80000">$40,000 - $80,000</option>
                    <option value="80000-120000">$80,000 - $120,000</option>
                    <option value="120000-200000">$120,000 - $200,000</option>
                    <option value="200000-300000">$200,000 - $300,000</option>
                    <option value="300000-500000">$300,000 - $500,000</option>
                    <option value="500000-1000000">$500,000 - $1,000,000</option>
                  </select>
                </div>
              </div>

              {/* Purpose */}
              <div className="flex-1 p-2">
                <h1 className="font-bold text-sm sm:text-base">For</h1>
                <div className="flex items-center gap-x-2">
                  <BiBriefcase />
                  <select
                    value={purpose}
                    onChange={e => setPurpose(e.target.value)}
                    className="w-full bg-transparent border-0 outline-none text-slate-500 text-sm sm:text-base"
                  >
                    <option value="">All</option>
                    <option value="sale">Sale</option>
                    <option value="rent">Rent</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="w-full mt-0 md:w-fit">
                <button
                  onClick={handleSearch}
                  className="w-full md:w-fit bg-yellow-500 hover:bg-black text-white text-base sm:text-lg font-bold py-2 px-4 border-0 rounded-md"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Heading */}
      <motion.h1
        className="font-serif text-center text-4xl sm:text-5xl mt-10 font-bold text-gold"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Properties
      </motion.h1>

      {/* Properties Grid */}
      <motion.div
        className="w-[90%] sm:w-[90%] md:w-[70%] lg:w-[900px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {filterprops.slice(0, visibleCount).map((item, index) => (
          <div
            onClick={() => navigate(`/propertiesList/${item._id}`)}
            className="border border-black shadow-xl rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img
              className="rounded-bl-[80px] mt-2 px-2 w-full h-48 object-cover rounded-tl-2xl"
              src={item.image[0]}
              alt={item.name}
            />
            <div className="p-4">
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 my-2">
                {item.amenities?.map((a, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <img src={a.icon} alt={a.name} className="w-6 h-6" />
                    <span>{a.name}</span>
                  </div>
                ))}
              </div>
              <hr className="my-2" />
              <div className='flex flex-row gap-[80px] '>
              <p className="text-gray-900 text-lg font-medium">AED {item.price}</p>
              <p className="text-gray-600 font-medium capitalize">{item.type}</p>
    
</div>



<div className="p-4 md:p-0">
  <ul className="flex flex-row sm:flex-row gap-4 sm:gap-10 md:gap-4">
    {/* Call Button */}
    <li
      onClick={(e) => {
        e.stopPropagation(); // Prevent parent div click
        window.open('tel:+971524299495', '_blank');
      }}
      className="flex items-center justify-center gap-2 px-2 py-3 border rounded font-serif w-40 h-12 hover:bg-gray-100 transition cursor-pointer"
    >
      <FaPhone className="text-gold rotate-90" />
      Call
    </li>

    {/* WhatsApp Button */}
    <li
      onClick={(e) => {
        e.stopPropagation(); // Prevent parent div click
        window.open('https://wa.me/971524299495', '_blank');
      }}
      className="flex items-center justify-center gap-2 px-5 py-3 border rounded font-serif w-40 h-12 hover:bg-gray-100 transition cursor-pointer"
    >
      <FaWhatsapp className="text-gold" />
      Whatsapp
    </li>
  </ul>
</div>






















            </div>
   
          </div>
        ))}
      </motion.div>

      {/* Load More */}
      {visibleCount < filterprops.length && (
        <div className="flex justify-center mt-8 mb-10">
          <button
            onClick={loadMore}
            className="bg-yellow-500 hover:bg-black text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
      <br/><br/>
    </div>
  );
};

export default Properties;
