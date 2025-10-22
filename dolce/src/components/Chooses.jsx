

import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Chooses = () => {
  const slideVariants = (direction) => ({
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  });

  const sections = [
    {
      icon: assets.Professionalism,
      image: assets.Professional,
      title: 'Professional Service',
      description:
        'We take a client-centric approach, prioritizing your needs at every stage of the buying or selling journey.',
      imgClass: 'rounded-bl-[200px]',
      iconMargin: 'lg:ml-[120px]',
      titleMargin: 'lg:ml-[50px]',
      descMargin: 'lg:ml-[50px]',
    },
    {
      icon: assets.Realestate,
      image: assets.Investment,
      title: 'Property Investment',
      description:
        'Our experienced team offers expert guidance to help you make informed property investment decisions.',
      imgClass: 'rounded-tl-[150px] rounded-br-[80px]',
      iconMargin: 'lg:ml-[150px]',
      titleMargin: 'lg:ml-[80px]',
      descMargin: 'lg:ml-[60px]',
      reverse: true, // zigzag layout for desktop
    },
    {
      icon: assets.Trust,
      image: assets.Guidance,
      title: 'Reliable Guidance',
      description:
        'Expert legal and financial support for smooth, hassle-free transactions.',
      imgClass: 'rounded-tr-[200px]',
      iconMargin: 'lg:ml-[120px]',
      titleMargin: 'lg:ml-[50px]',
      descMargin: 'lg:ml-[50px]',
    },
    {
      icon: assets.Enterprise,
      image: assets.Managment,
      title: 'Property Management',
      description:
        'Our property management services safeguard your investment and maximize its potential.',
      imgClass: 'rounded-bl-[100px] rounded-tr-[80px]',
      iconMargin: 'lg:ml-[150px]',
      titleMargin: 'lg:ml-[80px]',
      descMargin: 'lg:ml-[60px]',
      reverse: true,
    },
  ];

  return (
    <div className="relative p-8 bg-white w-full">
      <div className="flex flex-col items-center gap-4 my-16 text-center lg:mx-10">
        <motion.h1 className="text-lg font-semibold text-black font-serif"initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}>WHY WE CHOOSE US</motion.h1>
        <motion.h1 className="text-4xl font-medium text-gold font-serif"
        initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}>Dolce Villas Real Estate</motion.h1>

        {sections.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } items-center gap-6 mt-10 p-4 lg:p-8`}
          >
            {/* Text + Icon */}
            <motion.div
              className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 font-serif`}
              variants={slideVariants('left')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className={`w-24 h-24 ${item.iconMargin}`}
              />
              <h2 className={`text-3xl font-bold text-gray-800 font-serif ${item.titleMargin}`}>
                {item.title}
              </h2>
              <p
                className={`text-gray-600 text-center text-xl lg:text-left font-serif ${item.descMargin}`}
              >
                {item.description}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="w-full lg:w-[600px] mt-6 lg:mt-0"
              variants={slideVariants('right')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-auto shadow-lg ${item.imgClass}`}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chooses;



