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
            I help SaaS founders and early-stage businesses turn ideas into scalable digital products that actually make money and solve real problems.
<br /><br />
           Whether you're launching a new product, scaling an existing business, or automating operations, I build solutions that are easy to use, work reliably, and deliver measurable results. I focus on understanding your business goals first—then building systems that support those goals, not just pretty interfaces.
<br /><br />
          My approach: I listen to your challenges, understand your customers, and build solutions designed to increase revenue, save time, reduce costs, or improve customer satisfaction. From MVPs to full-scale platforms, I partner with you to create products that grow with your business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
