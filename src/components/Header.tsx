import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <div>
    <div className='px-3  md:px-8 lg:px-28 bg-[url(/Images/bg.jpg)] bg-no-repeat bg-cover bg-center h-[400px] md:h-[650px]'>
      <div className='flex justify-between items-center '>
        <Image src="/Images/logo.png" alt='logo' width={130} height={150}
        className='w-[130px] sm:w-auto'/>
          <button className='font-semibold  text-[18px] md:text-[22px] border-[5px] border-black px-3 py-2 sm:px-2 text-white shadow-[-7px_7px_0px_#d3d3d3] '>Explore Sports </button>
      </div>
      <br /> <br /> <br />
       <div className='text-center my-8'>
         <h1 className='font-bold text-3xl md:text-[50px] text-white'>The Sports Universe</h1>
         <p className='text-white  mt-8 m-auto  max-w-[740px]  text-sm md:text-xl'>Welcome to The Sports Universe,Your one-stop blog for the latest updates and insights on all sports. Stay tuned and explore the world of sports with us!
</p>
       </div>
    </div>
    <form className='flex justify-between max-w-[500px] scale-75 border border-black mx-auto mt-10 h-14 shadow-[-7px_7px_0px_#000000]'>
          <input type="email" placeholder='Enter Your Email' className='pl-4 outline-none' />
          <button type='submit' className='border-l border-black py-4 px-4 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
    </div>
  )
}

export default Header
