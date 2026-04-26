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
          <div className='text-gray-200 mt-7 text-xs md:text-sm md:ml-9 leading-relaxed'>
I help SaaS founders and early-stage businesses turn ideas into clean, reliable digital products that people can actually use. With 1+ year of hands-on experience, I focus on building websites and MVPs that are fast, easy to navigate, and designed to grow with your business, without unnecessary complexity.<br/> <br/>

From shaping the first version of your product to refining user experience and performance, I work with a problem-solving mindset. The goal isn’t just to “build a website,” but to create something that supports your business, communicates your value clearly, and works smoothly for your users from day one.<br/><br/>

If you’re looking to launch an MVP, validate an idea, or improve an existing product, I focus on delivering solutions that are practical, scalable, and aligned with your goals.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About