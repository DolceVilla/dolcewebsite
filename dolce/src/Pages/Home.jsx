import React from 'react'
import Hero from '../components/hero'
import Banner from '../components/banner'
import Service from '../components/Service'
import Location from '../components/Location'
import Chooses from '../components/Chooses'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Testimonial from '../components/Testimonial'
import Logos from '../components/logos'
import Layout from '../components/Layout'
import AboutUs from '../components/AboutUs'
import Subscribe from '../components/Subscribe'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutUs />
      <Banner />
      <Service />
       
   <Chooses />

   <Contact />

   <Testimonial/>
  <Faq />
  <Logos />
<Subscribe/>
     
    </div>
  )
}

export default Home
