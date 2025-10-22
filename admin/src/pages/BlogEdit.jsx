
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { backendurl } from "../App";

const BlogEdit = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  // Fetch blog details
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${backendurl}/api/blog/single`, {
          headers: { Authorization: `Bearer ${token}` },
          params: { id }, // send id as query
        });

        if (res.data.success) {
          const blog = res.data.blog;
          setTitle(blog.title || "");
          setContent(blog.content || "");
          setImages(blog.images || []); // preload existing images
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch blog details");
      }
    };

    fetchBlog();
  }, [id, token]);

  // Handle image upload
  const handleImageChange = (e) => {
    const newFiles = [...e.target.files].filter(
      (file) => !images.some((img) => img?.name === file.name)
    );
    setImages((prev) => [...prev, ...newFiles]);
  };

  // Handle image remove
  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error("Title and Content are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    images.forEach((img) => {
      if (img instanceof File) {
        formData.append("image", img); // new images
      } else {
        formData.append("existingImages[]", img); // existing image URLs
      }
    });

    try {
      const res = await axios.put(`${backendurl}/api/blog/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        toast.success("Blog updated successfully!");
        navigate("/blogs");
      } else {
        toast.error(res.data.message || "Failed to update blog");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating blog");
    }
  };

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Images */}
        <div>
          <p className="mb-2">Images</p>
          <div className="flex gap-2 flex-wrap">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img instanceof File ? URL.createObjectURL(img) : img}
                  alt="blog"
                  className="w-24 h-24 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="border p-2 rounded mt-2"
          />
        </div>

        {/* Title */}
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />

        {/* Content */}
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded"
          rows={6}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded mt-3"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default BlogEdit;






 
  

