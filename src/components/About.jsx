import React from 'react'
import Heading from './Reusable-Components/Heading'
import myImage from '../assets/myImage.jpg'

const About = () => {
  return (
    <div id='about' className='pt-16'>
      <div>
        <Heading heading={"About Me"} />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
        <div className='w-[250px] md:w-[300px]'>
          <img src={myImage} alt="about" className='w-full h-full object-cover rounded-xl shadow-2xl' />
        </div>
        <div className='w-[80%] md:w-[40%]'>
          <div className='text-gray-200 mt-7 text-sm md:text-base md:ml-9 leading-relaxed'>
            Passionate and dedicated Full stack Web Developer with hands-on experience in building responsive, secured, scalable and user-friendly websites. Committed to continuous learning and always eager to explore new technologies to enhance development skills. 
            Thrives in self-driven environments and takes pride in writing clean, maintainable code.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About