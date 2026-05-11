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
          <img src={myImage} alt="Fiza Shakil - Professional headshot of Full Stack Developer" className='w-full h-full object-cover rounded-xl shadow-2xl' />
        </div>
        <div className='w-[80%] md:w-[45%]'>
          <p className='text-gray-200 mt-7 text-xs md:text-sm md:ml-9 leading-relaxed'>
            {/* I'm a Full Stack Developer with 1+ year of hands-on experience helping SaaS founders and early-stage businesses turn ideas into clean, reliable digital products. I build fast, scalable websites and MVPs using the MERN stack, with a focus on clear user experience, solid architecture, and solutions that grow with your business from day one. */}
          </p>
          <p className='text-gray-200 mt-7 text-xs md:text-sm md:ml-9 leading-relaxed'>
            I help SaaS founders and early-stage businesses turn ideas into scalable digital products through modern web development and MVP-focused solutions.
<br /><br />
           As a Full Stack Developer, I focus on building fast, reliable, and user-friendly web applications that not only look clean but also support real business goals. From landing pages to full MVPs, I aim to create products that are easy to use, easy to maintain, and ready to grow as the business evolves.
<br /><br />
          My approach goes beyond writing code — I focus on understanding the problem, improving user experience, and building solutions that deliver practical value from the start. Whether it’s validating a new idea, refining an existing platform, or improving performance and usability, I work with a product-oriented mindset to help founders move faster with clarity and confidence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
