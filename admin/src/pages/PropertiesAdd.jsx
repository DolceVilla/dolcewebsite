



 import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendurl } from '../App';
import { toast } from 'react-toastify';

const PropertiesAdd = ({ token }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('rent');
  const [images, setImages] = useState([]);
  const [amenities, setAmenities] = useState([{ name: '', icon: null }]);
  const [features, setFeatures] = useState([{ name: '', icon: null }]);


  // --- Handlers ---
  const handleImageChange = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const handleAmenityChange = (index, field, value) => {
    const newAmenities = [...amenities];
    newAmenities[index][field] = value;
    setAmenities(newAmenities);
  };

  const handleFeatureChange = (index, field, value) => {
    const newFeatures = [...features];
    newFeatures[index][field] = value;
    setFeatures(newFeatures);
  };

  const addAmenity = () => setAmenities([...amenities, { name: '', icon: null }]);
  const addFeature = () => setFeatures([...features, { name: '', icon: null }]);

  // --- Submit Handler ---
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate names
    for (let i = 0; i < amenities.length; i++) {
      if (!amenities[i].name) return toast.error(`Amenity ${i + 1} must have a name`);
    }
    for (let i = 0; i < features.length; i++) {
      if (!features[i].name) return toast.error(`Feature ${i + 1} must have a name`);
    }

    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('location', location);
      formData.append('type', type);
      formData.append('date', Date.now());

      // --- Property images ---
      images.forEach((img, i) => {
        if (img) formData.append(`image${i}`, img); // match backend fieldname
      });

      // --- Amenities ---
      amenities.forEach((item, i) => {
        if (item.icon) formData.append(`amenityIcon${i}`, item.icon); // backend fieldname
      });
      formData.append('amenities', JSON.stringify(
        amenities.map(a => ({ name: a.name, icon: a.icon ? a.icon.name : null }))
      ));

      // --- Features ---
      features.forEach((item, i) => {
        if (item.icon) formData.append(`featureIcon${i}`, item.icon); // backend fieldname
      });
      formData.append('features', JSON.stringify(
        features.map(f => ({ name: f.name, icon: f.icon ? f.icon.name : null }))
      ));

      const response = await axios.post(`${backendurl}/api/properties/add`, formData, {
        headers: {
          token,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success('Property added successfully!');

        // Reset form
        setName('');
        setDescription('');
        setPrice('');
        setLocation('');
        setType('rent');
        setImages([]);
        setAmenities([{ name: '', icon: null }]);
        setFeatures([{ name: '', icon: null }]);
      } else {
        toast.error(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error while adding property');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      {/* Images */}
      <div>
        <p className="mb-2">Upload Images</p>
        <div className="flex gap-2">
          {[...Array(10)].map((_, index) => (
            <label key={index} htmlFor={`image${index}`}>
              <img
                className="w-20 h-20 object-cover border"
                src={!images[index] ? assets.upload : URL.createObjectURL(images[index])}
                alt=""
              />
              <input
                type="file"
                id={`image${index}`}
                hidden
                onChange={(e) => handleImageChange(index, e.target.files[0])}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Property Info */}
      <div className="w-full">
        <p className="mb-2">Property Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Blog Content (HTML allowed: use <h2>, <p>, <b> etc.)"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Price</p>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
            className="w-full max-w-[500px] px-3 py-2"
            placeholder="Enter amount"
            required
          />
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Location</p>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Enter location"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Type</p>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-[100px] px-3 py-2"
        >
          <option value="rent">Rent</option>
          <option value="sale">Sale</option>
        </select>
      </div>

      {/* Amenities */}
      <div className="w-full">
        <p className="mb-2">Amenities</p>
        {amenities.map((item, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Amenity Name"
              value={item.name}
              onChange={(e) => handleAmenityChange(i, 'name', e.target.value)}
              className="px-3 py-2"
              required
            />
            <input
              type="file"
              name={`amenityIcon${i}`}
              onChange={(e) => handleAmenityChange(i, 'icon', e.target.files[0])}
            />
          </div>
        ))}
        <button type="button" onClick={addAmenity} className="py-1 px-3 bg-gray-200 rounded">
          Add Amenity
        </button>
      </div>

      {/* Features */}
      <div className="w-full">
        <p className="mb-2">Features</p>
        {features.map((item, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Feature Name"
              value={item.name}
              onChange={(e) => handleFeatureChange(i, 'name', e.target.value)}
              className="px-3 py-2"
              required
            />
            <input
              type="file"
              name={`featureIcon${i}`}
              onChange={(e) => handleFeatureChange(i, 'icon', e.target.files[0])}
            />
          </div>
        ))}
        <button type="button" onClick={addFeature} className="py-1 px-3 bg-gray-200 rounded">
          Add Feature
        </button>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default PropertiesAdd;
