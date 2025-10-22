import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { assets } from './assets/assets'


export const backendurl = import.meta.env.VITE_BACKEND_URL
console.log("Backend URL:", backendurl);

import Login from './components/Login'
import { Link, Route ,Routes,useLocation} from 'react-router-dom'
import PropertiesAdd from './pages/PropertiesAdd'
import PropertiesList from './pages/PropertiesList'
import EditProperty from './pages/EditProperty'
import BlogAdd from './pages/BlogAdd'
import BlogList from './pages/BlogList'
import BlogEdit from './pages/BlogEdit'
import LogoAdd from './pages/LogoAdd'
import LogoList from './pages/LogoList'
import TestimonialAdd from './pages/TestimonialAdd'
import TestimonialList from './pages/TestimonialList'

const App = () => {

  const [token, setToken]  = useState(localStorage.getItem('token')? localStorage.getItem('token'): '');

  useEffect(()=> {
    localStorage.setItem('token', token)
  },[token])
const location = useLocation()  // Get current route

  // Determine if we are on the home page (root) to show images
  const showImagesSection = location.pathname === '/' || location.pathname === ''



  return (
    <div>
      <ToastContainer autoClose={3000}/>
      {token === ""
      ? <Login setToken={setToken}/>
      : <>
      <Nav setToken={setToken} />
      <hr />

   
      <div className='flex w-full'>
      <Sidebar />
   {/*}   <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'> */}
     <div className='w-[64%] mx-4 my-8 text-gray-600 text-base'>
        <Routes>
          <Route path='/properties/add' element={<PropertiesAdd token={token}/>} />
          <Route path='/properties/list' element={<PropertiesList token={token}/>} />
          <Route path='/properties/update/:id' element={<EditProperty token={token}/>}/>
          <Route path='/blog/add' element={<BlogAdd token={token}/>} />
          <Route path='/blog/list' element={<BlogList token={token}/>}/>
          <Route path='/blog/update/:id' element={<BlogEdit token={token}/>}/>
          <Route path='/logos/add' element={<LogoAdd token={token}/>} />
          <Route path='/logos/list' element={<LogoList token={token}/>} />
          <Route path='/testimonial/add' element={<TestimonialAdd token={token}/>}/>
         <Route path='/testimonial/list' element={<TestimonialList token={token}/>}/>          
      
      
        </Routes>


         {/* Images section in main content */}
           {showImagesSection && (
            <>
           <h1 className="text-2xl font-bold mb-6 text-center">Managment Overview</h1>
              <div className="grid grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <div className="flex flex-col items-center border rounded-lg shadow-md p-4">
              <Link to='/properties/list'>    <img src={assets.property} alt="img1" className="rounded mb-2" /></Link>
                  <h2 className="font-semibold text-center">Properties</h2>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center border rounded-lg shadow-md p-4">
                  <img src={assets.project} alt="img2" className="rounded mb-2" />
                  <h2 className="font-semibold text-center">Projects</h2>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center border rounded-lg shadow-md p-4">
                  <img src={assets.blog} alt="img3" className="rounded mb-2" />
                  <h2 className="font-semibold text-center">Blogs</h2>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center border rounded-lg shadow-md p-4">
                  <img src={assets.testimonial} alt="img4" className="rounded mb-2" />
                  <h2 className="font-semibold text-center">Testimonial</h2>
                </div>

                {/* Card 5 */}
                <div className="flex flex-col items-center border rounded-lg shadow-md p-4">
                  <img src={assets.logos} alt="img5" className="rounded mb-2 h-[210px] w-full" />
                  <h2 className="font-semibold text-center">Developer Logos</h2>
                </div>

                

              </div>
              </>
           )}
     
      </div>
     
      </div>
       </>




      }
      
    </div>

  )
}

export default App
