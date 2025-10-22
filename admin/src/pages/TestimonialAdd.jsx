import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';

const TestimonialAdd = ({ token }) => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('message', message);
    

      if (image) formData.append('image', image);

      const response = await axios.post(backendurl + '/api/testimonial/add', formData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success('Testimonial added successfully!');
        setName('');
        setMessage('');
        setImage(false);
      } else {
        toast.error(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error while adding testimonial');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      {/* Upload Image */}
      

      {/* Name */}
      <div className="w-full">
        <p className="mb-2">Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Enter name"
          required
        />
      </div>

      {/* Message */}
      <div className="w-full">
        <p className="mb-2">Message</p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Write testimonial here"
          required
        />
      </div>

      {/* Submit */}
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default TestimonialAdd;
