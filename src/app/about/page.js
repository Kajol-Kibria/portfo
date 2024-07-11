'use client'
import React from 'react'
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function page() {
  return (
    <div className='sm:w-[65%] w-[80%] mx-auto'>
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      <div className='w-[85%] mx-auto'>
      <div className='mx-auto text-center'>
        <h1 className='sm:text-8xl text-5xl font-extrabold text-gray-200  sm:py-24  pt-24 '>RESUME</h1>
        <h1 className=' sm:-translate-y-[168px] text-gray-700 sm:text-5xl text-2xl font-extrabold pb-24 sm:pb-0'>ABOUT <span className='text-yellow-500'>ME</span></h1>
      </div>
      </div>
    </motion.div>


    <div className='sm:flex justify-between items-center'>
      <div className='sm:w-[50%] '>
        <h1 className='text-2xl text-gray-600 font-bold pb-5'>PERSONAL INFOS</h1>
        <div className='sm:flex gap-20'> 
          <div >
        <p className='py-3 text-md  text-gray-500 font-semibold'>First Name : <span className='text-gray-600 font-bold'>Kajol</span></p>
        <p className='py-3 text-md  text-gray-500 font-semibold'>Last Name : <span className='text-gray-600 font-bold'>Kibria</span></p>
        <p className='py-3 text-md  text-gray-500 font-semibold'>Age : <span className='text-gray-600 font-bold'>21 Years</span></p>
        <p className='py-3 text-md  text-gray-500 font-semibold'>Nationality : <span className='text-gray-600 font-bold'>Bangladeshi</span></p>
        </div>
        <div>
          <p className='py-3 text-md  text-gray-500 font-semibold'>Address : <span className='text-gray-600 font-bold'>Dhaka</span></p>
          <p className='py-3 text-md  text-gray-500 font-semibold'>Phone : <span className='text-gray-600 font-bold'>01402874542</span></p>
          <p className='py-3 text-md text-gray-500 font-semibold'>Email : <span className='text-gray-600 font-bold'>kajolkibria95@gmail.com</span></p>
          <p className='py-3 text-md  text-gray-500 font-semibold'>Langages : <span className='text-gray-600 font-bold'>English, Hindi</span></p>
        </div>
        </div>
       
          <a href='./KAJOL_KIBRIA.pdf' download className='w-fit my-4 text-center group uppercase text-sm text-gray-600 flex gap-3 items-center py-2 px-4 border  border-yellow-500 rounded-full hover:text-white hover:bg-yellow-500 transition-all duration-200 font-bold active:scale-90'>Download RESUME <FiDownload  className='text-yellow-500 group-hover:text-white  transition-all duration-200' size={18}/></a>
          
          
       
      </div>
      <div className='sm:w-[50%] sm:flex gap-10'>
        <div className='border rounded-lg w-72 h-52 my-10 sm:my-0 mx-auto'>
          <div className='px-5 py-5'>
          <span className='text-yellow-500 text-7xl font-bold  w-[10%]'>10+</span>
          <hr className='w-32'/><hr className='w-32'/><h1 className='my-4 ml-20 text-gray-600'>Projects build with next.js and tailwind.</h1>
          </div>
        </div>
        <div className='border rounded-lg w-72 h-52 mx-auto'>
          <div className='px-5 py-5'>
          <span className='text-yellow-500 text-7xl font-bold text w-[10%]'>5+</span>
          <hr className='w-24'/><hr className='w-24'/><h1 className='my-4 ml-20 text-gray-600'>Months of working experience with frontend projects.</h1>
          </div>
        </div>
      </div>
    </div>
    <hr className='my-28 w-[55%] mx-auto'/>
      <h1 className='text-3xl text-gray-600 font-bold text-center'>My Skills</h1>
    <div className='flex items-center justify-center'>
    

    <div className='grid grid-cols-2 sm:grid-cols-6 items-center justify-center sm:gap-20 gap-10 sm:my-20 my-10'>
      <div> <div className=' flex items-center justify-center w-32 h-32 rounded-full bg-gra1'>
      <div className='w-[80%] h-[80%] rounded-full bg-white content-center text-center text-gray-600 font-bold text-xl'>90%</div>
    </div>
    <h1 className='text-center py-4 font-bold text-gray-600'>HTML & CSS</h1></div>
      <div> <div className='flex items-center justify-center w-32 h-32 rounded-full bg-gra2'>
      <div className='w-[80%] h-[80%] rounded-full bg-white content-center text-center text-gray-600 font-bold text-xl'>80%</div>
    </div>
    <h1 className='text-center py-4 font-bold text-gray-600'>JavaScript</h1></div>
      <div> <div className='flex items-center justify-center w-32 h-32 rounded-full bg-gra2'>
      <div className='w-[80%] h-[80%] rounded-full bg-white content-center text-center text-gray-600 font-bold text-xl'>80%</div>
    </div>
    <h1 className='text-center py-4 font-bold text-gray-600'>Tailwind CSS</h1></div>
      <div> <div className='flex items-center justify-center w-32 h-32 rounded-full bg-gra4'>
      <div className='w-[80%] h-[80%] rounded-full bg-white content-center text-center text-gray-600 font-bold text-xl'>70%</div>
    </div>
    <h1 className='text-center py-4 font-bold text-gray-600'>React</h1></div>
      <div> <div className='flex items-center justify-center w-32 h-32 rounded-full bg-gra5'>
      <div className='w-[80%] h-[80%] rounded-full bg-white   content-center text-center text-gray-600 font-bold text-xl'>75%</div>
    </div>
    <h1 className='text-center py-4 font-bold text-gray-600'>Next.js</h1></div>
      <div> <div className='flex items-center justify-center w-32 h-32 rounded-full bg-gra6'>
      <div className='w-[80%] h-[80%] rounded-full bg-white  content-center text-center text-gray-600 font-bold text-xl'>90%</div>
    </div>
    <h1 className='text-center py-4 font-bold text-gray-600'>Git & Github</h1></div>
   
    
    
    
    
    
    </div>
    </div>
    
    </div>
  )
}
