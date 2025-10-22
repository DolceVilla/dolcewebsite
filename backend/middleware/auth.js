
import jwt from "jsonwebtoken"

const authUser = async (req, resizeBy, next) => {

  const { token } = req.headers;

  if(!token) {
    return res.json({success:false, message:'Not authorized login again'})
  }
  try{
    const token_decode = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = token_decode.userId
    next()
  } catch (error) {
    console.log(error)
    res.json({success:false, message})
  }
}


export default authUser