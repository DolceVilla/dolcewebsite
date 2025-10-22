




import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {

 const boxVariantsDown = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  }

  const boxVariantsUp = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  }

  return (
    <div>
      {/* Hero Section */}
 {/*}     <div className="relative overflow-hidden h-[500px] mt-[100px] ">*/}
 <div className='relative overflow-hidden h-[500px] mt-[50px] md:mt-[70px] lg:mt-[100px]'>
        <img
          src={assets.about2}
          className="w-full h-[500px] object-cover rounded-bl-[100px] rounded-br-[100px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center mb-12 px-4">
          <motion.h1
            className="text-gold text-3xl md:text-5xl font-serif font-bold text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Dolce Villas Real Estate
          </motion.h1>
        </div>
      </div>
       <motion.h1 className='font-serif text-center mt-10 text-4xl font-bold text-gold'   initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}> ABOUT US</motion.h1>
      {/* About Us Section */}
      <div className="relative mt-[50px] md:mt-[80px] lg:mt-[100px] px-4 md:px-8 lg:ml-[400px] flex flex-col md:flex-col lg:flex-row items-center h-auto lg:h-[600px]"
      
      >
        {/* Image */}
       
        <motion.div className="w-full md:w-full lg:w-[600px] h-[250px] md:h-[350px] lg:h-full mb-6 lg:mb-0 relative"
          initial={{ x: -150, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
        >
          <img
            src={assets.aad}
            alt="About"
            className="w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px]"
          />
        </motion.div>

        {/* Text Box */}
        <motion.div className="w-full md:w-[90%] lg:w-[500px] bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg relative lg:absolute lg:top-[100px] lg:left-1/3"
         initial={{ x: 150, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm md:text-base lg:text-base font-serif">
            Founded with a vision to redefine real estate services, Dolce Villas brings together a team of seasoned professionals dedicated to providing a seamless and exceptional experience. Our commitment to personalized service, market expertise, and fast response makes us the go-to choice for all your real estate needs.
          </p>
        </motion.div>
      </div>

      {/* Our Mission Section */}
      <motion.h1 className="flex font-serif items-center justify-center mt-10 text-gold text-3xl md:text-4xl lg:text-4xl font-bold text-center px-4"
      initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}>
        Our Mission
      </motion.h1>

   {/*}   <div className="relative flex flex-col md:flex-col lg:flex-row items-center justify-center mt-6 md:mt-10 lg:mt-[100px] px-4 md:px-8 lg:px-20">*/}
   <div className="relative flex flex-col md:flex-col lg:flex-row items-center justify-center mt-6 md:mt-10 lg:mt-[100px] px-4 md:px-8 lg:px-20">
        {/* Image */}
      <motion.div className="w-full md:w-full lg:w-1/2 h-[250px] md:h-[350px] lg:h-[500px] mb-6 lg:mb-0"
       initial={{ x: 150, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}>
    
          <img
            src={assets.About6}
            alt="Mission"
            className="w-full h-full object-cover rounded-tr-[100px] rounded-bl-[100px]"
          />
        </motion.div>

        {/* Text Box */}
        <motion.div className="w-full  md:w-[90%] lg:w-1/3 h-auto  bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg flex items-center lg:absolute lg:mr-[700px] lg:top-[50px] "
          initial={{ x: -150, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}>
        
          <p className="text-gray-500 text-sm md:text-base lg:text-base font-serif">
            We handle every aspect of your real estate journey from start to finish, ensuring transparency, trust, and satisfaction. Our mission is to deliver successful results for our clients, building lasting relationships and becoming a trusted partner in their real estate endeavors.
            <br />
            We believe in building trust, offering tailored solutions, and delivering unmatched support. Whether you’re buying, selling, or investing, Dolce Villas is here to guide you every step of the way. We analyze market trends, provide insightful advice, and ensure smooth, successful transactions. Trust Dolce Villas Real Estate Brokers LLC for a premium and reliable real estate experience. Your dream property is just a step away.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative overflow-hidden h-[500px] mt-[100px]">
        <img
          src={assets.About7}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/100 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <motion.h1 className="text-gold text-2xl md:text-2xl lg:text-3xl font-bold font-serif" initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}>
            Why Choose Us <br />
            <span className="text-4xl md:text-4xl text-white font-serif">What Makes Dolce Villas Real Estate Stand Out</span>
          </motion.h1>
        </div>
      </div>

      <div className="text-center px-4 mt-10">
        <motion.h5 className="text-gold text-sm md:text-base lg:text-xl font-serif font-bold"initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}>
          "We are committed to delivering exceptional real estate experiences.
          <br />
          Our expert team, backed by extensive market knowledge, supports you at every stage of your property journey.
          <br />
          With a client-centric approach, we prioritize your unique goals, leveraging our expertise and resources to turn your vision into reality."
        </motion.h5>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 max-w-4xl mx-auto mt-10 px-4">
        <motion.div className="h-[400px] rounded-tl-[100px] flex flex-col items-center justify-center text-white text-xl font-bold p-6 md:p-8 lg:p-12 shadow-lg bg-gradient-to-b from-yellow-500 to-black"
        variants={boxVariantsDown}
        initial="hidden"
        whileInView="visible"
        >
          <img src={assets.Professionalism} alt="Professionalism" />
          <h1 className="text-black text-3xl mt-2 font-serif">Professional Service</h1>
          <p className="text-white text-sm md:text-base lg:text-l mt-2 font-serif">
            We take a client-centric approach, prioritizing your needs at every stage of the buying or selling journey.
          </p>
        </motion.div>
        <motion.div className="h-[400px] rounded-tr-[100px] flex flex-col items-center justify-center text-white text-xl font-bold p-6 md:p-8 lg:p-12 shadow-lg bg-gradient-to-b from-yellow-500 to-black"
        variants={boxVariantsDown}
        initial="hidden"
        whileInView="visible">
          <img src={assets.Realestate} alt="Property Investment" />
          <h1 className="text-black text-3xl mt-2 font-serif">Property Investment</h1>
          <p className="text-white text-sm md:text-base lg:text-l mt-2 font-serif">
            Our experienced team offers expert guidance to help you make informed property investment decisions.
          </p>
        </motion.div>
        <motion.div className="h-[400px] rounded-bl-[100px] flex flex-col items-center justify-center text-white text-xl font-bold p-6 md:p-8 lg:p-12 shadow-lg bg-gradient-to-b from-yellow-500 to-black relative"
         variants={boxVariantsUp}
        initial="hidden"
        whileInView="visible">
          <img src={assets.Trust} alt="Reliable Guidance" />
          <h1 className="text-black text-3xl mt-2 font-serif">Reliable Guidance</h1>
          <p className="text-white text-sm md:text-base lg:text-l mt-2 font-serif">
            Expert legal and financial support for smooth, hassle-free transactions.
          </p>
        </motion.div>
        <motion.div className="h-[400px] rounded-br-[100px] flex flex-col items-center justify-center text-white text-xl font-bold p-6 md:p-8 lg:p-12 shadow-lg bg-gradient-to-b from-yellow-500 to-black relative"
         variants={boxVariantsUp}
        initial="hidden"
        whileInView="visible">
          <img src={assets.Enterprise} alt="Property Management" />
          <h1 className="text-black text-3xl mt-2 font-serif">Property Management</h1>
          <p className="text-white text-sm md:text-base lg:text-l mt-2 font-serif">
            Our property management services safeguard your investment and maximize its potential.
          </p>
        </motion.div>
      </div>
      <br/><br/>
    </div>
  )
}

export default About




