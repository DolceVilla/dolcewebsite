



import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendurl } from '../App';

const LogoAdd = ({ token }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      toast.error("Please select images");
      return;
    }

    const formData = new FormData();
    images.forEach((img) => formData.append('image', img));

    try {
      setLoading(true);
      await axios.post(
        backendurl + "/api/developerLogo/add",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Developer logo added successfully!");
      setImages([]); // Clear selected images
    } catch (error) {
      console.error(error);
      toast.error("Failed to add developer logo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Add Developer Logo</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 rounded flex items-center justify-center ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? "Adding..." : "Add Developer Logo"}
        </button>
      </form>
    </div>
  );
};

export default LogoAdd;
