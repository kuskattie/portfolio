import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaInstagram, FaFacebookF} from 'react-icons/fa'

export const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://scottkelby.com/wp-content/uploads/2009/02/portcam2.jpg' alt=''></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className='sm:text-5xl text-4xl font-bold text-grey-800'>I'm Katerina</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-grey-800'>I'm a 
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'video maker',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'enthusiast',
        2000,
        'world explorer',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />
                </h2>
                <div className='flex justify-center pt-6 max-w-[200px] w-full'>
                    <FaInstagram className='cursor-pointer' size={20} />
                    <FaFacebookF className='cursor-pointer' size={20} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main