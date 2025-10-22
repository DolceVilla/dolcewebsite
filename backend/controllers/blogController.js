import { v2 as cloudinary } from "cloudinary";
import blogModel from "../models/blogModel.js";

const addBlog = async (req, res) => {
  try {
    const { blogId, title, content } = req.body;

    const imagesFiles = req.files.filter(file => file.fieldname.startsWith('image'));

    const newImagesUrl = await Promise.all(
      imagesFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    let blog;

    if (blogId) {
      blog = await blogModel.findById(blogId);
      if (!blog) {
        return res.status(404).json({ success: false, message: "Blog not found" });
      }
      blog.title = title || blog.title;
      blog.content = content || blog.content;
      blog.image = blog.image.concat(newImagesUrl)
      await blog.save();
    } else {
      blog = new blogModel({
        title,
        content,
        image: newImagesUrl,
          date: Date.now()
      });
      await blog.save();
    }

    res.json({ success: true, message: "Blog saved", blog });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


{/*const listBlog = async (req,res) =>{
  try{
    const blog =  await blogModel.find({});
      res.json({success:true,blog})
    
  } catch(error){
    console.log(error);
    res.json({success:false,message:error.message})
  }
} */}


const listBlog = async(req,res) =>{
    try {
        // Sort by date descending so newest properties come first
        const blog = await blogModel.find({}).sort({ date: -1 });
        res.json({success:true,blog})
    } catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


const removeBlog = async (req, res) => {
  try {
    await blogModel.findByIdAndDelete(req.body.id); // use req.body.id
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


{/*const singleBlog = async (req,res) =>{

  try{
    const {blogId} = req.body
    const blog = await blogModel.findById(blogId)
    res.json({success:true,blog})
  } catch(error){
    console.log(error)
    res.json({success:false, message:error.message})
  }
} /*}
{/* single*/}

const singleBlog = async (req, res) => {
  try {
    const { id } = req.query; // ✅ use query instead of body for GET
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }
    res.json({ success: true, blog });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};










{ /* update section*/}

{/*const updateBlog = async (req,res) => {
  try {
    const { title, image, content} = req.body;
    const { id } = req.params;

    let blog = await blogModel.findById(id);
    if(!blog){
      return res.status(404).json({ success: false, message: "blog is not found"});
    }

    // filter files
    const imageFiles = req.files ? req.files.filter(file => file.fieldname.startsWith('image')) : [];

    // upload new images in cloudlinary
    const newImagesUrl = await Promise.all(
      imageFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image'});
        return result.secure_url;
      })
    );
    // update blog

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    if (newImagesUrl.length) blog.image = blog.image.concat(newImagesUrl)

      await blog.save();

      res.json({ success: true, message: "blog updated successfully", blog});
  } catch (error){
    console.log(error);
    res.json({success: false, message: error.message})
  }
} */}

const updateBlog = async (req, res) => {
  try {
    const { title, content, existingImages } = req.body; // ✅ keep existing images
    const { id } = req.params;

    let blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    // filter uploaded files
    const imageFiles = req.files ? req.files.filter(file => file.fieldname.startsWith("image")) : [];

    // upload new images to Cloudinary
    const newImagesUrl = await Promise.all(
      imageFiles.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    // ✅ final images = ones kept by user + new uploads
    blog.image = [
      ...(Array.isArray(existingImages) ? existingImages : []),
      ...newImagesUrl,
    ];

    blog.title = title || blog.title;
    blog.content = content || blog.content;

    await blog.save();

    res.json({ success: true, message: "Blog updated successfully", blog });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};







export  { addBlog, listBlog ,removeBlog, singleBlog, updateBlog};
