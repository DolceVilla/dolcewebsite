import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BlogList = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  // Fetch all blogs
  const fetchList = async () => {
    try {
      const response = await axios.get(backendurl + '/api/blog/list', {
        headers: { token },
      });
      if (response.data.success) {
        setList(response.data.blog);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Delete a blog
  const removeBlog = async (id) => {
    try {
      const response = await axios.post(
        backendurl + '/api/blog/remove',
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Navigate to edit blog page
  const editBlog = (id) => {
    navigate(`/blog/update/${id}`);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2'>All Blogs</p>
      <div className='flex flex-col gap-2'>
        {/* Header */}
       <div className='hidden md:grid grid-cols-[1fr_3fr_5fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Title</b>
          <b>Content</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Blog List */}
       {list.map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-[1fr_3fr_5fr] md:grid-cols-[1fr_3fr_5fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
          >
            <img
              className='w-12 h-12 object-cover'
              src={item.image[0]}
              alt={item.name}
            />
            <p>{item.title}</p>
            <p className='truncate'>{item.content}</p>

            {/* Actions */}
            <div className='flex justify-end md:justify-center gap-2'>
              <button
                onClick={() => editBlog(item._id)}
                className='text-blue-600 hover:underline text-sm'
              >
                Edit
              </button>
              <button
                onClick={() => removeBlog(item._id)}
                className='text-red-600 hover:underline text-sm'
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList; 


