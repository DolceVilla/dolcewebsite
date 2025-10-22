import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendurl } from '../App';

const BlogAdd = ({ token }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  // Handle image upload
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || images.length === 0) {
      toast.error("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    images.forEach((img) => formData.append('image', img));

    try {
      const res = await axios.post(backendurl + "/api/blog/add", // replace with your backend endpoint
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`, // if you use token
          },
        }
      );
      toast.success("Blog added successfully!");
      setTitle('');
      setContent('');
      setImages([]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add blog");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Add Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
      
        
         <textarea
          placeholder="Blog Content (HTML allowed: use <h2>, <p>, <b> etc.)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded"
          rows={6}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default BlogAdd;
