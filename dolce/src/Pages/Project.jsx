import React, { useEffect, useState, useContext } from 'react'
import { assets } from '../assets/assets'
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from 'react-icons/bi'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const Project = () => {
  const navigate = useNavigate()
  const {  projects } = useContext(AppContext)
  const [filterprops, setFilterProps] = useState([])
  const [visibleCount, setVisibleCount] = useState(6) // Show 4 items initially

  useEffect(() => {
    setFilterProps( projects)
  }, [ projects])

  // Function to load more properties
  const loadMore = () => {
    setVisibleCount(prev => prev + 4)
  }

  return (
    <div>
      {/* Top Banner Section */}
      <div className="relative overflow-hidden h-[500px] mt-[100px]">
        <img src={assets.coverproject} className="w-full h-full object-cover rounded-bl-[100px] rounded-br-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-4 relative bottom-[400px] sm:-mt-45">
          <div className="bg-white mt-12 p-4 border border-slate-600 rounded-lg text-black">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              {/* Location and Property Type */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1 p-2 rounded-lg md:!bg-transparent">
                  <h1 className="font-bold">Location</h1>
                  <div className="flex items-center gap-x-2">
                    <BiMap />
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 outline-none"
                      placeholder="Enter location of the property"
                    />
                  </div>
                </div>

                <div className="flex-1 p-2 rounded-lg md:!bg-transparent">
                  <h1 className="font-bold">Property Type</h1>
                  <div className="flex items-center gap-x-2">
                    <BiBuildings />
                    <select className="w-full bg-transparent border-0 outline-none text-slate-500">
                      <option value="condors">Condors</option>
                      <option value="office buildings">Office Buildings</option>
                      <option value="apartments">Apartments</option>
                      <option value="mansions">Mansions</option>
                      <option value="real estate">Real Estate</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="living room">Living Room</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Price Range and For */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1 p-2 rounded-lg md:!bg-transparent">
                  <h1 className="font-bold">Price range</h1>
                  <div className="flex items-center gap-x-2">
                    <BiMoney />
                    <select className="w-full bg-transparent border-0 outline-none text-slate-500">
                      <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                      <option value="$80,000 - $120,000">$80,000 - $120,000</option>
                      <option value="$120,000 - $200,000">$120,000 - $200,000</option>
                      <option value="$200,000 - $300,000">$200,000 - $300,000</option>
                      <option value="$300,000 - $500,000">$300,000 - $500,000</option>
                      <option value="$500,000 - $1000,000">$500,000 - $1000,000</option>
                    </select>
                  </div>
                </div>

                <div className="flex-1 p-2 rounded-lg md:!bg-transparent">
                  <h1 className="font-bold">For</h1>
                  <div className="flex items-center gap-x-2">
                    <BiBriefcase />
                    <select className="w-full bg-transparent border-0 outline-none text-slate-500">
                      <option value="sell">Sell</option>
                      <option value="rent">Rent</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="w-full mt-0 bg-gold md:w-fit">
                <button className="w-full md:w-fit bg-yellow-500 hover:bg-black text-white text-lg font-bold py-8 px-10 border-0">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties List */}
      <div className='w-1/2 ml-[450px] mt-10 grid grid-cols-3 gap-4 gap-y-6'>
        {filterprops.slice(0, visibleCount).map((item, index) => (
          <div
            onClick={() => navigate(`/projectList/${item._id}`)}
            className='border border-black shadow-xl rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
            <img
              className='rounded-bl-[80px] mt-2 px-2 w-full h-48 object-cover rounded-tl-2xl'
              src={item.images[0]}
              alt=""
            />
            <div className='p-4'>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
             
              <hr className='my-2' />
              <p className='text-gray-900 text-lg font-medium'>AED {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filterprops.length ? (
        <div className='flex justify-center mt-8'>
          <button
            onClick={loadMore}
            className='bg-yellow-500 hover:bg-black text-white font-bold py-3 px-6 rounded-lg transition-all duration-300'
          >
            Load More
          </button>
        </div>
      ) : (
        filterprops.length > 0 && (
          <div className='flex justify-center mt-8'>
            <p className='text-gray-600 font-medium'>No more properties to show</p>
          </div>
        )
      )}
    </div>
  )
}

export default Project

