import testimonialModel from '../models/testimonialModel.js';

const addTestimonial = async (req, res) => {

  
  try {
    const { testimonialId, name, message } = req.body || {}

    let testimonial;

    if (testimonialId) {
      testimonial = await testimonialModel.findById(testimonialId);
      if (!testimonial) {
        return res.status(404).json({ success: false, message: "Testimonial not found" });
      }

      testimonial.name = name || testimonial.name;
      testimonial.message = message || testimonial.message;

      await testimonial.save();
    } else {
      testimonial = new testimonialModel({
        name,
        message,
        date:Date.now()
      });

      await testimonial.save();
    }

    res.json({ success: true, message: "Testimonial saved", testimonial });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


const listTestimonial = async (req, res) =>{
    try {
        const testimonial = await testimonialModel.find({});
        res.json({success:true, testimonial})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const removeTestimonial = async (req, res) => {
    try{
        await testimonialModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Testimonial remover"})
    } catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const singleTestimonial = async (req,res) =>{
    try {
        const {testimonialId} = req.body
        const testimonial = await testimonialModel.findById(testimonialId)
        res.json({success:true, testimonial})
    } catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export { addTestimonial, listTestimonial ,removeTestimonial, singleTestimonial};
