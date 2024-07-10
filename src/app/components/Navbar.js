'use client'
import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { TiHome, TiUser } from "react-icons/ti";
import { PiFacebookLogo, PiGithubLogo, PiInstagramLogo, PiLinkedinLogo, PiSuitcaseSimpleFill } from "react-icons/pi";

import { TbMailFilled } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname} from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();
   const navArray= [ {
      path : '/',
      name : "Home",
      icon : <TiHome/>
    },
    {
      path : '/about',
      name : "About",
      icon : <TiUser/>
    },
    {
      path : '/portfolio',
      name : "Portfolio",
      icon : <PiSuitcaseSimpleFill/>
    },
    {
      path : '/contact',
      name : "Contact",
      icon : <TbMailFilled/>
    },
    
  ];
  
  const [menu, setMenu] = useState(false);
  return (

    <div className=''>
      
      <div className='sm:px-40 px-8 py-5 absolute flex items-center justify-between w-[100%] '>
        <Link href='/'>
        <div className='flex gap-2 items-center'>
          <Image src='/kk.png' alt='logo' width={40} height={20}/>
          <h1 className='sm:text-2xl text-xl text-gray-700 font-bold'>KAJOL <span className='text-yellow-500'>KIBRIA</span></h1>
        </div>
        </Link>
        <div className='hidden sm:block'>
        <div className='flex gap-8 text-xl'>
            <a href='https://github.com/Kajol-Kibria'><PiGithubLogo/></a>
            <a href='https://www.instagram.com/kajolkibria07/'><PiInstagramLogo/></a>
            <a href='https://www.facebook.com/kajol.kibria.77'><PiFacebookLogo/></a>
            <a href='https://www.linkedin.com/in/kajol-kibria-8b2004252/'><PiLinkedinLogo/></a>
        </div>
      </div>
      </div>
      <div className=' z-[1000]  '>
        <span onClick={()=>setMenu(!menu)} className='top-5 right-5 z-[1000] fixed sm:hidden'>{menu?(<CgClose size={33}/>):(<LuMenu size={33}/>)}</span>
        <div onClick={()=>setMenu(!menu)} className={`flex flex-col bg-orange-50 content-center top-0 bottom-0 right-0 left-0 fixed py-20 px-7 w-screen ${menu?"block":"hidden"}`}>
        {navArray.map(({name, path, icon})=>{
          return (
            <Link className={`${pathName === path ? ' text-gray-600 font-semibold':""} flex items-center gap-4 text-2xl  text-gray-600 py-5 border-b`} href={path}>{icon}{name}</Link>
        )
           
          
        })}
         </div>
      </div>
      <div>
        <div className='hidden sm:block z-50'>
          
      <div className='fixed flex flex-col gap-4 right-14 justify-center h-[100%] items-end py-5 px-5 bg-gray-10'>
        {navArray.map(({name, path, icon})=>{
          return (
            <Link className={`group flex items-center text-2xl text-gray-600`} href={path}>
            <p className='h-[64px] content-center px-8  -right-32 group-hover:right-28 group-hover:rotate-0 rotate-90 fixed   transition-all duration-500 rounded-full'>{name}</p>
            <div className={`${pathName === path ? 'bg-yellow-500 text-white':""} py-4 px-4 rounded-full bg-gray-200 hover:bg-yellow-500  z-10 transition-all duration-500 group-hover:text-white`}>{icon}</div>
            </Link>
        )
           
          
        })}
         
          
 
          
        </div>
        
        </div>
      </div>

    </div>
  )
}
