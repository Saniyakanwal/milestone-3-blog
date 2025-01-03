import Image from 'next/image'
import React from 'react'
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-blue-700 flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row py-5'>
      <Image src="/Images/logo.png" alt='logo' width={90} height={40}/>
      <p className='text-sm   mt-2  md:mt-11 font-bold'>All right reserved. copyright @sportuniverse</p>
      <div className='flex mt-11 gap-6 '>
        <FaFacebook />
        <FaInstagram/>
        <FaGithub/>
        <FaLinkedin/>
      </div>
    </div>
  )
}

export default Footer
