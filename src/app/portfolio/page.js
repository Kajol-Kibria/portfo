'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { IoArrowForwardCircle } from "react-icons/io5";





export default function page() {
  return (
    <div className='sm:w-[65%] w-[80%] mx-auto sm:mb-56'>
    <motion.div 
    initial={{ opacity: 0, translateY: 50}}
    animate={{ opacity: 1, translateY: 0}}
    transition={{ duration: 0.5 }}>

    <div className='w-[85%] mx-auto'>
    <div className='mx-auto text-center'>
        <h1 className='sm:text-8xl text-5xl font-extrabold text-gray-200  sm:py-20  pt-24 '>WORKS</h1>
        <h1 className=' sm:-translate-y-[152px] text-gray-700 sm:text-5xl text-2xl font-extrabold'>MY <span className='text-yellow-500'>PORTFOLIO</span></h1>
      </div>
</div>

<div className='grid grid-cols-1 sm:grid-cols-3 gap-10 py-10 sm:py-0'>
<div className='hover:scale-110 transition-all duration-300'>
      <a href='https://fudo-kibria.vercel.app'>
        <div className='sm:relative group'> 
          <Image className='rounded-xl ' src='/Screenshot_6.png' alt='' height={400} width={400}/>
        <div className='flex items-center justify-center rounded-xl group-hover:bg-yellow-500 sm:absolute h-full w-full -top-14 group-hover:top-0 transition-all duration-300 opacity-0 hover:opacity-100'>
        <p className='flex items-center gap-1 text-xl font-bold text-gray-100 '>Visit <IoArrowForwardCircle className='group-hover:rotate-0 -rotate-90   transition-all duration-300 delay-500'/></p>
        </div>
        
        </div>
       
        </a>
      </div>
<div className='hover:scale-110 transition-all duration-300'>
      <a href='https://cobalten.vercel.app'>
        <div className='sm:relative group'> 
          <Image className='rounded-xl ' src='/Screenshot_5.png' alt='' height={400} width={400}/>
        <div className='flex items-center justify-center rounded-xl group-hover:bg-yellow-500 sm:absolute h-full w-full -top-14 group-hover:top-0 transition-all duration-300 opacity-0 hover:opacity-100'>
        <p className='flex items-center gap-1 text-xl font-bold text-gray-100 '>Visit <IoArrowForwardCircle className='group-hover:rotate-0 -rotate-90   transition-all duration-300 delay-500'/></p>
        </div>
        
        </div>
       
        </a>
      </div>
    <div className='hover:scale-110 transition-all duration-300'>
      <a href='https://onlyburg.vercel.app'>
        <div className='sm:relative group'> 
          <Image className='rounded-xl' src='/Screenshot_1.png' alt='' height={400} width={400}/>
        <div className='flex items-center justify-center rounded-xl group-hover:bg-yellow-500 sm:absolute h-full w-full -top-14 group-hover:top-0 transition-all duration-300 opacity-0 hover:opacity-100'>
        <p className='flex items-center gap-1 text-xl font-bold text-gray-100 '>Visit <IoArrowForwardCircle className='group-hover:rotate-0 -rotate-90   transition-all duration-300 delay-500'/></p>
        </div>
        
        </div>
       
        </a>
      </div>
    <div className='hover:scale-110 transition-all duration-300'>
      <a href='https://kibria-tau.vercel.app'>
        <div className='sm:relative group'> 
          <Image className='rounded-xl ' src='/Screenshot_4.png' alt='' height={400} width={400}/>
        <div className='flex items-center justify-center rounded-xl group-hover:bg-yellow-500 sm:absolute h-full w-full -top-14 group-hover:top-0 transition-all duration-300 opacity-0 hover:opacity-100'>
        <p className='flex items-center gap-1 text-xl font-bold text-gray-100 '>Visit <IoArrowForwardCircle className='group-hover:rotate-0 -rotate-90   transition-all duration-300 delay-500'/></p>
        </div>
        
        </div>
       
        </a>
      </div>
    <div className='hover:scale-110 transition-all duration-300'>
      <a href='https://naraz-phi.vercel.app'>
        <div className='sm:relative group'> 
          <Image className='rounded-xl ' src='/Screenshot_3.png' alt='' height={400} width={400}/>
        <div className='flex items-center justify-center rounded-xl group-hover:bg-yellow-500 sm:absolute h-full w-full -top-14 group-hover:top-0 transition-all duration-300 opacity-0 hover:opacity-100'>
        <p className='flex items-center gap-1 text-xl font-bold text-gray-100 '>Visit <IoArrowForwardCircle className='group-hover:rotate-0 -rotate-90   transition-all duration-300 delay-500'/></p>
        </div>
        
        </div>
       
        </a>
      </div>
    <div className='hover:scale-110 transition-all duration-300'>
      <a href='https://kibsa.netlify.app'>
        <div className='sm:relative group'> 
          <Image className='rounded-xl ' src='/Screenshot_2.png' alt='' height={400} width={400}/>
        <div className='flex items-center justify-center rounded-xl group-hover:bg-yellow-500 sm:absolute h-full w-full -top-14 group-hover:top-0 transition-all duration-300 opacity-0 hover:opacity-100'>
        <p className='flex items-center gap-1 text-xl font-bold text-gray-100 '>Visit <IoArrowForwardCircle className='group-hover:rotate-0 -rotate-90   transition-all duration-300 delay-500'/></p>
        </div>
        
        </div>
       
        </a>
      </div>
    
    
</div>
</motion.div>
</div>
  )
}
