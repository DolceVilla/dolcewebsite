import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosAdd } from 'react-icons/io';
import { FaList } from 'react-icons/fa';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className='w-[18%] min-h-screen ml-10 border-r-2'>
      <h1 className='text-center mt-4 font-bold text-2xl'>Dashboard</h1>
      <div className='flex flex-col gap-2 ml-0 pt-6 text-xl'>
        {/* Properties */}
        <div>
          <button
            className='flex justify-center items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l w-full hover:bg-black hover:text-white'
            onClick={() => toggleMenu('properties')}
          >
            Properties
          </button>
          {openMenu === 'properties' && (
            <div className='flex flex-col mt-1 gap-1'>
           <NavLink to='/properties/add' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
               <IoIosAdd className='bg-gray border rounded-2xl w-[30px] h-[30px]'/> Add Properies
              </NavLink> 
              <NavLink to='/properties/list' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
               <FaList className=' '/> List Properties
              </NavLink>
            </div>
          )}
        </div>

        {/* Projects */}
        <div>
          <button
            className='flex justify-center items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l w-full hover:bg-black hover:text-white'
            onClick={() => toggleMenu('projects')}
          >
            Projects
          </button>
          {openMenu === 'projects' && (
            <div className='flex flex-col mt-1 gap-1'>
           <NavLink to='' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
             
            <IoIosAdd className='bg-gray border rounded-2xl w-[30px] h-[30px]'/>    Add Project
              </NavLink>
              <NavLink to='/projects/list' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
             <FaList />   List Projects
              </NavLink>
            </div>
          )}
        </div>

        {/*BLOGS*/}
        <div>
          <button
            className='flex justify-center items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l w-full hover:bg-black hover:text-white'
            onClick={() => toggleMenu('blog')}
          >
            Blogs
          </button>
          {openMenu === 'blog' && (
            <div className='flex flex-col mt-1 gap-1'>
              <NavLink to='/blog/add' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
            <IoIosAdd className='bg-gray border rounded-2xl w-[30px] h-[30px]' />    Add Blog
              </NavLink>
              <NavLink to='/blog/list' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
             <FaList />   List Blog
              </NavLink>
            </div>
          )}
        </div>


        {/* Testimonial */}
       <div>
          <button
            className='flex justify-center items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l w-full hover:bg-black hover:text-white'
            onClick={() => toggleMenu('testimonial')}
          >
            Testimonial
          </button>
          {openMenu === 'testimonial' && (
            <div className='flex flex-col mt-1 gap-1'>
              <NavLink to='/testimonial/add' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
            <IoIosAdd className='bg-gray border rounded-2xl w-[30px] h-[30px]' />    Add Testimonial
              </NavLink>
              <NavLink to='/testimonial/list' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
             <FaList />   List Testimonials
              </NavLink>
            </div>
          )}
        </div>

        {/* Developer Logo */}
       <div>
          <button
            className='flex justify-center items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l w-full hover:bg-black hover:text-white'
            onClick={() => toggleMenu('developer')}
          >
            Developer Logo
          </button>
          {openMenu === 'developer' && (
            <div className='flex flex-col mt-1 gap-1'>
              <NavLink to='/logos/add' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
              <IoIosAdd className='bg-gray border rounded-2xl w-[30px] h-[30px]' />  Add Developer
              </NavLink>
              <NavLink to='/logos/list' className='flex items-center justify-center gap-2 px-3 py-1 hover:bg-gray-200 rounded hover:bg-black hover:text-white'>
           <FaList />     List Developers
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 


