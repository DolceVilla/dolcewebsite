import express from 'express'
import cors from 'cors'
import 'dotenv/config'


import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import propertiesRouter from './routes/propertiesRoute.js'
import blogRouter from './routes/blogRoute.js'
import testimonialRouter from './routes/testimonialRoute.js'
import developerLogoRouter from './routes/developerLogoRoute.js'
import adminRouter from './routes/adminRoute.js'

//APP CONFIG

const app = express()
const port = process.env.PORT || 4000

connectDB()
connectCloudinary()


//MIDDEWARE
app.use(express.json())
app.use(cors())

app.use('/api/properties',propertiesRouter)
app.use('/api/blog',blogRouter)
app.use('/api/testimonial', testimonialRouter);
app.use('/api/developerLogo', developerLogoRouter)
app.use('/api/admin', adminRouter);
app.get('/',(req,res)=>{
    res.send("API WORKING")
    
})


app.listen(port, ()=>console.log('server started on port :' + port))