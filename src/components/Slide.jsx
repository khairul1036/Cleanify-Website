/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-72 md:h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
          <Link
            to='/services'
            className='btn bg-blue-600 text-white border-none hover:bg-amber-500'
          >
            Booked a Service <FaArrowRight className='text-xl'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
