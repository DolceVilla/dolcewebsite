import React, { useEffect,useState  } from 'react'
import { createContext } from 'react'
import {  services} from '../assets/assets'
{/*import { property } from '../assets/assets2'*/}
import { projects } from '../assets/assets3'
{/*import { blogs } from '../assets/assets4'*/}

import { properties } from '../assets/assets'
import axios from 'axios'

export const AppContext =createContext()

export const AppContextProvider = (props) => {
    const currencySymbol ='AED'
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [testimonial,setTestimonial] =useState([]);
   const[developerLogo,setDeveloperLogp] = useState([]);
   const[blogs,setBlogs] = useState([]);
   const[property,setProperty] = useState([]);
    const getProductsData = async () =>{
      try {
        const response = await axios.get(backendUrl + '/api/testimonial/list')
        if(response.data.success){
          setTestimonial(response.data.testimonial)
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
        
      }
    }
  
    useEffect(() =>{
getProductsData()
    },[])

   const getDeveloperLogo = async ()=>{
    try{
      const response = await axios.get(backendUrl + '/api/developerLogo/list')
  if(response.data.success){
    setDeveloperLogp(response.data.developerLogo)
  }  else{
  toast.error(response.data.message)
  }
    } catch(error){
      console.log(error)
      toast.error(error.message)

    }
   }
   useEffect(()=>{
    getDeveloperLogo()
   },[])

   const getBlogs = async ()=>{
    try{
      const response = await axios.get(backendUrl + '/api/blog/list')
      if(response.data.success){
        setBlogs(response.data.blog)
      } else {
        toast.error(response.data.message)
      }
    } catch(error){
      console.log(error)
      toast.error(error.message)

    }
   }
   useEffect(()=>{
    getBlogs()
   },[])
const getProperty = async()=>{
  try{
    const response = await axios.get(backendUrl + '/api/properties/list')
if(response.data.success){
  setProperty(response.data.properties)
} else {
  toast.error(response.data.message)
}
}

  catch(error){
console.log(error)
toast.error(error.message)
  }
}
useEffect(()=>{
  getProperty()
},[])
    const value = {
       
        services,
        currencySymbol,
    // property,  
        projects,
       // blogs,*/}
        testimonial,
   developerLogo,
        backendUrl,
        blogs,
      properties,
        property

      
    }

  return (
  <AppContext.Provider value = {value}>
    {props.children}
  </AppContext.Provider>
  )
}

export default AppContextProvider
