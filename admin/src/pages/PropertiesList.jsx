


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import EditProperty from './EditProperty';

const PropertiesList = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(backendurl + '/api/properties/list', {
        headers: { token },
      });
      if (response.data.success) {
        setList(response.data.properties);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProperties = async (id) => {
    try {
      const response = await axios.post(
        backendurl + '/api/properties/remove',
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

  const editProperties = (id) => {
    navigate(`/properties/update/${id}`);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2'>All Properties List</p>
      <div className='flex flex-col gap-2'>
        {/* Header */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_2fr_2fr_2fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Location</b>
          <b>Amenities</b>
          <b>Features</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Properties List */}
        {list.map((item, index) => (
          <div
            className='grid grid-cols-[1fr_3fr_2fr] md:grid-cols-[1fr_3fr_2fr_2fr_2fr_1fr] items-center gap-2 py-1 px-2 border text-sm'
            key={index}
          >
            <img className='w-12 h-12 object-cover' src={item.image[0]} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.location}</p>

            {/* Amenities */}
            <div className='flex flex-wrap gap-1'>
              {item.amenities?.map((a, i) => (
                <span key={i} className='text-xs bg-gray-200 px-1 rounded flex items-center gap-1'>
                  {a.icon && <img src={a.icon} alt={a.name} className='w-3 h-3' />}
                  {a.name}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className='flex flex-wrap gap-1'>
              {item.features?.map((f, i) => (
                <span key={i} className='text-xs bg-gray-200 px-1 rounded flex items-center gap-1'>
                  {f.icon && <img src={f.icon} alt={f.name} className='w-3 h-3' />}
                  {f.name}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className='flex justify-end md:justify-center gap-2'>
              <button
                onClick={() => editProperties(item._id)}
                className='text-blue-600 hover:underline text-sm'
              >
                Edit
              </button>
              <button
                onClick={() => removeProperties(item._id)}
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

export default PropertiesList;

