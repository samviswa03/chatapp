import React from 'react'
// import waren from './assets/wbufet.png';
import chatui from '../src/assets/chatui.png';
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from './footer';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';
import c4 from './assets/c4.png';



function Home({ goToChat }) {
  return (
    <div>
      <Navbar />
      <div className='md:w-full flex flex-col justify-center items-center md:h-fit md:mx-auto'>
        <div className='mt-44 p-3 flex flex-col w-full lg:w-[1000px] bg-white'>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Chat app</h1>
          <div className='flex items-center gap-5 md:justify-between w-full mt-3'>
            <img src="https://i.postimg.cc/6qnNKVzc/wbufet.jpg" className='w-16 h-16 md:h-20 md:w-20 rounded-full' alt="logo" />
            <p className='md:text-xl' >Waran Bufet</p>
            <p className='md:text-xl'>Available to work</p>
            <FontAwesomeIcon icon={faHeart} className=" text-pink-600 outline-2 outline-gray-300  p-1 rounded-full text-lg" />
            <button onClick={goToChat} className='bg-black rounded-full p-1 md:p-3 text-white' >Get in touch</button>
          </div>
        </div>
        <div className='w-full md:w-[750px] lg:w-[1000px] md:h-[500px] lg:h-[800px] md:mx-auto md:rounded-xl p-6 flex items-center justify-center bg-gray-200'>
          <img src={chatui} className='md:w-xl lg:w-4xl' alt="" />
        </div>
      </div>
      <div className='mt-10 flex flex-col justify-center items-center'>
        <div className='flex'>

        <FontAwesomeIcon className='text-3xl md:text-5xl ml-3 p-5'  icon={faMessage} style={{ color: "#74C0FC" }} />
        <FontAwesomeIcon className='text-3xl md:text-5xl ml-3 p-5'  icon={faUserTie} style={{ color: "#74C0FC" }} />
        <FontAwesomeIcon className='text-3xl md:text-5xl ml-3 p-5'  icon={faShareFromSquare} style={{ color: "#74C0FC" }} />
          </div> 
          <div className='flex flex-col gap-4 mt-24 md:grid grid-cols-4 md:gap-6 ' >
            <img src={c1} alt="" />
            <img src={c2} alt="" />
            <img src={c3} alt="" />
            <img src={c4} alt="" />
          </div>
       

      </div>
      <Footer />
    </div>
  )
}

export default Home;