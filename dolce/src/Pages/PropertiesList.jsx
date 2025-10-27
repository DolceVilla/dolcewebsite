
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import RelatedProp from '../components/RelatedProp';
import { BiLeftArrow, BiRightArrow, BiX, BiMap } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import DOMPurify from 'dompurify';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 25.276987,
  lng: 55.296249,
};

const PropertiesList = () => {
  const { docId } = useParams();
  const { property } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [propertyPosition, setPropertyPosition] = useState(defaultCenter);
  const [showInfo, setShowInfo] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const doc = property.find(doc => doc._id === docId);
    setDocInfo(doc);

    if (doc && doc.location) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          doc.location
        )}&key=${import.meta.env.VITE_GOOGLE_GEOCODE_API_KEY}`
      )
        .then(res => res.json())
        .then(data => {
          if (data.status === 'OK' && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            setPropertyPosition({ lat, lng });
          }
        })
        .catch(err => console.error(err));
    }
  }, [property, docId]);

  if (!docInfo) return null;

  const imagesToShow = showAll ? docInfo.image : docInfo.image.slice(0, 4);

  const handlePrev = () => {
    setSelectedIndex(prev => (prev === 0 ? docInfo.image.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex(prev => (prev === docInfo.image.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('access_key', '254eed7f-a3b6-4e55-8d77-b42bf6015cbe');
    const data = Object.fromEntries(formData);
    const json = JSON.stringify(data);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: json,
      });

      const result = await res.json();
      if (result.success) {
        e.target.reset();
        setSubmitted(true);
      } else {
        alert('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Submission failed. Check console for details.');
    }
  };

  return (
    <div>
      {/* Cover Image */}{/*}
 
      {docInfo.image.length > 0 && (    
      
      <div className=" w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-bl-[50px] rounded-br-[50px] ">
      {/* */}{/*}

          <img
            src={docInfo.image[0]}
            alt={docInfo.name}
            className="w-full h-full relative object-cover rounded-bl-[80px] rounded-br-[80px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className='absolute inset-0 flex items-center justify-center mb-14  px-4'>
       
  
          <motion.h1
            className="text-white text-3xl md:text-5xl font-sans font-bold text-center px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {docInfo.name}
          </motion.h1>
        </div>



</div>












  )}

*/}
{docInfo.image.length > 0 && (
  <div className="relative w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] rounded-bl-[50px] rounded-br-[50px] overflow-hidden">
    {/* Background Image */}
    <img
      src={docInfo.image[0]}
      alt={docInfo.name}
      className="w-full h-full object-cover rounded-bl-[80px] rounded-br-[80px]"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

    {/* Centered Name */}
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <motion.h1
        className="text-white text-2xl sm:text-3xl md:text-5xl font-sans font-bold text-center px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {docInfo.name}
      </motion.h1>
    </div>
  </div>
)}








   


   



      {/* Property Info */}
      <div className="mt-10 mx-4 sm:mx-6 md:mx-10 font-serif">
        <button className="border px-2 bg-gold text-white">
          {docInfo.type.charAt(0).toUpperCase() + docInfo.type.slice(1)}
        </button>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-2xl text-gray-500 font-bold font-sans">{docInfo.name}</h1>
          <span className="flex items-center text-black text-lg sm:text-xl gap-1 font-serif mt-2 sm:mt-0">
            <BiMap className="text-gold" />
            {docInfo.location}
          </span>
        </div>
      </div>

      <hr className="mt-10" />

      {/* Image Grid + Contact Form */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 mx-4 sm:mx-6 md:mx-10">
        {/* Left Side: Image Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 justify-center max-w-[600px] mx-auto">
            {imagesToShow.map((img, index) => (
              <div
                key={index}
                className="border rounded-tl-[50px] rounded-br-[50px] overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full h-36 sm:h-40 md:h-[150px]"
              >
                <img
                  src={img}
                  alt={`${docInfo.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                  onClick={() => setSelectedIndex(index)}
                />
              </div>
            ))}
          </div>

          {!showAll && docInfo.image.length > 4 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowAll(true)}
                className="px-4 py-2 bg-gold text-white rounded hover:bg-black transition font-serif"
              >
                View All Photos
              </button>
            </div>
          )}

          <div className="flex flex-col items-center bg-white shadow-md ml-[300px] w-[500px] rounded-lg p-6 mt-4 gap-2
  max-lg:ml-0 max-lg:w-[90%] max-lg:p-4 max-md:w-[95%] max-md:mt-2">
  
  <div className="flex gap-4 flex-wrap justify-center max-md:gap-2">
    {docInfo.amenities?.map((amenity, idx) => (
      <div 
        key={idx} 
        className="flex flex-col items-center gap-2 text-sm text-green-500 my-2 
        max-md:w-[45%] max-md:gap-1 max-md:my-1"
      >
        <img 
          src={amenity.icon} 
          alt={amenity.name}  
          className="w-12 h-12 object-contain mb-2 rounded-full bg-gold max-md:w-[60px] max-md:h-[50px]"
        />   
        <span className="text-center text-gray-600 font-serif text-sm max-md:text-xs">{amenity.name}</span>
      </div>
    ))}
  </div>

  <p className="text-black  text-lg mt-2 max-md:text-base">
    <span className="text-black font-serif">Price: AED</span> {docInfo.price}
  </p>
