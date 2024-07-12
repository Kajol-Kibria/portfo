'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";


export default function Hero() {
  return (
    <div className='w-full h-screen content-center sm:mb-20'>
      <Image className='sm:hidden pb-10' src='/hero.jpg' alt='hero' height={1100}  width={1100}/>
    <div className='sm:w-[65%] w-[80%] mx-auto flex items-center justify-center my-auto'>
    <motion.div 
    initial={{ opacity: 0, translateX: -50}}
    animate={{ opacity: 1, translateX: 0}}
    transition={{ duration: 0.5 }}>
       <div className=''>

       <div className='flex items-center gap-6'>
        <div className='hidden sm:block w-10 h-1 bg-yellow-500 rounded-full'></div>
        <div>
          <h1 className='text-5xl py-3  font-bold uppercase text-yellow-500'>i&apos;m kajol kibria</h1>
        </div>
        
      </div>
          <h1 className='sm:text-4xl text-xl font-bold uppercase text-gray-600'>front-end web developer</h1>
          <p className='text-gray-500 text-sm sm:w-[60%] py-4'>I&apos;m a Bangladeshi front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that can ease our life.</p>
          <Link href='/about' className='w-fit my-4 text-center group uppercase text-sm text-gray-600 flex gap-3 items-center py-2 px-4 border  border-yellow-500 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200 font-bold active:scale-90'>more about me <IoArrowForwardOutline className='text-yellow-500 group-hover:text-white  transition-all duration-200' size={18}/></Link>
    
       </div>
       </motion.div>
       <motion.div 
    initial={{ opacity: 0, translateX: 50}}
    animate={{ opacity: 1, translateX: 0}}
    transition={{ duration: 0.5 }}>
      
       <div className='hidden sm:block'>
        <Image src='/hero.jpg' alt='hero' height={1100}  width={1100}/>
      </div>
      </motion.div>
    </div>
      
    </div>
  )
}
