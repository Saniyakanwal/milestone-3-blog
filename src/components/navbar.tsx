import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r  from-blue-700 via-blue-500 to-blue-800 p-6'>
      <h1 className='font-bold md:text-3xl md:ml-5 ml-16'> The Sports Universe </h1>
      <div className=" hidden md:gap-6 md:text-white md:flex md:justify-end  md:items-end md:-mt-6 md:mr-5">
      <a href="/" className="hover:text-black">Home</a>
      <a href="/" className="hover:text-black">Sports</a>
      <a href="/" className="hover:text-black">Featured</a>
      <a href="/" className="hover:text-black">Contact</a>
    </div>
    </div>
  )
}

export default Navbar
