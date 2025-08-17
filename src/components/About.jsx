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
        <div className='w-[80%] md:w-[45%]'>
          <h1 className='text-gray-200 mt-7 text-sm md:text-base md:ml-9 leading-relaxed'>
         Passionate and dedicated Full stack web developer, helping businesses and entrepreneurs turn their ideas into responsive, secure, and scalable websites that not only look great but also work seamlessly for their users. <br /><br />
         From smooth navigation to strong security measures, I focus on creating solutions that solve real challenges—whether it’s improving user experience, boosting performance, or ensuring your site grows with your business.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default About