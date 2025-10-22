import mongoose from "mongoose";


const developerLogoSchema = new mongoose.Schema({
    image:{ type: Array, required:true},

 date:{type:Number, required:true}})

const developerLogoModel = mongoose.models.developerLogo || mongoose.model("developerLogo",developerLogoSchema);
export default developerLogoModel