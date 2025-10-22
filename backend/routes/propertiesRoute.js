import express from 'express';
import { addProperties, listProperties, removeProperties, singleProperties,updateProperties } from '../controllers/propertiesController.js';
import upload from '../middleware/multer.js';

const propertiesRouter = express.Router();

// Accept any file field
propertiesRouter.post('/add', upload.any(), addProperties);
propertiesRouter.get('/list',listProperties)
propertiesRouter.post('/remove',removeProperties)
propertiesRouter.get('/single',singleProperties)
propertiesRouter.put('/update/:id', upload.any(),updateProperties)

export default propertiesRouter;
