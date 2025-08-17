import React from 'react'
import backGroundImage from '../assets/background_image_heroSection.jpg'

const HeroSection = () => {
  return (
    <div>
        <div className="relative overflow-hidden">
            <img 
              src={backGroundImage} 
              alt="heroSection_Image" 
              className='w-full h-[500px] object-cover' 
            />
            <div className='absolute top-0 left-0 w-full h-[573px] bg-black opacity-80'></div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
                <h1 className='text-white mx-4 text-2xl md:text-4xl font-bold text-center'>
                    Fiza Shakil:
                    <span className='text-gray-300'> Full Stack Web Developer</span>
                </h1>
                <h2 className='text-white mx-4 mt-6 italic text-center'>
                  Deciphering the digital language, bridging the gap between ideas and reality
                </h2> 
                <div className='flex items-center gap-4 mt-14 text-sm md:text-base'>
                  <a href="https://drive.google.com/file/d/1DxEfjW93GdylQ3j2-NojBAWkv6CcWEow/view?usp=drive_link" target='_blank'>
                    <button className='bg-[#517E4F] border-[2px] border-[#517E4F] duration-300 hover:bg-[#04090d] text-white md:px-4 px-2 py-2 rounded-md transform hover:scale-105 transition-all'>
                      View my Resume <i className='fa-solid fa-download'></i> 
                    </button>
                  </a>
                  <a href="#contact">
                    <button className='bg-[#04090d] border-[2px] border-[#517E4F] hover:bg-[#517E4F] duration-300 text-white md:px-4 px-2 py-2 rounded-md transform hover:scale-105 transition-all'>
                      Get in Touch <i className='fa-solid fa-arrow-right'></i>  
                    </button>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection