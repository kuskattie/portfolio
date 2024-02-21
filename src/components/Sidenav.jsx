import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из React Router
import { HiCamera, HiEnvelope, HiHeart, HiHomeModern } from 'react-icons/hi2';
import 'tailwindcss/tailwind.css';

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <HiHomeModern onClick={handleNav} className='absolute top-4 right-4 z-[99]' />
      {nav ? (
        <div className='fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-white/90'>
          {/* Используем Link для навигации */}
          <Link to="/main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
            <HiHomeModern size={20} />
            <span className='pl-4'>Home</span>
          </Link>
          <Link to="/projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
            <HiCamera size={20} />
            <span className='pl-4'>Projects</span>
          </Link>
          <Link to="/home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
            <HiHeart size={20} />
            <span className='pl-4'>Inspo</span>
          </Link>
          <Link to="/contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-grey-100 shadow-grey-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
            <HiEnvelope size={20} />
            <span className='pl-4'>Contact</span>
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          <Link to="/main" className='p-4 m-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer bg-grey-100 shadow-grey-400 hoverscale-110' onClick={handleNav}>
            <HiHomeModern size={20} />
          </Link>
          <Link to="/projects" className='p-4 m-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer bg-grey-100 shadow-grey-400 hoverscale-110' onClick={handleNav}>
            <HiCamera size={20} />
          </Link>
          <Link to="/main" className='p-4 m-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer bg-grey-100 shadow-grey-400 hoverscale-110' onClick={handleNav}>
            <HiHeart size={20} />
          </Link>
          <Link to="/contact" className='p-4 m-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer bg-grey-100 shadow-grey-400 hoverscale-110' onClick={handleNav}>
            <HiEnvelope size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
