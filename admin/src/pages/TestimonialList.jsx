



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const TestimonialList = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(backendurl + '/api/testimonial/list', {
        headers: { token },
      });

      if (response.data.success) {
        setList(response.data.testimonial);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeTestimonial = async (id) => {
    try {
      const response = await axios.post(
        backendurl + '/api/testimonial/remove',
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList(); // Refresh list after delete
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Testimonial</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_5fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Name</b>
          <b>Message</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_5fr] md:grid-cols-[1fr_3fr_5fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
          >
            <p>{item.name}</p>
            <p className="truncate">{item.message}</p>
            <button
              onClick={() => removeTestimonial(item._id)}
              className="text-red-600 hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonialList;



 
