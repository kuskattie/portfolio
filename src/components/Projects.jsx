import React from 'react'
import ProjectItem from './ProjectItem.jsx'
import proj1Img from '../assets/proj1.jpg'
import proj2Img from '../assets/proj2.jpg'
import proj3Img from '../assets/proj3.jpg'
import proj4Img from '../assets/proj4.jpg'

export const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#0e7490]'>Projects</h1>
        <p className='text-center py-8'></p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={proj1Img} title='' />
            <ProjectItem  img={proj2Img} title='' />
            <ProjectItem img={proj3Img} title='' />
            <ProjectItem img={proj4Img} title='' />
        </div>
    </div>
  )
}

export default Projects