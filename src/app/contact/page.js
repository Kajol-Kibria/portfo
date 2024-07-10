'use client'
import React from 'react'
import { motion } from "framer-motion";
export default function page() {
  return (
    <div className='w-[85%] mx-auto'>
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    
    >
      
    <div >
      <div className='mx-auto text-center'>
        <h1 className='sm:text-8xl text-5xl font-extrabold text-gray-200  sm:py-24  pt-24 '>CONTACT</h1>
        <h1 className=' sm:-translate-y-[168px] text-gray-700 sm:text-5xl text-2xl font-extrabold'>GET IN <span className='text-yellow-500'>TOUCH</span></h1>
      </div>
</div>
</motion.div>

<div>anything</div>
</div>
  )
}
