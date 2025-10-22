




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';

const LogoList = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendurl}/api/developerLogo/list`, {
        headers: { token },
      });

      console.log("API Response:", response.data);

      if (response.data.success) {
        setList(response.data.developerLogo || []);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeLogo = async (id) => {
    try {
      const response = await axios.post(
        `${backendurl}/api/developerLogo/remove`,
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

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Logos</p>
      <div className="flex flex-col gap-2">
        {/* Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b className="text-center">Action</b>
        </div>

        {/* Logo List */}
        {list.length > 0 ? (
          list.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-[1fr_3fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            >
              <img
                className="w-12 h-12 object-cover"
                src={item.image?.[0] || ''}
                alt={item._id || 'Logo'}
              />

              {/* Actions */}
              <div className="flex justify-end md:justify-center gap-2">
                <button
                  onClick={() => removeLogo(item._id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-4">No logos found.</p>
        )}
      </div>
    </>
  );
};

export default LogoList;
