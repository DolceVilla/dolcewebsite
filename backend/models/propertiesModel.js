import mongoose from "mongoose";


const propertiesSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String, required:true},
    price:{type:Number,required:true},
    image:{type: Array, required:true},
    location:{type: String, required:true},
    type:{type: String, enum:["rent", "sale"],required:true},
    amenities:[
        {
            name:{type:String, required:true},
            icon:{type:String, required:true}
        }
    ],
    

    features:[
        {
            name:{ type: String, required: true},
            icon: { type: String, required: true}
        }
    ], 

   

    date:{type:Number, required:true}

})

const propertiesModel = mongoose.models.properties || mongoose.model("properties", propertiesSchema);


export default propertiesModel