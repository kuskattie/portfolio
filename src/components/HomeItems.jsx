import React from 'react'

export const HomeItems = ({author, quote}) => {
  return (
    <ul className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-sm md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-[#0e7490] rounded-md'>{author}</span>
            </p>
            <p className='my-2 text-base text-normal text-stone-500'>{quote}</p>
        </li>
    </ul>
  )
}

export default HomeItems