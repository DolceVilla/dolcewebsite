import { v2 as cloudinary } from "cloudinary";
import propertiesModel from "../models/propertiesModel.js";

const addProperties = async (req, res) => {
  try {
    const { propertyId, name, description, price, location, type, amenities, features } = req.body;

    // req.files is an array, filter files
    const imagesFiles = req.files.filter(file => file.fieldname.startsWith('image'));
    const amenityIconsFiles = req.files.filter(file => file.fieldname.startsWith('amenityIcon'));
    const featureIconsFiles = req.files.filter(file => file.fieldname.startsWith('featureIcon'));

    // Upload new images to Cloudinary
    const newImagesUrl = await Promise.all(
      imagesFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    // Parse amenities/features JSON
  
    const amenitiesArray = JSON.parse(req.body.amenities);
const featuresArray = JSON.parse(req.body.features);


    // Upload amenity icons to Cloudinary
  {/*}  await Promise.all(
      amenitiesArray.map(async (item, index) => {
        if (amenityIconsFiles[index]) {
          const result = await cloudinary.uploader.upload(amenityIconsFiles[index].path, { resource_type: 'image' });
          item.icon = result.secure_url;
        }
      })
    );*/}
await Promise.all(
  amenitiesArray.map(async (item, index) => {
    if (amenityIconsFiles[index]) {
      const result = await cloudinary.uploader.upload(amenityIconsFiles[index].path, { resource_type: 'image' });
      item.icon = result.secure_url;  // ✅ URL stored in DB
    }
  })
);




    // Upload feature icons to Cloudinary
    await Promise.all(
      featuresArray.map(async (item, index) => {
        if (featureIconsFiles[index]) {
          const result = await cloudinary.uploader.upload(featureIconsFiles[index].path, { resource_type: 'image' });
          item.icon = result.secure_url;
        }
      })
    );

    let property;

    if (propertyId) {
      // If property exists, update it and append new images
      property = await propertiesModel.findById(propertyId);

      if (!property) {
        return res.status(404).json({ success: false, message: "Property not found" });
      }

      property.name = name || property.name;
      property.description = description || property.description;
      property.price = price ? Number(price) : property.price;
      property.location = location || property.location;
      property.type = type || property.type;
      property.image = property.image.concat(newImagesUrl); // append new images
      property.amenities = amenitiesArray.length ? amenitiesArray : property.amenities;
      property.features = featuresArray.length ? featuresArray : property.features;

      await property.save();
    } else {
      // Create new property
      property = new propertiesModel({
        name,
        description,
        price: Number(price),
        location,
        type,
        image: newImagesUrl,
        amenities: amenitiesArray,
        features: featuresArray,
        date: Date.now()
      });

      await property.save();
    }

    res.json({ success: true, message: "Property saved", property });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


{/*const listProperties = async(req,res) =>{
    try {
        const properties = await propertiesModel.find({});
        res.json({success:true,properties})
    }  catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}*/}

const listProperties = async(req,res) =>{
    try {
        // Sort by date descending so newest properties come first
        const properties = await propertiesModel.find({}).sort({ date: -1 });
        res.json({success:true,properties})
    } catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


const removeProperties = async(req,res)=>{
  try{
    await propertiesModel.findByIdAndDelete(req.body.id)
    res.json({success:true, message:"product removed"})


    
  } catch (error){
    console.log(error)
    res.json({success:false,message:error.message})
  }
}

const singleProperties = async(req,res)=>{
  try{
    const {propertyId} = req.body
    const properties = await propertiesModel.findById(propertyId)
    res.json({success:true,properties})
  } catch(error){
    console.log(error)
    res.json({success:false, message:error.message})
  }
}


{/* update section */}


 const updateProperties = async (req, res) => {
  try {
    const { name, description, price, location, type, amenities, features } = req.body;
    const { id } = req.params;  // Get ID from URL

    // Find property first
    let property = await propertiesModel.findById(id);
    if (!property) {
      return res.status(404).json({ success: false, message: "Property not found" });
    }

    // Filter files
    const imagesFiles = req.files ? req.files.filter(file => file.fieldname.startsWith('image')) : [];
    const amenityIconsFiles = req.files ? req.files.filter(file => file.fieldname.startsWith('amenityIcon')) : [];
    const featureIconsFiles = req.files ? req.files.filter(file => file.fieldname.startsWith('featureIcon')) : [];

    // Upload new images to Cloudinary
    const newImagesUrl = await Promise.all(
      imagesFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    // Parse amenities/features JSON
    const amenitiesArray = amenities ? JSON.parse(amenities) : [];
    const featuresArray = features ? JSON.parse(features) : [];

    // Upload amenity icons
    await Promise.all(
      amenitiesArray.map(async (item, index) => {
        if (amenityIconsFiles[index]) {
          const result = await cloudinary.uploader.upload(amenityIconsFiles[index].path, { resource_type: 'image' });
          item.icon = result.secure_url;
        }
      })
    );

    // Upload feature icons
    await Promise.all(
      featuresArray.map(async (item, index) => {
        if (featureIconsFiles[index]) {
          const result = await cloudinary.uploader.upload(featureIconsFiles[index].path, { resource_type: 'image' });
          item.icon = result.secure_url;
        }
      })
    );

    // Update property fields
    property.name = name || property.name;
    property.description = description || property.description;
    property.price = price ? Number(price) : property.price;
    property.location = location || property.location;
    property.type = type || property.type;
    if (newImagesUrl.length) property.image = property.image.concat(newImagesUrl);
    if (amenitiesArray.length) property.amenities = amenitiesArray;
    if (featuresArray.length) property.features = featuresArray;

    await property.save();

    res.json({ success: true, message: "Property updated successfully", property });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}; 







export{ addProperties, listProperties, removeProperties, singleProperties, updateProperties}