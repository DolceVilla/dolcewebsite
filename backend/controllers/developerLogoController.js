import { v2 as cloudinary } from "cloudinary";
import developerLogoModel from "../models/developerLogoModel.js";

const addDeveloperLogo = async (req, res) =>{
    try {
        const {logoId } =req.body;

        const imagesFiles = req.files.filter(file => file.fieldname.startsWith('image'));

        const newImagesUrl = await Promise.all(
            imagesFiles.map(async (file) => {
                const result = await cloudinary.uploader.upload(file.path, { resource_type: 'image'})
                return result.secure_url;
            })
        );


        let developerLogo;
        if(logoId){
            developerLogo = await developerLogoModel.findById(logoId);

            if(!developerLogo){
                return res.status(404).json({success:false, message: "logo not found"})
            }

            developerLogo.image = developerLogo.image.concat(newImagesUrl);

            await developerLogo.save();
        } else {
            developerLogo = new developerLogoModel({
                image: newImagesUrl,
                date: Date.now()
            });
        await developerLogo.save();
        }
        res.json({success:true,message:"Developer logos added successfuly", developerLogo})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}



const listDeveloperLogo = async (req, res) =>{
    try {
        const developerLogo = await developerLogoModel.find({});
        res.json({success:true, developerLogo})
    } catch (error) {
        console.log(error)
            res.json({success: false, message: error.message})
        
    }
}

const removeDeveloperLogo = async (req, res) =>{
    try {
        await developerLogoModel.findByIdAndDelete(req.body.id)
        res.json({ success:true, message: " logo deleted successfully "})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message
        })
    }
}

{/*const singleDeveloperLogo = async(req,res) =>{
    try {
        const {logoId} =  req.body;
        const developerLogo =await developerLogoModel.findById(logoId)
        res.json({success:true, developerLogo})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}*/}

const singleDeveloperLogo = async (req,res) => {
    try {
        const { id } = req.query;
        const logo = await developerLogoModel.findById(id);
        if (!blog) {
            return res.status(404).json({ success: false, message:"logo not found"})
        }
        res.json({ success: true, blog});
    } catch (error){
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


const updateLogo = async (req,res) =>{
    try {
        const {existingImages} = req.body;
        const { id } = req.params;
        let logo = await developerLogoModel.findById(id);
        if(!logo) {
            return res.status(404).json({ success: false, message: "Logo not found"});
        }

        const imageFiles = req.files ? req.files.filter(file => file.fieldname.startsWith("image")) : [];


    const newImagesUrl = await Promise.all(
        imageFiles.map(async (file) => {
            const result = await cloudinary.uploader.upload(file.path, { resource_type: "image"});
            return result.secure_url;
        })
    );

    logo.image = [
        ...(Array.isArray(existingImages) ? existingImages: []),
        ...newImagesUrl,

    ];
    await logo.save();

    res.json({ success: true, message: "Logo updated successfully", logo});
    } catch(error){
        console.log(error);
        res.json({ success: false, message: error.message});
    }
}




export { addDeveloperLogo, listDeveloperLogo,removeDeveloperLogo, singleDeveloperLogo, updateLogo}