</div>

        </div>



        {/* Right Side: Contact Form */}
        <div className="flex-1 border bg-white shadow-xl mt-6 md:mt-[180px] rounded-bl-[80px] rounded-tr-[80px] p-4 md:p-6 max-w-[500px]">
          <h2 className="text-xl font-semibold mb-2 font-serif">Contact Agency</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="font-serif">Name:</label>
            <input type="text" name="name" placeholder="Enter Your Name" className="border p-2 rounded w-full" />
            <label className="font-serif">Phone:</label>
            <input type="number" name="phone" placeholder="Phone Number" className="border p-2 rounded w-full" />
            <label className="font-serif">Email:</label>
            <input type="email" name="email" placeholder="Email" className="border p-2 rounded w-full" />
            <label className="font-serif">Message:</label>
            <textarea name="message" placeholder="Message" className="border p-2 rounded w-full h-24" />
            <button
              type="submit"
              className="bg-gold text-white w-[200px] ml-10 sm:w-[200px] sm:ml-[130px] px-4 py-2 rounded hover:bg-black transition font-serif mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>


{/* Description & Features */}
<div className="flex flex-col md:flex-row items-center mt-10 justify-center bg-white p-6 md:p-10 shadow-lg rounded-2xl max-w-5xl mx-auto">
  {/* Image Section */}
  <div className="relative w-full md:w-1/2 flex">
    <div className="bg-yellow-600 w-6 rounded-l-2xl"></div>
    <img
      src={docInfo.image[0]}
      alt="Luxury Hotel Room"
      className="w-full h-80 md:object-cover rounded-r-2xl"
      style={{
        // Mobile: fixed height (h-80)
        // Desktop: dynamic height based on description length
        height:
          window.innerWidth >= 768
            ? docInfo.description?.length > 500
              ? "600px"
              : docInfo.description?.length > 250
              ? "450px"
              : "350px"



            : undefined,
        transition: "height 0.3s ease",
      }}
    />
  </div>

  {/* Description & Features */}
  <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-10">
    <p className="text-2xl text-black ">Property Details</p>
    {/*<p className="mt-3 text-sm font-serif text-gray-600"
         >{docInfo.description}</p>*/}
         <p
  className="mt-3 text-sm font-serif text-gray-600"
  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(docInfo.description) }}
/>



    

    <h1 className="font-serif text-2xl  text-black mt-4">Features</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
      {docInfo.features?.map((feature, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center bg-white text-black p-3 rounded-lg hover:scale-105 transition"
        >
          <img
            src={feature.icon}
            alt={feature.name}
            className="w-12 h-12 object-contain mb-2"
          />
          <span className="text-sm font-medium text-center text-gray-400
          ">
            {feature.name}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>



      <hr className="mt-10" />

      {/* Google Map */}
      {isLoaded && (
        <div className="mt-10 mx-4 sm:mx-6 md:mx-10">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <GoogleMap mapContainerStyle={mapContainerStyle} zoom={16} center={propertyPosition}>
            <Marker position={propertyPosition} onClick={() => setShowInfo(true)} />
            {showInfo && (
              <InfoWindow position={propertyPosition} onCloseClick={() => setShowInfo(false)}>
                <div>
                  <h2 className="font-bold">{docInfo.name}</h2>
                  <p>{docInfo.location}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      )}

      {/* Related Properties */}
      <div className="mt-6">
        <RelatedProp docId={docId} />
      </div>

      {/* Modal for Enlarged Images */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setSelectedIndex(null)}>
            <BiX />
          </button>
          <button className="absolute left-4 text-white text-4xl" onClick={handlePrev}>
            <BiLeftArrow />
          </button>
          <img
            src={docInfo.image[selectedIndex]}
            alt="Enlarged"
            className="max-h-[90%] max-w-[90%] rounded shadow-lg object-contain"
          />
          <button className="absolute right-4 text-white text-4xl" onClick={handleNext}>
            <BiRightArrow />
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertiesList;
