import React from 'react'
import logo from './assets/chatlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
     <nav className='fixed w-full bg-white z-1'>
      <div className="flex flex-wrap items-center mx-5 justify-between">
        <div className="flex lg:hidden">
          <button className="text-4xl font-bold text-black">☰</button> 
          <img src={logo} className="md:w-45 md:h-30 w-40 "/>
        </div>
          <img src={logo} className="hidden lg:block lg:h-30 lg:w-40 "/>
           
        <div className="hidden lg:flex lg:order-2 gap-8 lg:gap-10">
          <a href="#" className="text-black hover:underline font-bold">Explore</a>
          <a href="#" className="text-black hover:underline font-bold">Hire a Designer</a>
          <a href="#" className="text-black hover:underline font-bold">Find Jobs</a>
          <a href="#" className="text-black hover:underline font-bold">Blog</a>
        </div>
     
        
        <div className='gap-7 items-center md:order-3 flex md:flex'>
          <h1 className='font-bold text-sm'>Sign up</h1>
          <h1 className='font-bold text-sm bg-black rounded-full text-white p-2'>Login</h1>
        </div>
        <div className='bg-gray-200 sm:p-3 w-full md:w-1/2 lg:w-[450px] md:order-1 rounded-4xl items-center flex justify-between px-5 '>
              <input type="text" placeholder='What are you looking for?' className='center'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className=" text-white bg-pink-500 p-2 rounded-full text-2xl" />
           </div>
      </div>
    </nav>
  )
}
