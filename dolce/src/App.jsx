import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import { Route,  Routes } from 'react-router-dom'
import Floating from './components/Floating'

import Footer from './components/Footer'
import About from './Pages/About'
import Contactus from './Pages/Contactus'
import Properties from './Pages/Properties'
import Project from './Pages/Project'
import Blog from './Pages/Blog'
import ScrollTop from './components/ScrollTop'
import PropertiesList from './Pages/PropertiesList'
import ProjectList from './Pages/ProjectList'
import BlogList from './Pages/BlogList'
import NewsLetter from './components/NewsLetter'
import ScrollSaver from './components/ScrollSaver'
import RestoreScroll from './components/RestoreScroll'
import Chat from './components/Chat'
import Privacy from './components/Privacy'
import Terms from './components/Terms'


const App = () => {
  return (
     <div className='overflow-x-hidden'>
      <Navbar />
       <ScrollTop/>
      <Routes>
     
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
              <Route path='/contactus' element={<Contactus />}/>
                 <Route path='/properties' element={<Properties />}/>
                  <Route path='/project' element={<Project />}/>
                  <Route path='/blog' element={<Blog />}/>
                  <Route path='/propertiesList/:docId' element={<PropertiesList/>}/>
                  <Route path ='/projectList/:docId' element={<ProjectList/>}/>
                  <Route path ='/blogList/:docId' element={<BlogList/>}/>
                     
                  <Route path='/privacy' element={<Privacy/>}/>
                   <Route path='/terms' element={<Terms/>}/>         
                  
      </Routes>
       <NewsLetter />
       <ScrollSaver/>
       <RestoreScroll/>
      <Floating />
 
    <Footer/>
    
    </div>
      
  )
}

export default App
