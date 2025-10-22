import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

import { BiLeftArrow, BiRightArrow, BiX } from 'react-icons/bi'
import { motion } from 'framer-motion'




const ProjectList = () => {
  const { docId } = useParams()
  const { projects } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const doc = projects.find(doc => doc._id === docId)
    setDocInfo(doc)
  }, [projects, docId])

  const handlePrev = () => {
    setSelectedIndex(prev => (prev === 0 ? docInfo.images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedIndex(prev => (prev === docInfo.images.length - 1 ? 0 : prev + 1))
  }

  if (!docInfo) return null

  const imagesToShow = showAll ? docInfo.images : docInfo.images.slice(0, 4)

  return (
    <div>
      
      {/* Section 1: Cover Image */}
      {docInfo.images.length > 0 && (
        <div className="w-full h-[400px] sm:h-[500px]  overflow-hidden rounded-lg relative">
          <img
            src={docInfo.images[0]}
            alt={docInfo.name}
            className="w-full h-full object-fill"
          />
          <div className="absolute top-0 left-0 w-full h-[800px]"></div>
         
        </div>
      )}
<div className='mt-10 ml-10 mr-10'>
  <button className='border px-2 bg-gold text-white'>RENTING</button>
  <br /> <br />
  <div className="flex justify-between items-center">
    <h1 className='text-4xl font-bold'>Studio Apartment For Rent</h1>
    <span className="text-black text-4xl">Location:<br/>Dunes</span>
  </div>
</div>
<hr className='mt-10'/>

      {/* Section 2: Image Grid + Contact Form */}
      <div className="flex mt-10 mr-[200px] flex-col md:flex-row gap-6">
        {/* Left Side: Image Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 justify-center max-w-[600px] mx-auto">
            {imagesToShow.map((img, index) => (
              <div
                key={index}
                className="border rounded-tl-[50px] rounded-br-[50px] overflow-hidden cursor-pointer hover:scale-105 transition-transform w-[300px] h-[150px]"
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

          {/* View All Photos Button */}
          {!showAll && docInfo.images.length > 4 && (
       <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowAll(true)}
                className="px-4 py-2 bg-gold text-white rounded hover:bg-black transition"
              >
                View All Photos
              </button>
            </div>
          )}
<br/>
          {/* Icons, Name, and Price under the grid */}
        <h1 className='text-3xl text-bold ml-[100px]'>OVERVIEW</h1>
         <br/>
          <div className="flex flex-col items-center bg-white shadow-md  ml-[300px] w-[500px] rounded-lg p-6 mt-4 gap-2">
           
            <div className="flex gap-4 ">
              {docInfo.icons && docInfo.icons[0] && (
                 <div className="flex flex-col items-center border rounded-[200px] bg-gold p-2 hover:bg-gray-300 cursor-pointer">
            <img src={docInfo.icons[0]} alt='washroomicon'  className="w-10 h-10 "/>   
          </div>
      )}
  <span className='mt-4'> 2 washroom</span>
      {docInfo.icons && docInfo.icons[0] && (
                 <div className="flex flex-col items-center border rounded-[200px] bg-gold p-2  hover:bg-gray-300 cursor-pointer">
            <img src={docInfo.icons[1]} alt='washroomicon'  className="w-10 h-10 "/>   
          </div>
      )}


            </div>
        
            <p className="text-gold font-bold text-lg"><span className='text-black'>Price:</span>{docInfo.price}</p>
          </div>
     
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 border bg-white shadow-xl mt-[180px] rounded-tr-[100px] rounded-bl-[80px]  p-4 rounded-lg bg-white max-w-md">
          <h2 className="text-xl font-semibold mb-2">Contact Agency</h2>
          <form className="flex flex-col gap-4">
            <label>Name:</label>
            <input type="text" placeholder="Enter Your Name" className="border p-2 rounded " />
            <label>Phone</label>
            <input type='number' placeholder='Phone Number' className="border p-2 rounded "/>
            <label>Email:</label>
            <input type="email" placeholder="Email" className="border p-2 rounded " />
           <label>Message:</label>
            <textarea placeholder="Message" className="border p-2 rounded w-full h-24" />
            <button
              type="submit"
              className="bg-gold text-white w-[200px] ml-[100px] px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    <h1 className='text-3xl ml-[100px] mt-[100px] font-bold'>AMENITIES AND FEATURES</h1>

{/* One big box */}
 <div className='bg-black  text-white shadow-xl rounded-lg p-5 ml-[100px] mt-8 w-[800px]'>
  {/* Grid inside the single box */}
  <div className='grid grid-cols-4 grid-rows-2 gap-2'>
    <div className='flex items-center justify-center'>Amenity 1</div>
    <div className='flex items-center justify-center'>Amenity 2</div>
    <div className='flex items-center justify-center'>Amenity 3</div>
    <div className='flex items-center justify-center'>Amenity 4</div>
    <div className='flex items-center justify-center'>Amenity 5</div>
    <div className='flex items-center justify-center'>Amenity 6</div>
    <div className='flex items-center justify-center'>Amenity 7</div>
    <div className='flex items-center justify-center'>Amenity 8</div>
    
  </div>
  
</div>
<hr className='mt-10 text-2xl'/>


      {/* Section 3: Related Properties */}
  

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
            src={docInfo.images[selectedIndex]}
            alt="Enlarged"
            className="max-h-[90%] max-w-[90%] rounded shadow-lg object-contain"
          />
          <button className="absolute right-4 text-white text-4xl" onClick={handleNext}>
            <BiRightArrow />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectList






