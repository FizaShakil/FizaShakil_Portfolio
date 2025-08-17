import React from 'react'

const Heading = ({heading}) => {
  return (
    <div>
        <h2 className='text-center text-gray-200 font-bold text-3xl mb-8 md:text-4xl'>
        {heading}
        </h2>
    </div>
  )
}

export default Heading