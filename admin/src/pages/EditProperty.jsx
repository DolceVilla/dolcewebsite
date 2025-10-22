



import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { backendurl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const EditProperty = ({ token }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [images, setImages] = useState(Array(10).fill(null))
  const [property, setProperty] = useState({
    name: '',
    description: '',
    price: '',
    location: '',
    type: 'rent',
    amenities: [{ name: '', icon: null }],
    features: [{ name: '', icon: null }]
  })

  // Fetch property details
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.put(`${backendurl}/api/properties/update/${id}`, {
          headers: { token }
        })
        if (res.data.success) {
          const prop = res.data.property
          setProperty({
            name: prop.name || '',
            description: prop.description || '',
            price: prop.price || '',
            location: prop.location || '',
            type: prop.type || 'rent',
            amenities: prop.amenities || [{ name: '', icon: null }],
            features: prop.features || [{ name: '', icon: null }]
          })
          if (prop.images) {
            const imgs = [...images]
            prop.images.forEach((img, index) => { if (index < 10) imgs[index] = img })
            setImages(imgs)
          }
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
    fetchProperty()
    // eslint-disable-next-line
  }, [id])

  // Handle property input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setProperty({ ...property, [name]: value })
  }

  // Handle amenities and features change
  const handleAmenityChange = (index, field, value) => {
    const newAmenities = [...property.amenities]
    newAmenities[index][field] = value
    setProperty({ ...property, amenities: newAmenities })
  }

  const handleFeatureChange = (index, field, value) => {
    const newFeatures = [...property.features]
    newFeatures[index][field] = value
    setProperty({ ...property, features: newFeatures })
  }

  const addAmenity = () => setProperty({ ...property, amenities: [...property.amenities, { name: '', icon: null }] })
  const addFeature = () => setProperty({ ...property, features: [...property.features, { name: '', icon: null }] })

  // Handle image change
  const handleImageChange = (index, file) => {
    const newImages = [...images]
    newImages[index] = file
    setImages(newImages)
  }

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('name', property.name)
      formData.append('description', property.description)
      formData.append('price', property.price)
      formData.append('location', property.location)
      formData.append('type', property.type)
      formData.append('amenities', JSON.stringify(property.amenities))
      formData.append('features', JSON.stringify(property.features))

      images.forEach((img) => {
        if (img) formData.append('images', img)
      })

      const res = await axios.put(`${backendurl}/api/properties/update/${id}`, formData, {
        headers: { token, 'Content-Type': 'multipart/form-data' }
      })

      if (res.data.success) {
        toast.success('Property updated successfully')
        navigate('/properties')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Edit Property</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Images */}
       <div>
          <p className="mb-2">Images</p>
          <div className="flex gap-2 flex-wrap">
            {images.map((img, index) => (
              <label key={index}>
                <img
                  className="w-20 h-20 object-cover"
                  src={img instanceof File ? URL.createObjectURL(img) : img || assets.upload}
                  alt=""
                />
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleImageChange(index, e.target.files[0])}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Basic info */}
        <input type="text" name="name" value={property.name} onChange={handleChange} placeholder="Property Name" className="border p-2 rounded" required />
        <textarea name="description" value={property.description} onChange={handleChange} placeholder="Description" className="border p-2 rounded" required />
        <input type="number" name="price" value={property.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" required />
        <input type="text" name="location" value={property.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" required />
        <select name="type" value={property.type} onChange={handleChange} className="border p-2 rounded w-32">
          <option value="rent">Rent</option>
          <option value="sale">Sale</option>
        </select>

        {/* Amenities */}
       <div>
          <p className="mb-2">Amenities</p>
          {property.amenities.map((item, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input type="text" placeholder="Amenity Name" value={item.name} onChange={(e) => handleAmenityChange(i, 'name', e.target.value)} className="px-3 py-2" />
              <input type="file" onChange={(e) => handleAmenityChange(i, 'icon', e.target.files[0])} />
            </div>
          ))}
          <button type="button" onClick={addAmenity} className="py-1 px-3 bg-gray-200 rounded">Add Amenity</button>
        </div>

        {/* Features */}
        <div>
          <p className="mb-2">Features</p>
          {property.features.map((item, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input type="text" placeholder="Feature Name" value={item.name} onChange={(e) => handleFeatureChange(i, 'name', e.target.value)} className="px-3 py-2" />
              <input type="file" onChange={(e) => handleFeatureChange(i, 'icon', e.target.files[0])} />
            </div>
          ))}
          <button type="button" onClick={addFeature} className="py-1 px-3 bg-gray-200 rounded">Add Feature</button>
        </div>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-4">Update Property</button>
      </form>
    </div>
  )
}

export default EditProperty 




        