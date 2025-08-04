import React from 'react'
import logo from '../src/assets/chatlogo.png';



function Footer() {
  return (
    <div className='w-full h-fit p-10 md:space-x-10 bg-amber-300 mt-56 flex items-center gap-16' >
      <img src={logo} className='w-24 h-24 md:w-48 md:h-44' alt="" />
      <div className='grid grid-cols-2 gap-4 lg:flex lg:font-bold lg:text-2xl lg:gap-8 '>  
        <p>For designers</p>
        <p>Hire talent</p> 
        <p>Inspiration</p>
        <p>Advertising</p>
        <p>Blog</p>
        <p>About</p>
        <p>Careers</p>
        <p>Support</p>
      </div>
    

    </div>
  )
}

export default Footer;