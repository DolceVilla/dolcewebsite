


import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { BiUpArrow } from 'react-icons/bi';
import Chat from './Chat';

const Floating = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='fixed bottom-5 right-4 flex flex-col gap-3 z-50'>

      {/* Scroll to top arrow */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className='bg-gold text-white p-3 rounded-full shadow-lg hover:scale-110 transition'
        >
          <BiUpArrow className='w-5 h-5' />
        </button>
      )}

      {/* WhatsApp */}
      <a href='https://wa.me/971524299495' rel="noopener noreferrer" className='bg-gold text-white p-3 rounded-full shadow-lg hover:scale-110 transition'>
        <FaWhatsapp className='w-5 h-5' />
      </a>

      {/* Email */}
      <a href='mailto:info@thedolcevillas.com' className='bg-gold text-white p-3 rounded-full shadow-lg hover:scale-110 transition'>
        <MdEmail className='w-5 h-5' />
      </a>

      {/* Phone */}
      <a href='tel:+971524299495' className='bg-gold text-white p-3 rounded-full shadow-lg hover:scale-110 transition'>
        <BsTelephoneFill className='w-5 h-5' />
      </a>
  <Chat />
    </div>
  )
}

export default Floating;

