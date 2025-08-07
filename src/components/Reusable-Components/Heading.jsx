import React from 'react'

const Heading = ({heading}) => {
  return (
    <div>
        <div className='text-center text-gray-200 font-bold text-3xl mt-16 mb-8 md:text-4xl'>
        {heading}
        </div>
    </div>
  )
}

export default Heading