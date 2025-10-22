import express from 'express';
import { addTestimonial, listTestimonial, removeTestimonial, singleTestimonial } from '../controllers/testimonialController.js';

import upload from '../middleware/multer.js';


const testimonialRouter = express.Router();

testimonialRouter.post('/add',upload.any() ,addTestimonial)
testimonialRouter.get('/list',listTestimonial)
testimonialRouter.post('/remove', removeTestimonial)
testimonialRouter.get('/single', singleTestimonial)

export default testimonialRouter

