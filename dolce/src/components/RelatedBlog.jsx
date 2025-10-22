




import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const RelatedBlog = ({ docId }) => {
  const { blogs } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const filteredBlogs = blogs.filter((doc) => doc._id !== docId);
      setRelDoc(filteredBlogs);
    }
  }, [blogs, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 px-4 md:px-10 text-gray-900">
      <h1 className="text-3xl font-medium text-center">Related Blog</h1>
      <p className="sm:w-1/2 text-center text-sm text-gray-600">
        Latest Blogs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:ml-[250px] lg:grid-cols-4 gap-4 mt-8 w-full">
        {relDoc.slice(0, 3).map((item, index) => (
          <motion.div
            onClick={() => {
              navigate(`/blogList/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="border rounded-2xl border-black overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500"
            initial={{ y: 50, opacity: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            whileInView={{ y: 0, opacity: 1, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              className="w-full h-48 object-cover rounded-bl-[50px] transform transition-transform duration-500 hover:scale-105"
              src={item.image}
              alt={item.title}
            />
            <div className="p-4">
              
              <p className="text-gray-900 text-lg font-medium">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlog;
