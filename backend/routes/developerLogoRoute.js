import express from "express";
import { addDeveloperLogo, listDeveloperLogo, removeDeveloperLogo, singleDeveloperLogo, updateLogo } from "../controllers/developerLogoController.js";
import upload from "../middleware/multer.js";

const developerLogoRouter = express.Router();

developerLogoRouter.post('/add', upload.any(),addDeveloperLogo)
developerLogoRouter.get('/list', listDeveloperLogo)
developerLogoRouter.post('/remove', removeDeveloperLogo)
developerLogoRouter.get('/single', singleDeveloperLogo)
developerLogoRouter.put('/update/:id', upload.any(), updateLogo)


export default developerLogoRouter;