import React,{useState} from 'react';

import {HiCamera, HiEnvelope, HiHeart, HiHomeModern} from 'react-icons/hi2'
import 'tailwindcss/tailwind.css';

const Sidenav = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
};
return (
  <div>
    <HiHomeModern onClick={handleNav} className='absolute top-4 right-4 z-[99]' />
    {nav ? (
      <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
        <a href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
          <HiHomeModern size={20} />
          <span className='pl-4'>Home</span>
        </a>
        <a href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
          <HiCamera size={20} />
          <span className='pl-4'>Projects</span>
        </a>
        <a href='#home' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
          <HiHeart size={20} />
          <span className='pl-4'>Inspo</span>
          </a>
          <a href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
          <HiEnvelope size={20} />
          <span className='pl-4'>Contact</span>
        </a>
      </div>
    ) : (
      ""
    )}
        <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <a href='#main' className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hoverscale-110 ease-in duration-300'>
            <HiHomeModern onClick={handleNav} size={20} />
          </a>
          <a href='#projects' className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hoverscale-110 ease-in duration-300'>
            <HiCamera onClick={handleNav} size={20} />
          </a>
          <a href='#main' className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hoverscale-110 ease-in duration-300'>
            <HiHeart onClick={handleNav} size={20} />
          </a>
          <a href='#contact' className='rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hoverscale-110 ease-in duration-300'>
            <HiEnvelope onClick={handleNav} size={20} />
          </a>
        </div>
      </div>

  </div>  
);
    }

export default Sidenav