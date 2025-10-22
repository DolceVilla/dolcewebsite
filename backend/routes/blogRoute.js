import express from 'express';
import { addBlog, listBlog, removeBlog, singleBlog, updateBlog } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';

const blogRouter = express.Router();

blogRouter.post('/add', upload.any(),addBlog);
blogRouter.get('/list', listBlog)
blogRouter.post('/remove',removeBlog)
blogRouter.get('/single', singleBlog)
blogRouter.put('/update/:id', upload.any(), updateBlog)
export default blogRouter;