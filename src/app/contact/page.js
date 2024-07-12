'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { TbPhone, TbMail  } from "react-icons/tb";
import { FaFacebookF, FaInstagram ,FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";


export default function page() {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9n7vmtu', 'template_5izp1ko', form.current, {
        publicKey: 'ujii2DgAeyiLzWqKn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='sm:w-[65%] w-[80%] mx-auto sm:mb-80'>
    <motion.div 
    initial={{ opacity: 0, translateY: 50}}
    animate={{ opacity: 1, translateY: 0}}
    transition={{ duration: 0.5 }}>
    <div >
      <div className='mx-auto text-center'>
        <h1 className='sm:text-8xl text-5xl font-extrabold text-gray-200  sm:py-24  pt-24 '>CONTACT</h1>
        <h1 className=' sm:-translate-y-[168px] text-gray-700 sm:text-5xl text-2xl font-extrabold'>GET IN <span className='text-yellow-500'>TOUCH</span></h1>
      </div>
</div>


<div className='sm:flex gap-8'>
  <div className='sm:w-1/3'>
    <h1 className='uppercase text-gray-600 sm:text-2xl text-xl sm:pt-0 pt-8 pb-8 font-bold'>feel free to contact me</h1>
    <p className='text-gray-600 pb-5'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
    <div className='flex items-center gap-3 pb-4'>
      <TbMail  size={44} className=' text-yellow-500'/>
      <div>
        <p className='text-gray-400'>MAIL ME</p>
        <p  className='text-gray-600 font-bold'>kajolkibria95@gmail.com</p>
      </div>
    </div>
    <div className='flex items-center gap-3'>
      <TbPhone size={44} className='text-yellow-500'/>
      <div>
        <p className='text-gray-400'>Call ME</p>
        <p  className='text-gray-600 font-bold'>01402874542</p>
      </div>
    </div>
      <div className='flex gap-4 py-6'>
        <a className=' p-3 bg-gray-100 text-gray-600 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200' href='https://github.com/Kajol-Kibria'><FaGithub  size={20}/></a>
        <a className=' p-3 bg-gray-100 text-gray-600 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200' href='https://www.facebook.com/kajol.kibria.77'><FaFacebookF  size={20}/></a>
        <a className=' p-3 bg-gray-100 text-gray-600 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200' href='https://www.instagram.com/kajolkibria07/'><FaLinkedinIn  size={20}/></a>
        <a className=' p-3 bg-gray-100 text-gray-600 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200' href='https://www.linkedin.com/in/kajol-kibria-8b2004252/'><FaInstagram  size={20}/></a>
      </div>
  </div>
  <div className='sm:w-2/3'>
  <form ref={form} onSubmit={sendEmail}>
      <div className='sm:flex gap-5 space-y-5 sm:space-y-0'>
        <input name="from_name" type='text' placeholder='Your subject' className='w-full border border-gray-400 py-3 pr-3 pl-5 outline-none focus:border-yellow-500 focus:placeholder-white transition-all duration-200 rounded-full'/>
        <input name="user_name"  type='text' placeholder='Your name' className='w-full border border-gray-400 py-3 pr-3 pl-5 outline-none focus:border-yellow-500 focus:placeholder-white  transition-all duration-200 rounded-full'/>
        <input name="user_email" type='email' placeholder='Your email' className='w-full border border-gray-400 py-3 pr-3 pl-5 outline-none focus:border-yellow-500 focus:placeholder-white transition-all duration-200 rounded-full'/>
      </div>
      <textarea name="user_message" placeholder='Your subject' className='py-3 pr-3 pl-5 my-8 w-full h-44 border border-gray-400 outline-none focus:border-yellow-500 focus:placeholder-white transition-all duration-200 rounded-3xl '/>
      <button type="submit" value="Send" className='group uppercase text-sm text-gray-600 flex gap-3 items-center py-2 px-4 border  border-yellow-500 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200 font-bold active:scale-90 mb-12'>send message <RiSendPlaneFill className='text-yellow-500 group-hover:text-white  transition-all duration-200' size={28}/></button>
  </form>
</div>
</div>
</motion.div>
</div>
  )
}
