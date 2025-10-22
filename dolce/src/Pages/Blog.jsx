

import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { assets4 } from '../assets/assets4';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const { blogs } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [visibleCount, setVisibleCount] = useState(4); // show 4 initially
  const navigate = useNavigate();

  // Update filteredBlogs when blogs change
  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  // Load more blogs
  const loadMore = () => setVisibleCount(prev => prev + 4);

  // Search function
  const handleSearch = () => {
    const results = blogs.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(results);
    setVisibleCount(4); // reset visible count after search
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative overflow-hidden h-[500px] mt-[50px] md:mt-[70px] lg:mt-[100px]">
        <img
          src={assets4.blogcover}
          className="w-full h-full object-cover rounded-bl-[100px] rounded-br-[100px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center mb-12 px-4">
          <motion.h1
            className="text-gold text-3xl md:text-5xl font-serif font-bold text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            BLOG
          </motion.h1>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-6">
          {/* Search Bar */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none text-sm sm:text-base"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-gold text-white rounded-lg hover:bg-blue-700"
            >
              Search
            </button>
          </div>

          {/* Latest Blogs */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-lg font-semibold">Latest Blogs</h2>
            {filteredBlogs.length === 0 ? (
              <p className="text-gray-500">No blogs found.</p>
            ) : (
              filteredBlogs.slice(0, 8).map((item) => (
                <motion.div
                  key={item._id}
                  onClick={() => navigate(`/blogList/${item._id}`)}
                  className="flex items-center gap-3 border-b pb-2 cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-medium">{item.title}</h3>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredBlogs.slice(0, visibleCount).map((item) => (
              <motion.div
                key={item._id}
                onClick={() => navigate(`/blogList/${item._id}`)}
                className="block border rounded-lg overflow-hidden shadow hover:shadow-md transition cursor-pointer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <h3 className="p-3 font-medium">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredBlogs.length && (
            <div className="text-center mt-6">
              <button
                onClick={loadMore}
                className="px-6 py-2 bg-gold text-white rounded-lg hover:bg-black"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;


